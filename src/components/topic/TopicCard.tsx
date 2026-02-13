import Link from 'next/link';
import { Topic } from '@/types';
import EvidenceBadge from '@/components/insight/EvidenceBadge';

interface TopicCardProps {
  topic: Topic;
  domainSlug: string;
}

export default function TopicCard({ topic, domainSlug }: TopicCardProps) {
  return (
    <Link href={`/${domainSlug}/${topic.slug}`}>
      <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-gray-900">{topic.title}</h3>
          <EvidenceBadge score={topic.evidenceScore} />
        </div>
        <p className="text-sm text-gray-600 leading-relaxed flex-1">
          {topic.description}
        </p>
        <div className="mt-3 text-xs text-gray-400">
          {topic.insights.length} inzichten
        </div>
      </div>
    </Link>
  );
}
