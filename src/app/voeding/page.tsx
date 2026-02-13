import { Metadata } from 'next';
import { getDomain } from '@/lib/domains';
import { getTopicsByDomain } from '@/lib/content';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import TopicCard from '@/components/topic/TopicCard';

export const metadata: Metadata = {
  title: 'Voeding',
  description: 'Ontdek wetenschappelijk onderbouwde inzichten over macronutriënten, darmgezondheid, hydratatie en meer.',
};

export default function VoedingPage() {
  const domain = getDomain('voeding')!;
  const topics = getTopicsByDomain('voeding');

  return (
    <div className="app-container py-8 md:py-10">
      <Breadcrumbs items={[{ label: 'Voeding' }]} />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{domain.icon}</span>
          <h1 className="text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            {domain.title}
          </h1>
        </div>
        <p className="leading-relaxed max-w-3xl" style={{ color: "var(--text-secondary)" }}>
          {domain.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} domainSlug="voeding" />
        ))}
      </div>
    </div>
  );
}
