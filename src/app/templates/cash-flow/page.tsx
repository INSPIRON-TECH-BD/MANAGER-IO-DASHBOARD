'use client';
import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import SectionHeader from '@/components/ui/SectionHeader';
import StatCard from '@/components/ui/StatCard';
import { CASHFLOW_DATA, formatK, COLORS } from '@/lib/tokens';

export default function CashFlow() {
  const totals = CASHFLOW_DATA.map(d => ({ ...d, net: d.operating + d.investing + d.financing }));
  const totalOp  = totals.reduce((s, d) => s + d.operating, 0);
  const totalNet = totals.reduce((s, d) => s + d.net, 0);

  return (
    <div className="space-y-8">
      <SectionHeader badge="Finance Template" title="Cash Flow Dashboard" subtitle="Operating, investing & financing flows — Manager.io data" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Operating Cash (6M)"  value={formatK(totalOp)}   accentColor="border-brand-primary" delta={12.4} />
        <StatCard title="Net Cash (6M)"        value={formatK(totalNet)}  accentColor="border-brand-cyan"    delta={7.8} />
        <StatCard title="Latest Month Net"     value={formatK(totals[totals.length - 1].net)} accentColor="border-brand-success" />
      </div>

      <div className="glass-card p-6">
        <h3 className="text-brand-muted text-xs uppercase tracking-wider mb-4">Cash Flow by Activity (BDT)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={totals} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
            <XAxis dataKey="month" tick={{ fill: COLORS.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={formatK} tick={{ fill: COLORS.muted, fontSize: 11 }} axisLine={false} tickLine={false} width={65} />
            <Tooltip contentStyle={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 8 }} formatter={(v: number) => [formatK(v)]} />
            <Legend wrapperStyle={{ color: COLORS.muted, fontSize: 12 }} />
            <Bar dataKey="operating"  fill={COLORS.primary}  name="Operating"  radius={[4,4,0,0]} />
            <Bar dataKey="financing"  fill={COLORS.accent}   name="Financing"  radius={[4,4,0,0]} />
            <Bar dataKey="investing"  fill="#ef4444"         name="Investing"  radius={[4,4,0,0]} />
            <Line type="monotone" dataKey="net" stroke={COLORS.cyan} strokeWidth={2.5} dot={{ r: 4, fill: COLORS.cyan }} name="Net" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
