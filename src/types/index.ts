export interface Domain {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  slug: string;
  sortOrder: number;
}

export interface Topic {
  id: string;
  domainId: string;
  title: string;
  slug: string;
  description: string;
  introduction?: string;
  sortOrder?: number;
  evidenceScore: 1 | 2 | 3;
  tags: string[];
  crosslinks: string[];
  insights: Insight[];
}

export interface Insight {
  id?: string;
  topicId?: string;
  sortOrder?: number;
  action: string;
  explanation: string;
  evidenceScore: 1 | 2 | 3;
  studyTypeSummary: string;
  isPremium: boolean;
  papers: Paper[];
}

export interface Paper {
  id?: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  studyType: string;
  sampleSize?: number | null;
  conclusion?: string;
  doi: string;
}

export interface SearchResult {
  type: 'topic' | 'insight';
  domainId: string;
  domainTitle: string;
  domainIcon: string;
  topicId: string;
  topicTitle: string;
  topicSlug: string;
  insightAction?: string;
  insightId?: string;
  matchText: string;
}

export type EvidenceLabel = 'Strong evidence' | 'Moderate evidence' | 'Emerging evidence';

export const evidenceLabels: Record<1 | 2 | 3, EvidenceLabel> = {
  3: 'Strong evidence',
  2: 'Moderate evidence',
  1: 'Emerging evidence',
};

export const evidenceColors: Record<1 | 2 | 3, string> = {
  3: 'bg-green-100 text-green-800',
  2: 'bg-yellow-100 text-yellow-800',
  1: 'bg-orange-100 text-orange-800',
};
