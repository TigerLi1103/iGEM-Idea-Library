export type Role = 'visitor' | 'user' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  createdAt?: string;
}

export interface Village {
  id: string;
  name: string;
  description: string;
  icon: string;
  ideaCount: number;
  color: string;
}

export interface AIMatchedTeam {
  teamName: string;
  year: number;
  projectTitle: string;
  link: string;
  matchReason: string;
  similarity?: number; // 0..1, higher is more similar
  awards?: string[]; // optional: medals / prizes / recognitions
  awardTier?: number; // 0..3 (3 = top-tier like Grand Prize/Winner)
}

export interface PotentialAward {
  name: string;
  reason: string;
}

export interface RelatedProject {
  id: string;
  title: string;
  similarity: number;
}

export type AwardType = 'Grand Prize' | 'Finalist' | 'Village Award' | 'Special Prize';
export type Division = 'High School' | 'Undergraduate' | 'Overgraduate';

export interface AwardEntry {
  id: string;
  year: number;
  teamName: string;
  projectTitle: string;
  awardType: AwardType;
  awardName: string;
  village: string;
  summary: string;
  wikiLink: string;
  tags: string[];
  country: string;
  division: Division;
  whyThisProjectWon: {
    problem: string;
    solution: string;
    innovation: string;
    judgeAppeal: string;
  };
}

export type IdeaStatus = 'draft' | 'pending' | 'published' | 'featured';
export type SourceType = 'manual' | 'ai_matched' | 'verified';

export interface Idea {
  id: string;
  title: string;
  summary: string;
  description: string;
  villageId: string;
  tags: string[];
  problemStatement: string;
  proposedSolution: string;
  innovationPoints: string[];
  risks: string[];
  authorId: string;
  authorName: string;
  createdAt: string;
  updatedAt: string;
  status: IdeaStatus;
  sourceType: SourceType;
  aiMatchedTeams: AIMatchedTeam[];
  potentialAwards: PotentialAward[];
  relatedProjects: RelatedProject[];
  confidenceScore: number;
  verifiedStatus: boolean;
  chassis?: string;
  applicationArea?: string;
}
