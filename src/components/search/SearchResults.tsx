import Link from 'next/link';
import { SearchResult } from '@/types';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
}

export default function SearchResults({ results, query }: SearchResultsProps) {
  const topicResults = results.filter((r) => r.type === 'topic');
  const insightResults = results.filter((r) => r.type === 'insight');

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          No results found for &ldquo;{query}&rdquo;
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Try another search term or browse the domains below.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {topicResults.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Topics ({topicResults.length})
          </h2>
          <div className="space-y-2">
            {topicResults.map((result, i) => (
              <Link
                key={`topic-${i}`}
                href={`/${result.domainId}/${result.topicSlug}`}
                className="block bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span>{result.domainIcon}</span>
                  <span className="text-xs text-gray-500">{result.domainTitle}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{result.topicTitle}</h3>
                <p className="text-sm text-gray-600 mt-1">{result.matchText}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {insightResults.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Insights ({insightResults.length})
          </h2>
          <div className="space-y-2">
            {insightResults.map((result, i) => (
              <Link
                key={`insight-${i}`}
                href={`/${result.domainId}/${result.topicSlug}`}
                className="block bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span>{result.domainIcon}</span>
                  <span className="text-xs text-gray-500">
                    {result.domainTitle} / {result.topicTitle}
                  </span>
                </div>
                <p className="font-medium text-gray-900 text-sm">
                  {result.insightAction}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
