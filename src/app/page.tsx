import { domains } from '@/lib/domains';
import { getTopicsByDomain } from '@/lib/content';
import DomainCard from '@/components/domain/DomainCard';
import SearchBar from '@/components/search/SearchBar';
import FocusCheckOnboarding from '@/components/focus/FocusCheckOnboarding';

export default function HomePage() {
  return (
    <div>
      <FocusCheckOnboarding />

      <section className="border-b" style={{ borderColor: 'var(--border-subtle)', background: 'var(--hero-gradient)' }}>
        <div className="app-container py-14 md:py-20 text-center">
          <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: 'var(--text-secondary)' }}>Gezondheidsapp</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
            Duidelijke gezondheidskeuzes,
            <span className="block" style={{ color: 'var(--primary)' }}>wetenschappelijk onderbouwd</span>
          </h1>
          <p className="mt-5 text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Van direct toepasbaar advies tot transparante evidence: snel scanbaar, rustig vormgegeven en zonder ruis.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="app-container section-block">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domains.map((domain) => {
            const topics = getTopicsByDomain(domain.id);
            return <DomainCard key={domain.id} domain={domain} topicCount={topics.length} />;
          })}
        </div>
      </section>

      <section className="border-y" style={{ borderColor: 'var(--border-subtle)', background: 'var(--surface-2)' }}>
        <div className="app-container section-block">
          <div className="ui-card p-6 md:p-8">
            <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: 'var(--text-secondary)' }}>Nieuw</p>
            <h2 className="text-3xl font-bold mt-2" style={{ color: 'var(--text-primary)' }}>Algemeen best gezondheidsadvies</h2>
            <p className="mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              De belangrijkste pijlers van gezondheidsoptimalisatie samengevat in één heldere gids: slaap, voeding, training,
              supplementen, metingen en leefomgeving.
            </p>
            <a href="/gezondheidsadvies" className="btn-primary mt-5">Bekijk gezondheidsadvies</a>
          </div>
        </div>
      </section>

      <section className="app-container section-block">
        <h2 className="text-3xl font-bold text-center mb-10" style={{ color: 'var(--text-primary)' }}>Hoe werkt het?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            ['1', 'De Actie', 'Eén heldere stap die je vandaag kunt toepassen.'],
            ['2', 'De Uitleg', 'Korte context die verklaart waarom dit werkt.'],
            ['3', 'De Wetenschap', 'De bronnen en evidence-score transparant in beeld.'],
          ].map(([index, title, body]) => (
            <div key={title} className="ui-card p-6 text-center">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold"
                style={{ background: 'var(--primary-subtle)', color: 'var(--primary)' }}
              >
                {index}
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
