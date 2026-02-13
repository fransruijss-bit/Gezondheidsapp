import { Paper } from '@/types';

interface PaperCardProps {
  paper: Paper;
}

const studyTypeLabels: Record<string, string> = {
  'meta-analyse': 'Meta-analysis',
  'RCT': 'RCT',
  'cohort': 'Cohort study',
  'cross-sectioneel': 'Cross-sectional',
  'review': 'Review',
  'case-study': 'Case study',
};

export default function PaperCard({ paper }: PaperCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-medium text-gray-900 leading-snug">
          {paper.title}
        </h4>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span>{paper.authors}</span>
        <span className="text-gray-300">|</span>
        <span>{paper.year}</span>
        <span className="text-gray-300">|</span>
        <span className="italic">{paper.journal}</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
          {studyTypeLabels[paper.studyType] || paper.studyType}
        </span>
        {paper.sampleSize && (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
            n={paper.sampleSize.toLocaleString('en-US')}
          </span>
        )}
      </div>
      {paper.conclusion && (
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          {paper.conclusion}
        </p>
      )}
      {paper.doi && (
        <a
          href={paper.doi.startsWith('http') ? paper.doi : `https://doi.org/${paper.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
        >
          View paper
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  );
}
