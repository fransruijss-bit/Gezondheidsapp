import { evidenceLabels, evidenceColors } from '@/types';

interface EvidenceBadgeProps {
  score: 1 | 2 | 3;
  size?: 'sm' | 'md';
}

export default function EvidenceBadge({ score, size = 'sm' }: EvidenceBadgeProps) {
  const label = evidenceLabels[score];
  const colorClass = evidenceColors[score];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium ${colorClass} ${
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
      }`}
    >
      <span className="evidence-block">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`inline-block ${
              i <= score ? 'bg-current opacity-80' : 'bg-current opacity-20'
            }`}
          />
        ))}
      </span>
      {label}
    </span>
  );
}
