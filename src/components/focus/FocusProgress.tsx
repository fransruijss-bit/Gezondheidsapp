interface FocusProgressProps {
  current: number;
  total: number;
}

export default function FocusProgress({ current, total }: FocusProgressProps) {
  const progress = Math.round((current / total) * 100);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
        <span>Question {current}/{total}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-slaap transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
