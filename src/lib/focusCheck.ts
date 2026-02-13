import type { Topic } from '@/types';

export type FocusDomain = 'nutrition' | 'sleep' | 'movement';

export interface FocusOption {
  id: string;
  label: string;
  domainPoints: Partial<Record<FocusDomain, number>>;
  tagPoints: Record<string, number>;
}

export interface FocusQuestion {
  id: string;
  domain: FocusDomain;
  question: string;
  options: FocusOption[];
}

export interface FocusScoreResult {
  domainScores: Record<FocusDomain, number>;
  topDomains: FocusDomain[];
  tagScores: Record<string, number>;
  topTags: string[];
}

export interface FocusRecommendation {
  topicId: string;
  title: string;
  slug: string;
  domainId: string;
  description: string;
  tags: string[];
  readTimeMinutes: number;
  matchScore: number;
  evidenceScore: number;
}

export const FOCUS_CHECK_COMPLETED_KEY = 'hasCompletedFocusOnboarding';
export const FOCUS_CHECK_PROFILE_KEY = 'userFocusProfile';
export const FOCUS_CHECK_COOKIE_KEY = 'focus_check_completed';

const domainRouteMap: Record<FocusDomain, string> = {
  nutrition: 'voeding',
  sleep: 'slaap',
  movement: 'beweging',
};

const routeDomainMap: Record<string, FocusDomain> = {
  voeding: 'nutrition',
  slaap: 'sleep',
  beweging: 'movement',
};

function option(id: string, label: string, domain: FocusDomain, tags: string[]): FocusOption {
  return {
    id,
    label,
    domainPoints: { [domain]: 1 },
    tagPoints: Object.fromEntries(tags.map((tag) => [tag, 2])),
  };
}

export const focusQuestions: FocusQuestion[] = [
  {
    id: 'nutrition-goal',
    domain: 'nutrition',
    question: 'What is your biggest nutrition goal?',
    options: [
      option('A', 'Fat loss / cut', 'nutrition', ['weight-loss', 'energy-balance']),
      option('B', 'Muscle gain / protein', 'nutrition', ['protein', 'muscle-gain']),
      option('C', 'Energy for sports', 'nutrition', ['sport-fuel', 'hydration']),
      option('D', 'Healthy & consistent', 'nutrition', ['nutrition-consistency', 'meal-structure']),
    ],
  },
  {
    id: 'nutrition-obstacle',
    domain: 'nutrition',
    question: 'What do you struggle with most?',
    options: [
      option('A', 'Snacking / cravings', 'nutrition', ['cravings', 'blood-sugar']),
      option('B', 'Too little structure / meal prep', 'nutrition', ['meal-structure', 'meal-prep']),
      option('C', 'Too little protein', 'nutrition', ['protein']),
      option('D', 'Too few vegetables/variety', 'nutrition', ['fiber', 'micronutrients']),
    ],
  },
  {
    id: 'nutrition-breakfast',
    domain: 'nutrition',
    question: 'What does your breakfast usually look like?',
    options: [
      option('A', 'I skip it', 'nutrition', ['meal-timing', 'energy-balance']),
      option('B', 'Quick/high-carb', 'nutrition', ['blood-sugar', 'macros-balance']),
      option('C', 'High protein', 'nutrition', ['protein']),
      option('D', 'Varies', 'nutrition', ['nutrition-consistency']),
    ],
  },
  {
    id: 'nutrition-statement',
    domain: 'nutrition',
    question: 'Which statement fits best?',
    options: [
      option('A', 'I often eat too late', 'nutrition', ['meal-timing', 'circadian-meals']),
      option('B', 'I drink a lot of alcohol / sugary drinks', 'nutrition', ['alcohol', 'blood-sugar']),
      option('C', 'I eat too few calories on training days', 'nutrition', ['sport-fuel', 'hydration']),
      option('D', 'I want it simple and sustainable', 'nutrition', ['nutrition-consistency', 'meal-structure']),
    ],
  },
  {
    id: 'sleep-duration',
    domain: 'sleep',
    question: 'Average sleep duration?',
    options: [
      option('A', '<6u', 'sleep', ['sleep-duration', 'sleep-debt']),
      option('B', '6–7u', 'sleep', ['sleep-duration']),
      option('C', '7–8u', 'sleep', ['sleep-maintenance']),
      option('D', '>8u', 'sleep', ['sleep-quality']),
    ],
  },
  {
    id: 'sleep-problem',
    domain: 'sleep',
    question: 'Biggest sleep issue?',
    options: [
      option('A', 'Falling asleep', 'sleep', ['sleep-onset', 'caffeine-timing']),
      option('B', 'Staying asleep', 'sleep', ['sleep-fragmentation']),
      option('C', 'Going to bed too late / rhythm', 'sleep', ['sleep-consistency', 'circadian-rhythm']),
      option('D', 'Awake but not rested', 'sleep', ['sleep-quality']),
    ],
  },
  {
    id: 'sleep-routine',
    domain: 'sleep',
    question: 'Evening routine?',
    options: [
      option('A', 'Lots of screen time', 'sleep', ['light-exposure', 'sleep-onset']),
      option('B', 'Irregular', 'sleep', ['sleep-consistency']),
      option('C', 'Fairly consistent', 'sleep', ['sleep-maintenance']),
      option('D', 'Very consistent', 'sleep', ['sleep-quality']),
    ],
  },
  {
    id: 'movement-goal',
    domain: 'movement',
    question: 'Main movement goal?',
    options: [
      option('A', 'Conditioning', 'movement', ['cardio', 'zone2']),
      option('B', 'Strength', 'movement', ['strength', 'progressive-overload']),
      option('C', 'Weight / daily movement', 'movement', ['neat', 'habit-building']),
      option('D', 'Sports performance', 'movement', ['performance', 'periodization']),
    ],
  },
  {
    id: 'movement-frequency',
    domain: 'movement',
    question: 'How often do you train now?',
    options: [
      option('A', '0–1x/week', 'movement', ['habit-building', 'neat']),
      option('B', '2x/week', 'movement', ['training-frequency']),
      option('C', '3–4x/week', 'movement', ['progressive-overload']),
      option('D', '5x+/week', 'movement', ['recovery', 'overtraining-risk']),
    ],
  },
  {
    id: 'movement-improve',
    domain: 'movement',
    question: 'Where do you want to improve most?',
    options: [
      option('A', 'Consistency / routine', 'movement', ['habit-building']),
      option('B', 'Intensity / progression', 'movement', ['progressive-overload']),
      option('C', 'Recovery / prevent injuries', 'movement', ['recovery', 'injury-prevention']),
      option('D', 'Mobility / core', 'movement', ['mobility', 'core']),
    ],
  },
];

const topicTagDictionary: Record<string, string[]> = {
  macronutrienten: ['protein', 'sport-fuel', 'macros-balance', 'energy-balance'],
  micronutrienten: ['micronutrients', 'fiber'],
  maaltijdtiming: ['meal-timing', 'circadian-meals', 'meal-structure'],
  hydratatie: ['hydration', 'sport-fuel'],
  darmgezondheid: ['fiber', 'nutrition-consistency'],
  'inflammatie-voeding': ['nutrition-consistency', 'micronutrients'],
  'ultra-bewerkt-voedsel': ['cravings', 'blood-sugar'],
  alcohol: ['alcohol', 'sleep-quality'],
  'intermittent-fasting': ['meal-timing', 'energy-balance'],
  bloedsuikerregulatie: ['blood-sugar', 'meal-structure'],
  slaaphygiene: ['sleep-consistency', 'sleep-quality'],
  lichtblootstelling: ['light-exposure', 'circadian-rhythm'],
  'circadiaan-ritme': ['circadian-rhythm', 'sleep-consistency'],
  slaapfases: ['sleep-quality', 'sleep-maintenance'],
  slaapkamertemperatuur: ['sleep-quality'],
  'cafeine-timing': ['caffeine-timing', 'sleep-onset'],
  melatonine: ['sleep-onset', 'circadian-rhythm'],
  'optimale-slaapduur': ['sleep-duration', 'sleep-debt'],
  dutjes: ['sleep-debt', 'sleep-maintenance'],
  slaapstoornissen: ['sleep-fragmentation', 'sleep-quality'],
  krachttraining: ['strength', 'progressive-overload'],
  cardio: ['cardio', 'zone2'],
  neat: ['neat', 'habit-building'],
  mobiliteit: ['mobility', 'core'],
  'herstel-rust': ['recovery', 'injury-prevention'],
  overtraining: ['overtraining-risk', 'recovery'],
  'opwarmen-cooldown': ['injury-prevention', 'mobility'],
  trainingsfrequentie: ['training-frequency', 'habit-building'],
  'intensiteit-progressie': ['progressive-overload', 'performance'],
  zitgedrag: ['neat', 'habit-building'],
};

export function evaluateFocusAnswers(answers: Record<string, string>): FocusScoreResult {
  const domainScores: Record<FocusDomain, number> = {
    nutrition: 0,
    sleep: 0,
    movement: 0,
  };
  const tagScores: Record<string, number> = {};

  for (const question of focusQuestions) {
    const answer = answers[question.id];
    const selected = question.options.find((option) => option.id === answer);
    if (!selected) continue;

    for (const [domain, points] of Object.entries(selected.domainPoints) as [FocusDomain, number][]) {
      domainScores[domain] += points;
    }

    for (const [tag, points] of Object.entries(selected.tagPoints)) {
      tagScores[tag] = (tagScores[tag] ?? 0) + points;
    }
  }

  const topDomains = Object.entries(domainScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([domain]) => domain as FocusDomain);

  const topTags = Object.entries(tagScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([tag]) => tag);

  return { domainScores, topDomains, tagScores, topTags };
}

function topicReadTime(topic: Topic): number {
  const introWords = topic.introduction?.split(/\s+/).length ?? 140;
  const base = Math.max(1, Math.round(introWords / 180));
  const insightsTime = Math.max(2, topic.insights.length * 2);
  return Math.max(3, base + insightsTime);
}

export function rankFocusRecommendations(topics: Topic[], score: FocusScoreResult, limit = 8): FocusRecommendation[] {
  const allowedDomains = new Set(score.topDomains.map((domain) => domainRouteMap[domain]));
  const perDomainLimit = 3;
  const domainCounts: Record<string, number> = {};

  const ranked = topics
    .filter((topic) => allowedDomains.has(topic.domainId))
    .map((topic) => {
      const mappedTags = topicTagDictionary[topic.slug] ?? [];
      const overlapScore = mappedTags.reduce((sum, tag) => sum + (score.tagScores[tag] ?? 0), 0);
      const focusDomain = routeDomainMap[topic.domainId] ?? 'nutrition';
      const domainBoost = score.domainScores[focusDomain] ?? 0;
      const qualityScore = topic.evidenceScore;
      const matchScore = overlapScore * 3 + domainBoost * 2 + qualityScore;

      return {
        topicId: topic.id,
        title: topic.title,
        slug: topic.slug,
        domainId: topic.domainId,
        description: topic.description,
        tags: mappedTags,
        readTimeMinutes: topicReadTime(topic),
        matchScore,
        evidenceScore: topic.evidenceScore,
      };
    })
    .sort((a, b) => b.matchScore - a.matchScore);

  const selected: FocusRecommendation[] = [];

  for (const item of ranked) {
    if (selected.length >= limit) break;
    if ((domainCounts[item.domainId] ?? 0) >= perDomainLimit) continue;
    selected.push(item);
    domainCounts[item.domainId] = (domainCounts[item.domainId] ?? 0) + 1;
  }

  return selected;
}

export function shouldRunFocusOnboarding(storageValue: string | null, cookieValue: string | null): boolean {
  return storageValue !== 'true' && cookieValue !== 'true';
}
