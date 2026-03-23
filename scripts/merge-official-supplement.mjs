import fs from 'fs';

const awardsPath = process.argv[2];
const supplementPath = process.argv[3];
if (!awardsPath || !supplementPath) {
  console.error('Usage: node scripts/merge-official-supplement.mjs <awards-v2.ts> <supplement.json>');
  process.exit(1);
}

const awardsText = fs.readFileSync(awardsPath, 'utf8');
const match = awardsText.match(/export const TEAM_AWARD_RECORDS: TeamAwardRecord\[] = ([\s\S]*);\s*$/);
if (!match) throw new Error('Could not parse awards-v2.ts');
const records = JSON.parse(match[1]);
const supplements = JSON.parse(fs.readFileSync(supplementPath, 'utf8'));

function norm(text='') {
  return String(text).replace(/\u00a0/g, ' ').replace(/↗/g, '').replace(/\s+/g, ' ').trim();
}
function key(year, teamName) {
  return `${year}::${norm(teamName).toLowerCase()}`;
}

const supplementMap = new Map(supplements.map(s => [key(s.year, s.teamName), s]));
let updated = 0;
const changes = [];

for (const record of records) {
  const sup = supplementMap.get(key(record.year, record.teamName));
  if (!sup) continue;
  const before = JSON.stringify({division: record.division, village: record.village, medal: record.medal, grandPrizeLevel: record.grandPrizeLevel, top10: record.top10});

  if (sup.division) record.division = sup.division;
  if (sup.village) record.village = sup.village;
  if (sup.medal) record.medal = sup.medal;

  const results = (sup.results || []).map(norm);
  if (results.some(r => /GRAND PRIZE(?: WINNER)?/i.test(r))) record.grandPrizeLevel = 'Grand Prize Winner';
  else if (results.some(r => /(?:1ST|FIRST) RUNNER-UP/i.test(r))) record.grandPrizeLevel = '1st Runner-up';
  else if (results.some(r => /(?:2ND|SECOND) RUNNER-UP/i.test(r))) record.grandPrizeLevel = '2nd Runner-up';
  else if (results.some(r => /TOP 10/i.test(r))) {
    record.top10 = true;
    if (!record.grandPrizeLevel) record.grandPrizeLevel = 'Top 10';
  }

  const after = JSON.stringify({division: record.division, village: record.village, medal: record.medal, grandPrizeLevel: record.grandPrizeLevel, top10: record.top10});
  if (before !== after) {
    updated++;
    changes.push({year: record.year, teamName: record.teamName, before: JSON.parse(before), after: JSON.parse(after)});
  }
}

const newText = awardsText.replace(match[1], JSON.stringify(records, null, 2));
fs.writeFileSync(awardsPath, newText);
console.log(JSON.stringify({updated, sampleChanges: changes.slice(0, 20)}, null, 2));
