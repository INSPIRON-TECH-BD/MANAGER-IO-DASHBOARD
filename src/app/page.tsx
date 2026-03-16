import Link from 'next/link';
import { ChartLineUp, ArrowRight, CurrencyDollar, ChartBar, Package } from '@phosphor-icons/react/dist/ssr';

const templates = [
  {
    href:    '/templates/sales-dashboard',
    title:   'Sales Dashboard',
    desc:    'Revenue trends, order volume, and top customer analysis.',
    icon:    ChartLineUp,
    color:   'border-brand-primary glow-primary',
    badge:   'bg-blue-900/40 text-blue-300',
    badgeText: 'Sales',
  },
  {
    href:    '/templates/pl-report',
    title:   'P&L Report',
    desc:    'Income statement with waterfall breakdown and margin KPIs.',
    icon:    CurrencyDollar,
    color:   'border-brand-success glow-success',
    badge:   'bg-green-900/40 text-green-300',
    badgeText: 'Finance',
  },
  {
    href:    '/templates/cash-flow',
    title:   'Cash Flow',
    desc:    'Operating, investing, and financing activity by month.',
    icon:    ChartBar,
    color:   'border-brand-cyan glow-cyan',
    badge:   'bg-teal-900/40 text-teal-300',
    badgeText: 'Finance',
  },
  {
    href:    '/templates/inventory',
    title:   'Inventory',
    desc:    'Stock levels, low-stock alerts, and reorder status tracking.',
    icon:    Package,
    color:   'border-brand-accent glow-accent',
    badge:   'bg-orange-900/40 text-orange-300',
    badgeText: 'Operations',
  },
];

export default function HomePage() {
  return (
    <div className="blueprint-grid min-h-screen">
      {/* Hero */}
      <section className="text-center py-20 px-4 relative">
        <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan mb-6 font-institutional">
          Official Manager.io Partner — Bangladesh
        </span>
        <h1 className="text-5xl md:text-6xl font-institutional font-bold text-white mb-6 leading-tight">
          Manager.io<br />
          <span className="text-brand-primary">Dashboard Templates</span>
        </h1>
        <p className="text-brand-muted max-w-2xl mx-auto text-lg mb-10 font-light leading-relaxed">
          Operational Intelligence for the Modern Enterprise.
          Bridge your Manager.io data with custom Next.js 14 infrastructure.
        </p>
        <a
          href="https://github.com/INSPIRON-TECH-BD/MANAGER-IO-DASHBOARD"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-primary text-black font-bold hover:scale-105 transition-transform haptic-button shadow-[0_0_20px_rgba(255,215,0,0.3)]"
        >
          View on GitHub <ArrowRight size={18} weight="bold" />
        </a>
      </section>

      {/* Template Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
        {templates.map(({ href, title, desc, icon: Icon, color, badge, badgeText }) => (
          <Link key={href} href={href} className={`glass-card border-t-4 ${color} p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform`}>
            <div className="flex items-center justify-between">
              <Icon size={28} weight="duotone" className="text-brand-muted" />
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badge}`}>{badgeText}</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-brand-text text-lg">{title}</h3>
              <p className="text-brand-muted text-sm mt-1">{desc}</p>
            </div>
            <span className="text-brand-cyan text-sm flex items-center gap-1 mt-auto">
              View template <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
