import { type CategoryInfo, type UserProgress } from "@/types";
import ProgressBar from "./ProgressBar";

interface CategoryCardProps {
  category: CategoryInfo;
  progress?: UserProgress;
  onClick: () => void;
}

export default function CategoryCard({ category, progress, onClick }: CategoryCardProps) {
  const hasProgress = progress !== undefined && progress.total_questions > 0;

  return (
    <button
      onClick={onClick}
      className="relative bg-white rounded-xl shadow-sm overflow-hidden flex items-stretch text-left w-full
                 hover:scale-105 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      {/* Left color bar */}
      <div className={`w-1.5 flex-shrink-0 ${category.color}`} />

      {/* Content */}
      <div className="flex-1 p-4 md:p-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl" aria-hidden="true">{category.icon}</span>
          <h3 className="font-semibold text-slate-900 text-base md:text-lg leading-tight">
            {category.label}
          </h3>
        </div>

        <p className="text-xs md:text-sm text-slate-500 mb-3 leading-relaxed">
          {category.description}
        </p>

        {hasProgress ? (
          <ProgressBar
            current={progress.correct_questions}
            total={progress.total_questions}
            showLabel={true}
          />
        ) : (
          <p className="text-xs text-slate-400 italic">尚未開始練習</p>
        )}
      </div>
    </button>
  );
}
