'use client';

import Link from 'next/link';
import { FocusDomain, FocusRecommendation } from '@/lib/focusCheck';
import { trackEvent } from '@/lib/analytics';

interface FocusResultsProps {
  topDomains: FocusDomain[];
  topTags: string[];
  recommendations: FocusRecommendation[];
}

const domainLabel: Record<FocusDomain, string> = {
  nutrition: 'Voeding',
  sleep: 'Slaap',
  movement: 'Beweging',
};

export default function FocusResults({ topDomains, topTags, recommendations }: FocusResultsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Jouw Focus Check resultaten</h2>
      <p className="text-gray-600 mt-2">Top focusgebieden op basis van jouw antwoorden.</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {topDomains.map((domain) => (
          <span key={domain} className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-sm font-medium text-blue-800">
            {domainLabel[domain]}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {topTags.map((tag) => (
          <span key={tag} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
            #{tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Top adviezen voor jou</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((item) => (
          <article key={item.topicId} className="rounded-xl border border-gray-200 p-4 bg-white">
            <h4 className="font-semibold text-gray-900">{item.title}</h4>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500">{tag}</span>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">Leestijd ± {item.readTimeMinutes} min · Evidence {item.evidenceScore}/3</p>
            <Link
              href={`/${item.domainId}/${item.slug}`}
              className="inline-flex mt-3 text-sm font-medium text-slaap hover:underline"
              onClick={() => trackEvent('result_clicked', { topicId: item.topicId })}
            >
              Lees meer →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
