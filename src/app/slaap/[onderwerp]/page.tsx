import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDomain } from '@/lib/domains';
import { getTopicBySlug, getTopicsByDomain, allTopics } from '@/lib/content';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import InsightCard from '@/components/insight/InsightCard';
import EvidenceBadge from '@/components/insight/EvidenceBadge';
import CrosslinkBar from '@/components/topic/CrosslinkBar';

interface PageProps {
  params: Promise<{ onderwerp: string }>;
}

export async function generateStaticParams() {
  const topics = getTopicsByDomain('slaap');
  return topics.map((t) => ({ onderwerp: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { onderwerp } = await params;
  const topic = getTopicBySlug('slaap', onderwerp);
  if (!topic) return { title: 'Niet gevonden' };
  return {
    title: `${topic.title} - Slaap`,
    description: topic.description,
  };
}

export default async function SlaapTopicPage({ params }: PageProps) {
  const { onderwerp } = await params;
  const domain = getDomain('slaap')!;
  const topic = getTopicBySlug('slaap', onderwerp);

  if (!topic) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Slaap', href: '/slaap' },
          { label: topic.title },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {topic.title}
          </h1>
          <EvidenceBadge score={topic.evidenceScore} size="md" />
        </div>
        <p className="text-gray-600 leading-relaxed">{topic.introduction}</p>
      </div>

      <div className="space-y-4">
        {topic.insights
          .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
          .map((insight) => (
            <InsightCard
              key={insight.id}
              insight={insight}
              domainColor={domain.color}
            />
          ))}
      </div>

      <CrosslinkBar crosslinks={topic.crosslinks} allTopics={allTopics} />
    </div>
  );
}
