'use client';
import SectionHeader from '@/components/ui/SectionHeader';
import StatCard from '@/components/ui/StatCard';
import { INVENTORY_DATA } from '@/lib/tokens';
import { Warning, CheckCircle, XCircle } from '@phosphor-icons/react';

const STATUS_STYLES: Record<string, { bg: string; text: string; icon: React.ReactNode }> = {
  OK:       { bg: 'bg-green-900/30',  text: 'text-green-300',  icon: <CheckCircle size={14} weight="fill" /> },
  LOW:      { bg: 'bg-yellow-900/30', text: 'text-yellow-300', icon: <Warning size={14} weight="fill" /> },
  CRITICAL: { bg: 'bg-red-900/30',    text: 'text-red-300',    icon: <XCircle size={14} weight="fill" /> },
};

export default function InventoryDashboard() {
  const critical = INVENTORY_DATA.filter(i => i.status === 'CRITICAL').length;
  const low      = INVENTORY_DATA.filter(i => i.status === 'LOW').length;
  const ok       = INVENTORY_DATA.filter(i => i.status === 'OK').length;

  return (
    <div className="space-y-8">
      <SectionHeader badge="Operations Template" title="Inventory Dashboard" subtitle="Stock levels and reorder alerts — Manager.io data" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Items OK"       value={String(ok)}       accentColor="border-brand-success" />
        <StatCard title="Low Stock"      value={String(low)}      accentColor="border-brand-accent"  />
        <StatCard title="Critical Stock" value={String(critical)} accentColor="border-red-500"       />
      </div>

      <div className="glass-card p-6 overflow-x-auto">
        <h3 className="text-brand-muted text-xs uppercase tracking-wider mb-4">Inventory Register</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-brand-border text-brand-muted">
              <th className="text-left py-2 pr-4">SKU</th>
              <th className="text-left py-2 pr-4">Item Name</th>
              <th className="text-right py-2 pr-4">Qty</th>
              <th className="text-right py-2 pr-4">Reorder At</th>
              <th className="text-center py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {INVENTORY_DATA.map((row) => {
              const s = STATUS_STYLES[row.status];
              return (
                <tr key={row.sku} className="border-b border-brand-border/40 hover:bg-brand-card/50 transition-colors">
                  <td className="py-3 pr-4 font-mono text-brand-muted">{row.sku}</td>
                  <td className="py-3 pr-4 font-medium">{row.name}</td>
                  <td className={`text-right py-3 pr-4 font-bold ${row.qty <= row.reorder ? 'text-red-400' : 'text-brand-text'}`}>{row.qty}</td>
                  <td className="text-right py-3 pr-4 text-brand-muted">{row.reorder}</td>
                  <td className="py-3 text-center">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${s.bg} ${s.text}`}>
                      {s.icon}{row.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
