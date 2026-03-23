import fs from 'fs';
import path from 'path';

const outPath = process.argv[2] || 'tmp/igem-official-supplement.json';
const years = (process.argv[3] ? process.argv[3].split(',') : ['2025','2024','2023','2022','2021','2020'])
  .map(x => x.trim())
  .filter(Boolean);

const API = 'https://api.igem.org/v1';

function norm(text = '') {
  return String(text).replace(/\u00a0/g, ' ').replace(/↗/g, '').replace(/\s+/g, ' ').trim();
}

function uniq(arr) {
  return [...new Set(arr.filter(Boolean).map(norm))];
}

function sectionToDivision(text = '') {
  const t = String(text).toLowerCase();
  if (t.includes('high-school') || t.includes('high school')) return 'High School';
  if (t.includes('undergrad') || t.includes('undergraduate') || t.includes('collegiate')) return 'Undergraduate';
  if (t.includes('overgrad') || t.includes('graduate')) return 'Graduate';
  return null;
}

function subTypeLabel(type, subType, title) {
  const s = String(subType || '').toLowerCase();
  const t = String(type || '').toLowerCase();
  if (t === 'medal') {
    if (s === 'gold') return 'GOLD MEDAL';
    if (s === 'silver') return 'SILVER MEDAL';
    if (s === 'bronze') return 'BRONZE MEDAL';
  }
  if (t === 'grand-prize') {
    if (s === 'winner') return 'GRAND PRIZE';
    if (s === 'first-runner-up') return 'FIRST RUNNER-UP';
    if (s === 'second-runner-up') return 'SECOND RUNNER-UP';
    if (s === 'top') return 'TOP 10';
  }
  if (t === 'finalist') return 'FINALIST';
  return norm(title || subType || type);
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { accept: 'application/json' } });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`${res.status} ${res.statusText} for ${url} :: ${text.slice(0, 300)}`);
  }
  return await res.json();
}

async function fetchAllTeamsByYear(year) {
  const out = [];
  const seen = new Set();
  let page = 1;
  let total = Infinity;

  while (out.length < total) {
    const resp = await fetchJson(`${API}/teams?year=${year}&page=${page}`);
    const rows = Array.isArray(resp?.data) ? resp.data : Array.isArray(resp) ? resp : [];
    if (Number.isFinite(Number(resp?.total))) total = Number(resp.total);
    if (!rows.length) break;

    for (const row of rows) {
      const id = String(row?.id ?? '');
      if (!id || seen.has(id)) continue;
      seen.add(id);
      out.push(row);
    }

    page += 1;
  }

  return out;
}

async function scrapeYear(year) {
  const competition = await fetchJson(`${API}/competitions/${year}/igem`);
  const competitionUUID = competition.uuid;
  const [teams, awardsResults, villageVersions] = await Promise.all([
    fetchAllTeamsByYear(year),
    fetchJson(`${API}/competitions/${competitionUUID}/awards/results`),
    fetchJson(`${API}/villages/versions?year=${year}`),
  ]);
  const villageMap = new Map(
    (Array.isArray(villageVersions) ? villageVersions : []).map(v => [v.villageUUID, norm(v.title || v.village?.name || '')])
  );

  const records = new Map();
  for (const team of teams) {
    records.set(String(team.id), {
      year: Number(year),
      teamName: norm(team.name),
      teamId: team.id,
      href: `https://teams.igem.org/${team.id}`,
      wikiUrl: team.wikiURL || null,
      division: sectionToDivision(team.section),
      village: villageMap.get(team.villageUUID) || null,
      medal: null,
      results: [],
      nominations: [],
    });
  }

  for (const award of Array.isArray(awardsResults) ? awardsResults : []) {
    const label = subTypeLabel(award.type, award.subType, award.title);
    for (const teamAward of Array.isArray(award.teamAwards) ? award.teamAwards : []) {
      const teamId = String(teamAward.team?.id ?? '');
      if (!teamId || !records.has(teamId)) continue;
      const rec = records.get(teamId);
      if (award.type === 'medal') {
        rec.medal = label.replace(' MEDAL', '').replace(/^./, c => c.toUpperCase()).toLowerCase();
        rec.medal = rec.medal.charAt(0).toUpperCase() + rec.medal.slice(1);
        rec.results.push(label);
        continue;
      }
      if (String(teamAward.decision).toLowerCase() === 'winner') rec.results.push(label);
      if (String(teamAward.decision).toLowerCase() === 'nominee') rec.nominations.push(norm(award.title));
    }
  }

  return [...records.values()]
    .map(r => ({ ...r, results: uniq(r.results), nominations: uniq(r.nominations) }))
    .sort((a, b) => a.teamName.localeCompare(b.teamName));
}

const existing = fs.existsSync(outPath) ? JSON.parse(fs.readFileSync(outPath, 'utf8')) : [];
const keep = existing.filter(x => !years.includes(String(x.year)));
const all = [...keep];
let failedYears = [];

for (const year of years) {
  try {
    const rows = await scrapeYear(year);
    all.push(...rows);
    console.log(`OK year=${year} records=${rows.length}`);
  } catch (err) {
    failedYears.push({ year, error: String(err.message || err) });
    console.log(`FAIL year=${year} ${String(err.message || err).slice(0, 300)}`);
  }
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(all, null, 2));
console.log(JSON.stringify({ wrote: all.length, outPath, failedYears }, null, 2));
