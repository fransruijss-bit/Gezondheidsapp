import Link from 'next/link';
import { Topic } from '@/types';
import { domains } from '@/lib/domains';

interface CrosslinkBarProps {
  crosslinks: string[];
  allTopics: Topic[];
}

export default function CrosslinkBar({ crosslinks, allTopics }: CrosslinkBarProps) {
  const linkedTopics = crosslinks
    .map((id) => allTopics.find((t) => t.id === id))
    .filter((t): t is Topic => t !== undefined);

  if (linkedTopics.length === 0) return null;

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">
        Gerelateerde onderwerpen
      </h3>
      <div className="flex flex-wrap gap-2">
        {linkedTopics.map((topic) => {
          const domain = domains.find((d) => d.id === topic.domainId);
          if (!domain) return null;

          return (
            <Link
              key={topic.id}
              href={`/${domain.slug}/${topic.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              <span>{domain.icon}</span>
              {topic.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
