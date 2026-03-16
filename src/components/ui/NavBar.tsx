'use client';
import Link from 'next/link';
import { ChartBar } from '@phosphor-icons/react';

const links = [
  { href: '/templates/sales-dashboard', label: 'Sales' },
  { href: '/templates/pl-report',       label: 'P&L' },
  { href: '/templates/cash-flow',       label: 'Cash Flow' },
  { href: '/templates/inventory',       label: 'Inventory' },
];

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-brand-border bg-brand-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-brand-cyan text-lg">
            <ChartBar size={24} weight="duotone" />
            Manager.io Dashboards
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-lg text-sm text-brand-muted hover:text-brand-text hover:bg-brand-card transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <a
            href="https://inspiron.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded-full border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
          >
            INSPIRON TECH
          </a>
        </div>
      </div>
    </nav>
  );
}
