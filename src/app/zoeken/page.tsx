'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { searchContent } from '@/lib/content';
import SearchBar from '@/components/search/SearchBar';
import SearchResults from '@/components/search/SearchResults';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query.length >= 2 ? searchContent(query) : [];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Search</h1>

      <div className="mb-8">
        <SearchBar />
      </div>

      {query && (
        <div className="mb-4 text-sm text-gray-500">
          {results.length} results for &ldquo;{query}&rdquo;
        </div>
      )}

      <SearchResults results={results} query={query} />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-8">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
