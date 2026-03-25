export interface PartRecord {
  id: string;
  name: string;
  type: string;
  description: string;
  sequence: string;
  category: string;
  length: number;
}

const normalize = (sequence: string) => sequence.replace(/[^ATCG]/gi, '').toUpperCase();

const rawParts = [
  {
    id: 'BBa_J23100',
    name: 'Constitutive promoter J23100',
    type: 'Promoter',
    category: 'Promoter',
    description: 'A commonly used constitutive promoter from the Anderson collection.',
    sequence: 'TTGACAGCTAGCTCAGTCCTAGGTATAATGCTAGC',
  },
  {
    id: 'BBa_B0034',
    name: 'Strong RBS B0034',
    type: 'RBS',
    category: 'Translation',
    description: 'Classic strong ribosome binding site frequently used in iGEM constructs.',
    sequence: 'AAAGAGGAGAAA',
  },
  {
    id: 'BBa_E0040',
    name: 'GFP coding sequence',
    type: 'CDS',
    category: 'Reporter',
    description: 'Green fluorescent protein coding sequence used as a reporter.',
    sequence: 'ATGCGTAAAGGAGAAGAACTTTTCACTGGAGTTGTCCCAATTCTTGTTGAATTAGATGGTGATGTTAATGGGCACAAATTTTCTGTCAGTGGAGAGGGTGAAGGTGATGCAACATACGGAAAACTTACCCTTAAATTTATTTGCACTACTGGAAAACTACCTGTTCCATGGCCAACACTTGTCACTACTCTGACCTATGGTGTTCAATGCTTTTCCCGTTATCCGGATCACATGAAACGGCATGACTTTTTCAAGAGTGCCATGCCCGAAGGTTATGTACAGGAAAGAACCATCTTCCAAAGGATGTTTCAAAAGATGACGGGAACTACAAGACACGTGCTGAAGTCAAGTTTGAAGGTGATACCCTTGTTAATAGAATCGAGTTAAAAGGTATTGATTTTAAAGAAGATGGAAACATTCTTGGACACAAACTCGAGTACAACTTTAACTCACACAATGTATACATCACGGCAGACAAACAAAAGAATGGAATCAAAGCTAATTCTTAAAATTCAAAATTTTCGGTTACAACGTGGCCAAATTCCTGTCAGTTTAGAAGGTGATACCCTTGTTAATAGAATCGAGTTAAAAGGTATTGATTTTAAAGAAGATGGAAACATTCTTGGACACAAACTCGAGTACAACTAA',
  },
  {
    id: 'BBa_C0012',
    name: 'LacI repressor CDS',
    type: 'CDS',
    category: 'Regulation',
    description: 'LacI coding sequence for classic inducible regulation systems.',
    sequence: 'ATGAAACCAGTAACGTTATACGATGTCGCAGAGTATGCCGGTGAAAGCCGGCGAACGTGGCGAGAAAGGAAGGGAAGAAAGCGAAAGGAGCGGGCGCTAGGGCGCTGGCAAGTGTAGCGGTCACGCTGCGCGTAACCACCACACCCGCCGCGCTTAATGCGCCGCTACAGGGCGCGTCCCATTCGCCATTCAGGCTGCGCAACTGTTGGGAAGGGCGATCGGTGCGGGCCTCTTCGCTATTACGCCAGCTGGCGAAAGGGGGATGTGCTGCAAGGCGATTAAGTTGGGTAACGCCAGGGTTTTCCCAGTCACGACGTTGTAAAACGACGGCCAGT',
  },
  {
    id: 'BBa_K608002',
    name: 'Double terminator B0015',
    type: 'Terminator',
    category: 'Termination',
    description: 'Widely used strong double terminator sequence.',
    sequence: 'CCAGGCATCAAATAAAACGAAAGGCTCAGTCGAAAGACTGGGCCTTTCGTTTTATCTGTTGTTTGTCGGTGAACGCTCTC',
  },
  {
    id: 'BBa_R0010',
    name: 'Lac promoter',
    type: 'Promoter',
    category: 'Regulation',
    description: 'Inducible lac promoter used in many foundational iGEM circuits.',
    sequence: 'CAATACGCAAACCGCCTCTCCCCGCGCGTTGGCCGATTCATTAATGCAGCTGGCACGACAGGTTTCCCGACTGGAAAGCGGGCAGTGAGCGCAACGCAATTAATGTGAGTTAGCTCACTCATTAGGCACCCCAGGCTTTACACTTTATGCTTCCGGCTCGTATAATGTGTGG',
  },
].map((part) => ({ ...part, sequence: normalize(part.sequence) }));

export const PARTS_LIBRARY: PartRecord[] = rawParts.map((part) => ({
  ...part,
  length: part.sequence.length,
}));
