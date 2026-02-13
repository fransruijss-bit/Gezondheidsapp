import { Metadata } from 'next';
import { getDomain } from '@/lib/domains';
import { getTopicsByDomain } from '@/lib/content';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import TopicCard from '@/components/topic/TopicCard';

export const metadata: Metadata = {
  title: 'Nutrition',
  description: 'Discover science-backed insights on macronutrients, gut health, hydration, and more.',
};

export default function NutritionPage() {
  const domain = getDomain('voeding')!;
  const topics = getTopicsByDomain('voeding');

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Nutrition' }]} />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{domain.icon}</span>
          <h1 className="text-3xl font-bold" style={{ color: domain.color }}>
            {domain.title}
          </h1>
        </div>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          {domain.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} domainSlug="voeding" />
        ))}
      </div>
    </div>
  );
}
