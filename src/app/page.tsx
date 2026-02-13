import { domains } from '@/lib/domains';
import { getTopicsByDomain } from '@/lib/content';
import DomainCard from '@/components/domain/DomainCard';
import SearchBar from '@/components/search/SearchBar';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Gezondheidskennis,{' '}
            <span className="text-slaap">wetenschappelijk</span>{' '}
            onderbouwd
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Van direct toepasbaar advies tot de wetenschappelijke papers.
            Ontdek wat echt werkt voor je slaap, voeding en beweging.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Domain Cards */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domains.map((domain) => {
            const topics = getTopicsByDomain(domain.id);
            return (
              <DomainCard
                key={domain.id}
                domain={domain}
                topicCount={topics.length}
              />
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Hoe werkt het?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">De Actie</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Eén zin, direct toepasbaar. Wat kun je vandaag nog doen om je
                gezondheid te verbeteren?
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">De Uitleg</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Begrijp waarom het werkt. In 2-3 minuten leestijd, zonder
                jargon, met heldere analogieën.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">De Wetenschap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bekijk de onderliggende papers met samenvattingen en
                evidence-scores. Volledige transparantie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-500 mt-1">Domeinen</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">30</div>
            <div className="text-sm text-gray-500 mt-1">Onderwerpen</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">90+</div>
            <div className="text-sm text-gray-500 mt-1">Inzichten</div>
          </div>
        </div>
      </section>
    </div>
  );
}
