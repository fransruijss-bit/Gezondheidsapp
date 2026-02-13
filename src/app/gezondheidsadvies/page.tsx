import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best health guidance',
  description:
    'Comprehensive overview of evidence-based general health guidance, with scientific support for each pillar.',
};

type ProtocolSection = { title: string; summary: string; actions: string[] };
type Study = { domain: string; finding: string; citation: string };

const sections: ProtocolSection[] = [
  {
    title: '1) Sleep as the primary recovery lever',
    summary: 'Prioritize consistent sleep timing, morning light, reduced late-night artificial light, and a cool dark room.',
    actions: [
      'Keep a fixed sleep window with stable bed and wake times, including weekends.',
      'Get natural daylight within 30–60 minutes after waking.',
      'Limit bright/blue light in the evening and keep caffeine earlier in the day.',
      'Optimize your bedroom: dark, quiet, cool, and low stimulation before bed.',
    ],
  },
  {
    title: '2) Nutrition: high nutrient density, low ultra-processing',
    summary: 'Use mostly whole foods, balanced energy intake, smart timing, and metabolic health principles.',
    actions: [
      'Build a repeatable routine around legumes, vegetables, nuts, seeds, and berries.',
      'Limit ultra-processed foods and liquid calories as much as possible.',
      'Ensure enough daily protein and fiber for muscle retention and glucose control.',
      'Plan your last large meal well before sleep.',
    ],
  },
  {
    title: '3) Movement: daily, periodized, and measurable',
    summary: 'Balance strength, cardio, mobility, and recovery for both performance and long-term health.',
    actions: [
      'Combine 2–4 strength sessions per week with Zone 2 cardio and short intervals.',
      'Increase daily movement (steps, post-meal walks, stairs).',
      'Track recovery markers such as resting heart rate, HRV, and sleep quality.',
      'Progress training load gradually and avoid chronic fatigue buildup.',
    ],
  },
];

const studies: Study[] = [
  { domain: 'Sleep', finding: 'Consistent sleep duration and quality are linked to lower cardiometabolic and cognitive risk.', citation: 'Cappuccio et al. Sleep duration and all-cause mortality. Sleep, 2010. DOI: 10.1093/sleep/33.5.585' },
  { domain: 'Circadian', finding: 'Light timing strongly regulates circadian phase and sleep-wake rhythm.', citation: 'Khalsa et al. J Physiol, 2003. DOI: 10.1113/jphysiol.2003.040477' },
  { domain: 'Nutrition', finding: 'Mediterranean/plant-forward patterns improve cardiometabolic outcomes.', citation: 'Estruch et al. NEJM, 2018. DOI: 10.1056/NEJMoa1800389' },
  { domain: 'Movement', finding: 'Strength training and aerobic activity are associated with lower mortality risk.', citation: 'Momma et al. Br J Sports Med, 2022. DOI: 10.1136/bjsports-2021-105061' },
];

export default function GezondheidsadviesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <header className="space-y-4">
        <p className="text-sm font-medium text-gray-500">✅ Best general health guidance</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Extended summary of evidence-based health guidance
        </h1>
        <p className="text-gray-600 leading-relaxed">
          This page translates the core elements of strong health fundamentals into practical actions.
          Recommendations should always be adapted to personal context and, when needed, clinical guidance.
        </p>
      </header>

      <section className="grid gap-4">
        {sections.map((section) => (
          <article key={section.title} className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
            <p className="mt-2 text-gray-600">{section.summary}</p>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700">
              {section.actions.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-900">Scientific basis (selection)</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left border-b border-gray-200 text-gray-500">
                <th className="py-2 pr-4">Domain</th><th className="py-2 pr-4">Key finding</th><th className="py-2">Reference</th>
              </tr>
            </thead>
            <tbody>
              {studies.map((study) => (
                <tr key={study.citation} className="border-b border-gray-100 align-top">
                  <td className="py-3 pr-4 font-medium text-gray-900">{study.domain}</td>
                  <td className="py-3 pr-4 text-gray-700">{study.finding}</td>
                  <td className="py-3 text-gray-600">{study.citation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl bg-amber-50 border border-amber-200 p-5 text-sm text-amber-900">
        <strong>Important:</strong> this overview is educational and does not replace medical diagnosis or treatment advice.
      </section>
    </div>
  );
}
