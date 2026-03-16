import { TrendUp, TrendDown, Minus } from '@phosphor-icons/react/dist/ssr';

interface StatCardProps {
  title: string;
  value: string;
  delta?: number;        // percentage change
  deltaLabel?: string;
  accentColor?: string;  // Tailwind border color class
  icon?: React.ReactNode;
}

export default function StatCard({
  title, value, delta, deltaLabel, accentColor = 'border-brand-primary', icon,
}: StatCardProps) {
  const isPositive = delta !== undefined && delta > 0;
  const isNegative = delta !== undefined && delta < 0;

  return (
    <div className={`glass-card p-5 border-l-4 ${accentColor}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-brand-muted text-xs uppercase tracking-wider mb-1">{title}</p>
          <p className="text-2xl font-display font-bold text-brand-text">{value}</p>
        </div>
        {icon && <div className="text-brand-muted opacity-60">{icon}</div>}
      </div>
      {delta !== undefined && (
        <div className={`flex items-center gap-1 mt-3 text-sm ${isPositive ? 'text-brand-success' : isNegative ? 'text-red-400' : 'text-brand-muted'}`}>
          {isPositive ? <TrendUp size={16} weight="bold" /> : isNegative ? <TrendDown size={16} weight="bold" /> : <Minus size={16} />}
          <span>{Math.abs(delta).toFixed(1)}% {deltaLabel ?? 'vs last month'}</span>
        </div>
      )}
    </div>
  );
}
