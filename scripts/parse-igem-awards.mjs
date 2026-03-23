import fs from 'fs';
import path from 'path';

const input = process.argv[2];
const output = process.argv[3];
if (!input || !output) {
  console.error('Usage: node scripts/parse-igem-awards.mjs <input.txt> <output.ts>');
  process.exit(1);
}

const raw = fs.readFileSync(input, 'utf8');
const lines = raw.split(/\r?\n/);

const divisionMap = { HS: 'High School', UG: 'Undergraduate', OG: 'Graduate' };

function normalizeTeamName(name) {
  return name.trim().replace(/\s+/g, ' ');
}

function createEmptyEntry(teamName, year) {
  return {
    id: `${year}-${teamName}`.replace(/[^a-zA-Z0-9-_]+/g, '-'),
    teamName,
    year,
    division: null,
    village: null,
    grandPrizeLevel: null,
    top10: false,
    villageAwards: [],
    medal: null,
    specialPrizes: [],
    countries: [],
  };
}

const yearData = new Map();
function getEntry(year, teamName) {
  const key = `${year}::${teamName}`;
  if (!yearData.has(key)) yearData.set(key, createEmptyEntry(teamName, year));
  return yearData.get(key);
}

let currentYear = null;
let section = null;

for (const rawLine of lines) {
  const line = rawLine.trimEnd();
  const yearMatch = line.match(/^##\s+(\d{4})\b/);
  if (yearMatch) {
    currentYear = Number(yearMatch[1]);
    section = null;
    continue;
  }
  if (!currentYear) continue;
  if (line.startsWith('### Grand Prize')) { section = 'grand'; continue; }
  if (line.startsWith('### Top 10')) { section = 'top10'; continue; }
  if (line.startsWith('### Village Awards')) { section = 'village'; continue; }
  if (line.startsWith('### Special Prizes')) { section = 'special'; continue; }
  if (!line.trim() || line.startsWith('#')) continue;

  const trimmed = line.trim();

  if (section === 'grand') {
    const m = trimmed.match(/^(HS|UG|OG)\s+(Grand Prize Winner|1st Runner-up|2nd Runner-up):\s+(.+?)\s+\(([^)]+)\)(?:\s+\[([^\]]+)\])?$/);
    if (m) {
      const [, divCode, level, teamRaw, country, village] = m;
      const teamName = normalizeTeamName(teamRaw);
      const entry = getEntry(currentYear, teamName);
      entry.division = divisionMap[divCode];
      entry.grandPrizeLevel = level;
      if (village) entry.village = village.trim();
      if (country) entry.countries.push(country.trim());
    }
    continue;
  }

  if (section === 'top10') {
    const m = trimmed.match(/^(HS|UG|OG):\s+(.+)$/);
    if (m) {
      const [, divCode, rest] = m;
      const teams = rest.split(',').map(s => normalizeTeamName(s)).filter(Boolean);
      for (const teamName of teams) {
        const entry = getEntry(currentYear, teamName);
        entry.division = entry.division || divisionMap[divCode];
        entry.top10 = true;
      }
    }
    continue;
  }

  if (section === 'village') {
    const m = trimmed.match(/^(.+?):\s+WINNER=(.+?)(?:\s*\|\s*nominees:\s*(.+))?$/);
    if (m) {
      const [, label, winnersRaw, nomineesRaw] = m;
      const divMatches = [...label.matchAll(/\((HS|UG|OG|combined)\)/g)].map(x => x[1]);
      const explicitDivision = divMatches.find(d => d !== 'combined');
      const division = explicitDivision ? divisionMap[explicitDivision] : null;
      const awardName = label.replace(/\s*\((HS|UG|OG|combined)\)/g, '').trim();
      const inferredVillage = awardName.replace(/^Best\s+/, '').replace(/\s+Project$/, '').trim();
      const winners = winnersRaw.split('/').map(s => normalizeTeamName(s)).filter(Boolean);
      const nominees = (nomineesRaw || '').split(',').map(s => normalizeTeamName(s)).filter(Boolean);
      for (const teamName of [...new Set([...winners, ...nominees])]) {
        const entry = getEntry(currentYear, teamName);
        if (division && !entry.division) entry.division = division;
        entry.villageAwards.push({
          name: awardName,
          status: winners.includes(teamName) ? 'Winner' : 'Nominee',
        });
        if (!entry.village || entry.village === divisionMap.HS || entry.village === divisionMap.UG || entry.village === divisionMap.OG) {
          entry.village = inferredVillage;
        }
      }
    }
    continue;
  }

  if (section === 'special') {
    const m = trimmed.match(/^(.+?):\s+(.+)$/);
    if (!m) continue;
    const [, prizeNameRaw, detailRaw] = m;
    const prizeName = prizeNameRaw.trim();
    const divisionChunks = detailRaw.split('|').map(s => s.trim()).filter(Boolean);
    for (const chunk of divisionChunks) {
      const d = chunk.match(/^(HS|UG|OG|combined)\s+WINNER=(.+?)(?:\s*\(nominees:\s*(.+)\))?$/);
      if (!d) continue;
      const [, divCode, winnersRaw, nomineesRaw] = d;
      const division = divCode === 'combined' ? null : divisionMap[divCode];
      const winners = winnersRaw.split('/').map(s => normalizeTeamName(s)).filter(Boolean);
      const nominees = (nomineesRaw || '').split(',').map(s => normalizeTeamName(s)).filter(Boolean);
      for (const teamName of [...new Set([...winners, ...nominees])]) {
        const entry = getEntry(currentYear, teamName);
        if (division && !entry.division) entry.division = division;
        entry.specialPrizes.push({
          name: prizeName,
          status: winners.includes(teamName) ? 'Winner' : 'Nominee',
        });
      }
    }
    continue;
  }
}

const entries = Array.from(yearData.values())
  .map(entry => {
    entry.villageAwards = entry.villageAwards.filter((v, i, arr) => arr.findIndex(x => x.name === v.name && x.status === v.status) === i);
    entry.specialPrizes = entry.specialPrizes.filter((v, i, arr) => arr.findIndex(x => x.name === v.name && x.status === v.status) === i);
    entry.countries = [...new Set(entry.countries.filter(Boolean))];
    if (!entry.grandPrizeLevel && entry.top10) entry.grandPrizeLevel = 'Top 10';
    if (!entry.division) {
      const inferred = entry.teamName.match(/(HS|High School|School)/i) ? 'High School' : null;
      if (inferred) entry.division = inferred;
    }
    return entry;
  })
  .sort((a, b) => b.year - a.year || a.teamName.localeCompare(b.teamName));

const content = `export type PrizeStatus = 'Winner' | 'Nominee';\n\nexport interface TeamPrize {\n  name: string;\n  status: PrizeStatus;\n}\n\nexport interface TeamAwardRecord {\n  id: string;\n  teamName: string;\n  year: number;\n  division: 'High School' | 'Undergraduate' | 'Graduate' | null;\n  village: string | null;\n  grandPrizeLevel: string | null;\n  top10: boolean;\n  villageAwards: TeamPrize[];\n  medal: 'Gold' | 'Silver' | 'Bronze' | null;\n  specialPrizes: TeamPrize[];\n  countries: string[];\n}\n\nexport const TEAM_AWARD_RECORDS: TeamAwardRecord[] = ${JSON.stringify(entries, null, 2)};\n`;

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, content);
console.log(`Wrote ${entries.length} records to ${output}`);
