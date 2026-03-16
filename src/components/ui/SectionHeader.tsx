interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function SectionHeader({ title, subtitle, badge }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      {badge && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-2">
          {badge}
        </span>
      )}
      <h2 className="text-2xl font-display font-bold text-brand-text">{title}</h2>
      {subtitle && <p className="text-brand-muted mt-1 text-sm">{subtitle}</p>}
      <div className="mt-3 h-px bg-gradient-to-r from-brand-primary via-brand-cyan to-transparent" />
    </div>
  );
}
