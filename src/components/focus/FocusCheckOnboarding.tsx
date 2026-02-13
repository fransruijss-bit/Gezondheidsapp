'use client';

import { useEffect, useMemo, useState } from 'react';
import FocusProgress from './FocusProgress';
import FocusQuestionCard from './FocusQuestionCard';
import FocusResults from './FocusResults';
import {
  FOCUS_CHECK_COMPLETED_KEY,
  FOCUS_CHECK_COOKIE_KEY,
  FOCUS_CHECK_PROFILE_KEY,
  focusQuestions,
  shouldRunFocusOnboarding,
  FocusRecommendation,
  FocusScoreResult,
} from '@/lib/focusCheck';
import { trackEvent } from '@/lib/analytics';

interface RecommendationsResponse {
  score: FocusScoreResult;
  recommendations: FocusRecommendation[];
  generatedAt: string;
}

function markCompleted(score: FocusScoreResult) {
  localStorage.setItem(FOCUS_CHECK_COMPLETED_KEY, 'true');
  localStorage.setItem(
    FOCUS_CHECK_PROFILE_KEY,
    JSON.stringify({
      topDomains: score.topDomains,
      topTags: score.topTags,
      timestamp: new Date().toISOString(),
    })
  );
  document.cookie = `${FOCUS_CHECK_COOKIE_KEY}=true; path=/; max-age=31536000; samesite=lax`;
}

export default function FocusCheckOnboarding() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    const cookies = document.cookie
      .split(';')
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith(`${FOCUS_CHECK_COOKIE_KEY}=`));

    const cookieValue = cookies?.split('=')[1] ?? null;
    const storageValue = localStorage.getItem(FOCUS_CHECK_COMPLETED_KEY);

    return shouldRunFocusOnboarding(storageValue, cookieValue);
  });
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<RecommendationsResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (visible && !result && step === 0) {
      trackEvent('onboarding_started');
    }
  }, [visible, result, step]);

  useEffect(() => {
    const handleRedo = () => {
      localStorage.removeItem(FOCUS_CHECK_COMPLETED_KEY);
      localStorage.removeItem(FOCUS_CHECK_PROFILE_KEY);
      document.cookie = `${FOCUS_CHECK_COOKIE_KEY}=false; path=/; max-age=0; samesite=lax`;
      setAnswers({});
      setResult(null);
      setStep(0);
      setVisible(true);
      trackEvent('onboarding_started', { source: 'redo' });
    };

    window.addEventListener('focus-check:redo', handleRedo as EventListener);
    return () => window.removeEventListener('focus-check:redo', handleRedo as EventListener);
  }, []);

  const currentQuestion = focusQuestions[step];
  const isLastQuestion = step === focusQuestions.length - 1;
  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : null;

  const canContinue = useMemo(() => {
    if (!currentQuestion) return false;
    return Boolean(answers[currentQuestion.id]);
  }, [answers, currentQuestion]);

  const handleComplete = async () => {
    setLoading(true);
    const response = await fetch('/api/focus-check/recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers }),
    });

    if (!response.ok) {
      setLoading(false);
      return;
    }

    const data: RecommendationsResponse = await response.json();
    setResult(data);
    markCompleted(data.score);
    trackEvent('onboarding_completed', {
      topDomains: data.score.topDomains,
      topTags: data.score.topTags,
    });
    setLoading(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-14">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Focus Check</h1>
          <p className="text-gray-600 mt-2">Answer 10 short questions and instantly get top recommendations from our database.</p>
        </div>

        {!result && currentQuestion && (
          <>
            <FocusProgress current={step + 1} total={focusQuestions.length} />
            <FocusQuestionCard
              question={currentQuestion}
              value={selectedAnswer ?? undefined}
              onSelect={(optionId) =>
                setAnswers((prev) => ({
                  ...prev,
                  [currentQuestion.id]: optionId,
                }))
              }
            />

            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 disabled:opacity-40"
                disabled={step === 0}
              >
                Previous
              </button>

              {isLastQuestion ? (
                <button
                  type="button"
                  onClick={handleComplete}
                  disabled={!canContinue || loading}
                  className="px-5 py-2.5 rounded-lg bg-slaap text-white font-medium disabled:opacity-50"
                >
                  {loading ? 'Loading...' : 'See my top recommendations'}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setStep((prev) => prev + 1)}
                  disabled={!canContinue}
                  className="px-5 py-2.5 rounded-lg bg-slaap text-white font-medium disabled:opacity-50"
                >
                  Next
                </button>
              )}
            </div>
          </>
        )}

        {result && (
          <div>
            <FocusResults
              topDomains={result.score.topDomains}
              topTags={result.score.topTags}
              recommendations={result.recommendations}
            />
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => setVisible(false)}
                className="px-5 py-2.5 rounded-lg bg-slaap text-white font-medium"
              >
                Continue to home
              </button>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('focus-check:redo'))}
                className="px-5 py-2.5 rounded-lg border border-gray-200 text-gray-700"
              >
                Retake Focus Check
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
