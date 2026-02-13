import { domains } from '@/lib/domains';
import { getTopicsByDomain } from '@/lib/content';
import DomainCard from '@/components/domain/DomainCard';
import SearchBar from '@/components/search/SearchBar';
import FocusCheckOnboarding from '@/components/focus/FocusCheckOnboarding';

export default function HomePage() {
  return (
    <div>
      <FocusCheckOnboarding />

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Health knowledge, <span className="text-slaap">science-backed</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From actionable guidance to the original research papers. Discover what truly works for sleep, nutrition,
            movement, and overall health optimization.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domains.map((domain) => {
            const topics = getTopicsByDomain(domain.id);
            return <DomainCard key={domain.id} domain={domain} topicCount={topics.length} />;
          })}
        </div>
      </section>

      <section className="bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <p className="text-xs font-semibold tracking-wide uppercase text-gray-500">New</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">Best overall health guidance: fully summarized</h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Explore the key pillars of evidence-based health optimization in one practical overview.
            </p>
            <a
              href="/gezondheidsadvies"
              className="inline-flex mt-5 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors"
            >
              View best health guidance
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">How does it work?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">The Action</h3>
              <p className="text-sm text-gray-600 leading-relaxed">One sentence, directly actionable advice.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">The Explanation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">A short, clear explanation of why it works.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">The Science</h3>
              <p className="text-sm text-gray-600 leading-relaxed">The supporting research and evidence score.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
