interface StatsCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color?: string;
}

export default function StatsCard({ label, value, icon, color = "text-indigo-500" }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 flex items-center gap-4">
      <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xl md:text-2xl font-bold text-slate-900 truncate">{value}</p>
        <p className="text-xs md:text-sm text-slate-500 mt-0.5">{label}</p>
      </div>
    </div>
  );
}
