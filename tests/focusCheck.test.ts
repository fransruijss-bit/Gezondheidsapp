import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateFocusAnswers, focusQuestions, rankFocusRecommendations, shouldRunFocusOnboarding } from '../src/lib/focusCheck.ts';

type MockTopic = {
  id: string;
  title: string;
  slug: string;
  domainId: 'voeding' | 'slaap' | 'beweging';
  description: string;
  tags: string[];
  evidenceScore: 1 | 2 | 3;
  insights: Array<Record<string, never>>;
  introduction: string;
};

const mockTopics: MockTopic[] = [
  { id: '1', title: 'Macronutriënten', slug: 'macronutrienten', domainId: 'voeding', description: 'desc', tags: [], evidenceScore: 3, insights: [{}, {}], introduction: 'intro text intro text' },
  { id: '2', title: 'Slaaphygiëne', slug: 'slaaphygiene', domainId: 'slaap', description: 'desc', tags: [], evidenceScore: 2, insights: [{}], introduction: 'intro text intro text' },
  { id: '3', title: 'Krachttraining', slug: 'krachttraining', domainId: 'beweging', description: 'desc', tags: [], evidenceScore: 3, insights: [{}, {}, {}], introduction: 'intro text intro text' },
];

test('first visit gating requires both storage and cookie to be missing', () => {
  assert.equal(shouldRunFocusOnboarding(null, null), true);
  assert.equal(shouldRunFocusOnboarding('true', null), false);
  assert.equal(shouldRunFocusOnboarding(null, 'true'), false);
});

test('scoring/ranking returns ordered personalized recommendations', () => {
  const answers = Object.fromEntries(focusQuestions.map((question) => [question.id, question.options[0].id]));
  const score = evaluateFocusAnswers(answers);
  assert.equal(score.topDomains.length, 3);

  const recommendations = rankFocusRecommendations(mockTopics, score, 3);
  assert.equal(recommendations.length, 3);
  assert.ok(recommendations[0].matchScore >= recommendations[1].matchScore);
});
