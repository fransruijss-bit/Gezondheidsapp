'use client';

import { useState } from 'react';
import { Insight } from '@/types';
import EvidenceBadge from './EvidenceBadge';
import PaperCard from './PaperCard';

interface InsightCardProps {
  insight: Insight;
  domainColor: string;
}

export default function InsightCard({ insight, domainColor }: InsightCardProps) {
  const [showExplanation, setShowExplanation] = useState(false);
  const [showScience, setShowScience] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Layer 1: Action - always visible */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="text-base font-semibold text-gray-900 leading-snug flex-1">
            {insight.action}
          </p>
          <EvidenceBadge score={insight.evidenceScore} />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
            style={{ color: domainColor }}
          >
            <svg
              className={`w-4 h-4 transition-transform ${showExplanation ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {showExplanation ? 'Verberg uitleg' : 'Waarom?'}
          </button>

          <button
            onClick={() => setShowScience(!showScience)}
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              className={`w-4 h-4 transition-transform ${showScience ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {showScience ? 'Verberg wetenschap' : 'Bekijk de wetenschap'}
          </button>
        </div>
      </div>

      {/* Layer 2: Explanation */}
      <div className={`accordion-content ${showExplanation ? 'open' : ''}`}>
        <div className="accordion-inner">
          <div className="px-5 pb-5 border-t border-gray-100">
            <div className="pt-4 prose-content text-gray-700 text-sm leading-relaxed">
              {insight.explanation.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Layer 3: Science */}
      <div className={`accordion-content ${showScience ? 'open' : ''}`}>
        <div className="accordion-inner">
          <div className="px-5 pb-5 border-t border-gray-100">
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-sm font-semibold text-gray-900">Wetenschappelijke bronnen</h3>
                <span className="text-xs text-gray-500">{insight.studyTypeSummary}</span>
              </div>
              <div className="space-y-3">
                {insight.papers.map((paper) => (
                  <PaperCard key={paper.id} paper={paper} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
