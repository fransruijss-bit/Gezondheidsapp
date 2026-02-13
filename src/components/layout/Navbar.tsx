'use client';

import Link from 'next/link';
import { useState } from 'react';
import SearchBar from '@/components/search/SearchBar';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b" style={{ background: 'color-mix(in srgb, var(--surface) 94%, transparent)', borderColor: 'var(--border-subtle)', backdropFilter: 'blur(8px)' }}>
      <div className="app-container">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="font-bold text-lg shrink-0" style={{ color: 'var(--text-primary)' }}>
            Gezondheids<span style={{ color: 'var(--primary)' }}>app</span>
          </Link>

          <div className="hidden md:block flex-1 max-w-md mx-4">
            <SearchBar />
          </div>

          <div className="hidden md:flex items-center gap-1 text-sm">
            <Link href="/slaap" className="nav-link">🌙 Slaap</Link>
            <Link href="/voeding" className="nav-link">🥦 Voeding</Link>
            <Link href="/beweging" className="nav-link">🏋️ Beweging</Link>
            <Link href="/gezondheidsadvies" className="nav-link">✅ Best advies</Link>
            <Link href="/over" className="nav-link">Over</Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="pt-3 pb-2">
              <SearchBar />
            </div>
            <div className="flex flex-col gap-2 pt-2">
              {[
                ['/slaap', '🌙 Slaap'],
                ['/voeding', '🥦 Voeding'],
                ['/beweging', '🏋️ Beweging'],
                ['/gezondheidsadvies', '✅ Best advies'],
                ['/over', 'Over deze app'],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
