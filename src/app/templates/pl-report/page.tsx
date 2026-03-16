'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import SectionHeader from '@/components/ui/SectionHeader';
import StatCard from '@/components/ui/StatCard';
import { PL_DATA, formatK, COLORS } from '@/lib/tokens';

export default function PLReport() {
  const revenue   = PL_DATA.find(d => d.name === 'Revenue')!.value;
  const netProfit = PL_DATA.find(d => d.name === 'Net Profit')!.value;
  const grossProfit = PL_DATA.find(d => d.name === 'Gross Profit')!.value;
  const margin = ((netProfit / revenue) * 100).toFixed(1);

  const colorMap: Record<string, string> = {
    income:   COLORS.success,
    expense:  '#ef4444',
    subtotal: COLORS.primary,
    total:    COLORS.cyan,
  };

  return (
    <div className="space-y-8">
      <SectionHeader badge="Finance Template" title="Profit & Loss Report" subtitle="Income statement view — Manager.io data" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Total Revenue"   value={formatK(revenue)}    accentColor="border-brand-success" delta={8.3} />
        <StatCard title="Gross Profit"    value={formatK(grossProfit)} accentColor="border-brand-primary" />
        <StatCard title="Net Margin"      value={`${margin}%`}        accentColor="border-brand-cyan"    delta={1.2} />
      </div>

      <div className="glass-card p-6">
        <h3 className="text-brand-muted text-xs uppercase tracking-wider mb-4">P&L Waterfall (BDT)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={PL_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" tick={{ fill: COLORS.muted, fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={formatK} tick={{ fill: COLORS.muted, fontSize: 11 }} axisLine={false} tickLine={false} width={65} />
            <Tooltip
              contentStyle={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 8 }}
              formatter={(v: number) => [formatK(Math.abs(v)), '']}
            />
            <ReferenceLine y={0} stroke={COLORS.border} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {PL_DATA.map((entry) => (
                <Cell key={entry.name} fill={colorMap[entry.type]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="glass-card p-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-brand-border text-brand-muted">
              <th className="text-left py-2 pr-4">Line Item</th>
              <th className="text-right py-2">Amount (BDT)</th>
            </tr>
          </thead>
          <tbody>
            {PL_DATA.map((row) => (
              <tr key={row.name} className={`border-b border-brand-border/40 ${row.type === 'total' ? 'font-bold text-brand-cyan' : row.type === 'subtotal' ? 'font-semibold text-brand-primary' : ''}`}>
                <td className="py-3 pr-4">{row.name}</td>
                <td className={`text-right py-3 ${row.value < 0 ? 'text-red-400' : 'text-brand-success'}`}>{formatK(row.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
