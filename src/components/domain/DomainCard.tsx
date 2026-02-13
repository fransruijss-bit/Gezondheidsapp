import Link from 'next/link';
import { Domain } from '@/types';

interface DomainCardProps {
  domain: Domain;
  topicCount: number;
}

export default function DomainCard({ domain, topicCount }: DomainCardProps) {
  return (
    <Link href={`/${domain.slug}`} className="block h-full">
      <div className="ui-card ui-card-interactive p-6 h-full flex flex-col">
        <div className="text-4xl mb-3">{domain.icon}</div>
        <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          {domain.title}
        </h2>
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
          {domain.description}
        </p>
        <div className="mt-4 text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>
          {topicCount} onderwerpen
        </div>
      </div>
    </Link>
  );
}
