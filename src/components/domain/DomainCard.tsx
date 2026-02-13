import Link from 'next/link';
import { Domain } from '@/types';

interface DomainCardProps {
  domain: Domain;
  topicCount: number;
}

export default function DomainCard({ domain, topicCount }: DomainCardProps) {
  const bgColorMap: Record<string, string> = {
    slaap: 'bg-slaap-light hover:bg-slaap/20 border-slaap/20',
    voeding: 'bg-voeding-light hover:bg-voeding/20 border-voeding/20',
    beweging: 'bg-beweging-light hover:bg-beweging/20 border-beweging/20',
  };

  const textColorMap: Record<string, string> = {
    slaap: 'text-slaap-dark',
    voeding: 'text-voeding-dark',
    beweging: 'text-beweging-dark',
  };

  return (
    <Link href={`/${domain.slug}`}>
      <div
        className={`rounded-2xl border p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
          bgColorMap[domain.slug] || ''
        }`}
      >
        <div className="text-4xl mb-3">{domain.icon}</div>
        <h2 className={`text-xl font-bold mb-2 ${textColorMap[domain.slug] || ''}`}>
          {domain.title}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {domain.description}
        </p>
        <div className="mt-4 text-xs font-medium text-gray-500">
          {topicCount} topics
        </div>
      </div>
    </Link>
  );
}
