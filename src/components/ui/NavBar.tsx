'use client';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

const links = [
  { href: '/templates/sales-dashboard', label: 'Sales' },
  { href: '/templates/pl-report',       label: 'P&L' },
  { href: '/templates/cash-flow',       label: 'Cash Flow' },
  { href: '/templates/inventory',       label: 'Inventory' },
];

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 nav-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="haptic-button">
            <Logo size={28} />
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-lg text-sm text-brand-muted hover:text-white transition-colors haptic-button font-institutional"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <a
            href="https://inspiron.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded-full border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-black transition-colors font-institutional font-bold haptic-button"
          >
            INSPIRON TECH
          </a>
        </div>
      </div>
    </nav>
  );
}
