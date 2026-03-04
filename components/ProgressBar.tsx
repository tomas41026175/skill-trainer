interface ProgressBarProps {
  current: number;
  total: number;
  showLabel?: boolean;
}

function getBarColor(percentage: number): string {
  if (percentage >= 80) return "bg-green-500";
  if (percentage >= 50) return "bg-yellow-400";
  if (percentage >= 20) return "bg-orange-400";
  return "bg-red-400";
}

export default function ProgressBar({ current, total, showLabel = true }: ProgressBarProps) {
  const percentage = total === 0 ? 0 : Math.round((current / total) * 100);
  const barColor = getBarColor(percentage);

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-slate-500">
            {current} / {total}
          </span>
          <span className="text-xs font-medium text-slate-700">{percentage}%</span>
        </div>
      )}
      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${barColor}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      </div>
    </div>
  );
}
