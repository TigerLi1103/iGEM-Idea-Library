import type { Idea } from '../types';

export type AIScoreMetricKey =
  | 'village_confidence'
  | 'historical_match_coverage'
  | 'library_similarity'
  | 'award_fit';

export type AIScoreMetric = {
  key: AIScoreMetricKey;
  label: string;
  value01: number | null;
  description?: string;
};

function clamp01(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(1, value));
}

function safeRatio(numerator: number, denominator: number): number | null {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator <= 0) return null;
  return numerator / denominator;
}

export function formatPercent(value01: number | null, digits = 0): string {
  if (value01 === null) return 'N/A';
  const v = clamp01(value01) * 100;
  return `${v.toFixed(digits)}%`;
}

function bestRelatedSimilarity01(idea: Idea): number | null {
  const relatedProjects = Array.isArray(idea.relatedProjects) ? idea.relatedProjects : [];
  if (relatedProjects.length === 0) return null;

  let best = 0;
  for (const p of relatedProjects) {
    const sim = (p as { similarity?: unknown }).similarity;
    if (typeof sim === 'number' && Number.isFinite(sim)) {
      best = Math.max(best, clamp01(sim));
    }
  }
  return clamp01(best);
}

export function computeIdeaAIScore(idea: Idea): {
  overall01: number;
  metrics: AIScoreMetric[];
  weightsUsed: Record<AIScoreMetricKey, number>;
} {
  const villageConfidence = clamp01(idea.confidenceScore);

  const matchedTeamCount = Array.isArray(idea.aiMatchedTeams) ? idea.aiMatchedTeams.length : 0;
  const validLinkCount = (Array.isArray(idea.aiMatchedTeams) ? idea.aiMatchedTeams : []).filter((t) => {
    const link = (t as { link?: unknown }).link;
    return typeof link === 'string' && link.trim() !== '' && link.trim() !== '#';
  }).length;
  const linkQuality = safeRatio(validLinkCount, matchedTeamCount);
  // Coverage grows with more matches but saturates (avoids assuming a fixed target count like 3).
  const baseCoverage = 1 - Math.exp(-matchedTeamCount / 6);
  const historicalMatchCoverage = clamp01(baseCoverage * 0.85 + (linkQuality ?? 0) * 0.15);

  const bestSimilarity = bestRelatedSimilarity01(idea);

  const awardsCount = Array.isArray(idea.potentialAwards) ? idea.potentialAwards.length : 0;
  const awardFit = clamp01(Math.min(1, awardsCount / 6));

  const metrics: AIScoreMetric[] = [
    {
      key: 'village_confidence',
      label: 'Village Confidence',
      value01: villageConfidence,
      description: 'From the AI village recommendation.',
    },
    {
      key: 'library_similarity',
      label: 'Library Similarity',
      value01: bestSimilarity,
      description: 'Best similarity to existing library ideas.',
    },
    {
      key: 'historical_match_coverage',
      label: 'Historical Match Coverage',
      value01: historicalMatchCoverage,
      description: 'How complete the historical iGEM team matches are.',
    },
    {
      key: 'award_fit',
      label: 'Award Fit',
      value01: awardFit,
      description: 'How many relevant special prizes were identified.',
    },
  ];

  const baseWeights: Record<AIScoreMetricKey, number> = {
    village_confidence: 0.45,
    library_similarity: 0.25,
    historical_match_coverage: 0.2,
    award_fit: 0.1,
  };

  const presentKeys = metrics.filter((m) => m.value01 !== null).map((m) => m.key);
  const presentWeightSum = presentKeys.reduce((sum, k) => sum + baseWeights[k], 0);
  const weightsUsed: Record<AIScoreMetricKey, number> = {
    village_confidence: 0,
    library_similarity: 0,
    historical_match_coverage: 0,
    award_fit: 0,
  };

  for (const key of presentKeys) {
    weightsUsed[key] = baseWeights[key] / (presentWeightSum || 1);
  }

  const overall01 = clamp01(
    metrics.reduce((sum, m) => {
      if (m.value01 === null) return sum;
      return sum + clamp01(m.value01) * (weightsUsed[m.key] ?? 0);
    }, 0),
  );

  return { overall01, metrics, weightsUsed };
}
