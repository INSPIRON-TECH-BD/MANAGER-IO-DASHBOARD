import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/ui/NavBar';

export const metadata: Metadata = {
  title: 'Manager.io Dashboard Templates | INSPIRON TECH',
  description:
    'Free open-source financial dashboard templates for Manager.io — built by INSPIRON TECH, Official Manager.io Partner Bangladesh.',
  keywords: ['Manager.io', 'dashboard', 'Bangladesh', 'ERP', 'INSPIRON TECH'],
  authors: [{ name: 'MD ABU HASAN', url: 'https://inspiron.tech' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-dark text-brand-text">
        <NavBar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="border-t border-brand-border mt-16 py-8 text-center text-brand-muted text-sm">
          Built by{' '}
          <a href="https://inspiron.tech" className="text-brand-cyan hover:underline">
            INSPIRON TECH
          </a>{' '}
          — Official Manager.io Partner, Bangladesh
        </footer>
      </body>
    </html>
  );
}
