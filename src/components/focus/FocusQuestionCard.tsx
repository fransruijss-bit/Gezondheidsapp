import { FocusQuestion } from '@/lib/focusCheck';

interface FocusQuestionCardProps {
  question: FocusQuestion;
  value?: string;
  onSelect: (optionId: string) => void;
}

export default function FocusQuestionCard({ question, value, onSelect }: FocusQuestionCardProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-5">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className={`w-full text-left rounded-xl border px-4 py-3 transition ${
              value === option.id
                ? 'border-slaap bg-blue-50 text-gray-900'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <span className="font-semibold mr-2">{option.id}.</span>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
