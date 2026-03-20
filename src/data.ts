import { Village, Idea, User } from './types';

export const VILLAGES: Village[] = [
  {
    id: 'v1',
    name: 'Diagnostics',
    description: 'Developing tools to detect diseases, pathogens, or environmental contaminants.',
    icon: 'Activity',
    ideaCount: 12,
    color: 'emerald',
  },
  {
    id: 'v2',
    name: 'Therapeutics',
    description: 'Creating new treatments, drug delivery systems, or regenerative medicine solutions.',
    icon: 'Stethoscope',
    ideaCount: 8,
    color: 'blue',
  },
  {
    id: 'v3',
    name: 'Environment',
    description: 'Addressing pollution, climate change, and biodiversity loss through synthetic biology.',
    icon: 'Leaf',
    ideaCount: 15,
    color: 'green',
  },
  {
    id: 'v4',
    name: 'Food & Nutrition',
    description: 'Improving food security, nutritional value, and sustainable agriculture.',
    icon: 'Utensils',
    ideaCount: 6,
    color: 'orange',
  },
  {
    id: 'v5',
    name: 'Energy',
    description: 'Developing sustainable biofuels and biological energy harvesting systems.',
    icon: 'Zap',
    ideaCount: 4,
    color: 'yellow',
  },
  {
    id: 'v6',
    name: 'Manufacturing',
    description: 'Bioproduction of chemicals, materials, and specialized compounds.',
    icon: 'Factory',
    ideaCount: 9,
    color: 'purple',
  },
];

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Admin User', email: 'lichengxi1103@gmail.com', role: 'admin' },
  { id: 'u2', name: 'Jane Doe', email: 'jane@student.edu', role: 'user' },
  { id: 'u3', name: 'John Smith', email: 'john@research.org', role: 'user' },
];

export const MOCK_IDEAS: Idea[] = [
  {
    id: 'i1',
    title: 'Rapid Detection of Microplastics in Freshwater',
    summary: 'A cell-free biosensor system for real-time monitoring of microplastic concentrations.',
    description: 'This project aims to develop a portable, low-cost biosensor using engineered proteins that bind specifically to common microplastics (PET, PE, PP). The binding event triggers a colorimetric change visible to the naked eye.',
    villageId: 'v3',
    tags: ['Microplastics', 'Biosensor', 'Cell-free', 'Environment'],
    problemStatement: 'Current microplastic detection methods require expensive laboratory equipment and days of processing time, making field monitoring impossible.',
    proposedSolution: 'Engineered PETase-derived binding domains fused to a split-GFP or chromogenic enzyme system.',
    innovationPoints: ['First cell-free application for microplastics', 'Modular binding domains for different plastic types'],
    risks: ['Sensitivity in complex environmental samples', 'Stability of cell-free components in field conditions'],
    authorId: 'u2',
    authorName: 'Jane Doe',
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2024-03-12T14:30:00Z',
    status: 'published',
    sourceType: 'manual',
    aiMatchedTeams: [
      {
        teamName: 'TUDelft',
        year: 2021,
        projectTitle: 'A-PET-it',
        link: 'https://2021.igem.org/Team:TUDelft',
        matchReason: 'Used PETase for plastic degradation; similar protein engineering approach.',
      },
    ],
    potentialAwards: [
      { name: 'Best Environment Project', reason: 'Directly addresses microplastic pollution in freshwater.' },
      { name: 'Best New Basic Part', reason: 'Engineering new PETase-derived binding domains.' },
      { name: 'Best Hardware', reason: 'Portable biosensor device for field monitoring.' }
    ],
    relatedProjects: [
      { id: 'i2', title: 'Oceanic Plastic Degrader', similarity: 0.75 },
    ],
    confidenceScore: 0.92,
    verifiedStatus: true,
  },
  {
    id: 'i2',
    title: 'Engineered Probiotics for Lactose Intolerance',
    summary: 'A stable, long-term gut colonization strategy for continuous lactase production.',
    description: 'Developing a strain of L. reuteri that can stably colonize the human gut and produce beta-galactosidase in response to lactose presence.',
    villageId: 'v2',
    tags: ['Probiotics', 'Gut Health', 'Therapeutics'],
    problemStatement: 'Lactose intolerance affects millions, and current enzyme supplements are short-lived and inconvenient.',
    proposedSolution: 'Genetic circuit with a lactose-inducible promoter controlling lactase expression in a high-colonization strain.',
    innovationPoints: ['Inducible expression to prevent metabolic burden', 'Enhanced colonization through surface protein engineering'],
    risks: ['Horizontal gene transfer to native microbiota', 'Long-term stability of the genetic circuit'],
    authorId: 'u3',
    authorName: 'John Smith',
    createdAt: '2024-03-15T09:00:00Z',
    updatedAt: '2024-03-15T09:00:00Z',
    status: 'pending',
    sourceType: 'ai_matched',
    aiMatchedTeams: [
      {
        teamName: 'ETH_Zurich',
        year: 2018,
        projectTitle: 'CORYNEgard',
        link: 'https://2018.igem.org/Team:ETH_Zurich',
        matchReason: 'Engineered skin probiotics; similar colonization logic.',
      },
    ],
    potentialAwards: [
      { name: 'Best Therapeutics Project', reason: 'Novel approach to lactose intolerance.' },
      { name: 'Best Human Practices', reason: 'High potential for public health impact.' }
    ],
    relatedProjects: [],
    confidenceScore: 0.85,
    verifiedStatus: false,
  },
];
