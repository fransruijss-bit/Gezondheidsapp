import Link from 'next/link';
import { Topic } from '@/types';
import EvidenceBadge from '@/components/insight/EvidenceBadge';

interface TopicCardProps {
  topic: Topic;
  domainSlug: string;
}

export default function TopicCard({ topic, domainSlug }: TopicCardProps) {
  return (
    <Link href={`/${domainSlug}/${topic.slug}`} className="block h-full">
      <div className="ui-card ui-card-interactive p-5 h-full flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{topic.title}</h3>
          <EvidenceBadge score={topic.evidenceScore} />
        </div>
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
          {topic.description}
        </p>
        <div className="mt-3 text-xs" style={{ color: 'var(--text-tertiary)' }}>
          {topic.insights.length} inzichten
        </div>
      </div>
    </Link>
  );
}
