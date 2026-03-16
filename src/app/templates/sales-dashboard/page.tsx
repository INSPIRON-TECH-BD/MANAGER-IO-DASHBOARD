'use client';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import StatCard from '@/components/ui/StatCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { SALES_DATA, formatK, COLORS } from '@/lib/tokens';
import { ChartLineUp, Package, Users } from '@phosphor-icons/react';

export default function SalesDashboard() {
  const total = SALES_DATA.reduce((s, d) => s + d.revenue, 0);
  const lastMonth = SALES_DATA[SALES_DATA.length - 1];
  const prevMonth = SALES_DATA[SALES_DATA.length - 2];
  const delta = ((lastMonth.revenue - prevMonth.revenue) / prevMonth.revenue) * 100;

  return (
    <div className="space-y-8">
      <SectionHeader
        badge="Sales Template"
        title="Sales Dashboard"
        subtitle="Revenue trends and order volume — Manager.io data"
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Total Revenue (6M)"   value={formatK(total)}              accentColor="border-brand-primary" icon={<ChartLineUp size={24} />} />
        <StatCard title="This Month Revenue"   value={formatK(lastMonth.revenue)}  delta={delta} accentColor="border-brand-cyan" />
        <StatCard title="This Month Orders"    value={String(lastMonth.orders)}    delta={5.2}   accentColor="border-brand-success" icon={<Package size={24} />} />
      </div>

      {/* Area Chart */}
      <div className="glass-card p-6">
        <h3 className="text-brand-muted text-xs uppercase tracking-wider mb-4">Revenue vs Target (BDT)</h3>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={SALES_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={COLORS.primary} stopOpacity={0.4} />
                <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="tgtGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={COLORS.cyan} stopOpacity={0.2} />
                <stop offset="95%" stopColor={COLORS.cyan} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
            <XAxis dataKey="month" tick={{ fill: COLORS.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={(v) => formatK(v)} tick={{ fill: COLORS.muted, fontSize: 11 }} axisLine={false} tickLine={false} width={60} />
            <Tooltip
              contentStyle={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 8 }}
              formatter={(v: number) => [formatK(v)]}
            />
            <Area type="monotone" dataKey="revenue" stroke={COLORS.primary} fill="url(#revGrad)" strokeWidth={2} name="Revenue" />
            <Area type="monotone" dataKey="target"  stroke={COLORS.cyan}    fill="url(#tgtGrad)" strokeWidth={2} strokeDasharray="4 4" name="Target" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Orders Table */}
      <div className="glass-card p-6 overflow-x-auto">
        <h3 className="text-brand-muted text-xs uppercase tracking-wider mb-4">Monthly Breakdown</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-brand-border text-brand-muted">
              <th className="text-left py-2 pr-4">Month</th>
              <th className="text-right py-2 pr-4">Revenue</th>
              <th className="text-right py-2 pr-4">Target</th>
              <th className="text-right py-2">Orders</th>
            </tr>
          </thead>
          <tbody>
            {SALES_DATA.map((row) => {
              const hit = row.revenue >= row.target;
              return (
                <tr key={row.month} className="border-b border-brand-border/40 hover:bg-brand-card/50 transition-colors">
                  <td className="py-3 pr-4 font-medium">{row.month}</td>
                  <td className={`text-right py-3 pr-4 ${hit ? 'text-brand-success' : 'text-brand-accent'}`}>{formatK(row.revenue)}</td>
                  <td className="text-right py-3 pr-4 text-brand-muted">{formatK(row.target)}</td>
                  <td className="text-right py-3">{row.orders}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
