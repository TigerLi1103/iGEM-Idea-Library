export type Role = 'visitor' | 'user' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
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
