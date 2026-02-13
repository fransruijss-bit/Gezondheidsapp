export type AnalyticsEvent = 'onboarding_started' | 'onboarding_completed' | 'result_clicked';

export function trackEvent(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(
    new CustomEvent('analytics:event', {
      detail: {
        event,
        payload,
        timestamp: Date.now(),
      },
    })
  );
}
