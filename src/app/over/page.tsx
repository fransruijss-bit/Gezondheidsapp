import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About & Methodology',
  description: 'Learn more about The Healthy Nerd, our methodology, and our evidence classification system.',
};

export default function OverPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'About & Methodology' }]} />

      <h1 className="text-3xl font-bold text-gray-900 mb-6">About The Healthy Nerd</h1>

      <div className="prose-content text-gray-700 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">What is this?</h2>
          <p>
            The Healthy Nerd is a science-backed reference that makes complex health knowledge practical and easy to use.
            We focus on three domains: sleep, nutrition, and movement.
          </p>
          <p>
            Each topic is built in three layers: one direct action you can apply today, a clear mechanism explanation,
            and the scientific sources behind it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our three-layer model</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-1">Layer 1 — The Action</h3>
              <p className="text-sm text-blue-800">
                One sentence, up to 30 words. Actionable advice that starts with a verb. No jargon, but specific.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Layer 2 — The Explanation</h3>
              <p className="text-sm text-green-800">
                In 2–3 minutes, we explain what happens in your body, why it matters, and how to apply it.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 mb-1">Layer 3 — The Science</h3>
              <p className="text-sm text-purple-800">
                The underlying papers with title, authors, study type, sample size, key conclusion, and DOI link.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Evidence classification</h2>
          <p className="mb-4">Each insight gets an evidence score based on the strength of supporting research:</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 shrink-0">
                Strong evidence
              </span>
              <p className="text-sm text-gray-700">Multiple RCTs, meta-analyses, and broad scientific consensus.</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 shrink-0">
                Moderate evidence
              </span>
              <p className="text-sm text-gray-700">Some RCTs and consistent observational studies; promising but not final.</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 shrink-0">
                Emerging evidence
              </span>
              <p className="text-sm text-gray-700">Limited studies with early signals. Interpret cautiously.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Methodology</h2>
          <p>
            Content is compiled from peer-reviewed scientific publications, with a focus on 2016–2026 research.
            We prioritize meta-analyses and randomized controlled trials over observational studies.
          </p>
          <p>
            Conflicting findings are presented transparently. We do not provide medical advice—always consult a physician
            for personal health decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Disclaimer</h2>
          <p className="text-sm text-gray-500">
            This app is educational and does not replace professional medical advice. Always consult a qualified healthcare
            professional for diagnosis and treatment.
          </p>
        </section>
      </div>
    </div>
  );
}
