import { MOCK_AWARDS } from './src/data/awards';

const ids = MOCK_AWARDS.map(a => a.id);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

if (duplicates.length > 0) {
  console.log('Duplicate IDs found:');
  console.log(duplicates);
} else {
  console.log('No duplicate IDs found in MOCK_AWARDS.');
}
