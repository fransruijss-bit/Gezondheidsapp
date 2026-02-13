'use client';

import Link from 'next/link';
import { useState } from 'react';
import SearchBar from '@/components/search/SearchBar';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="font-bold text-lg text-gray-900 shrink-0">
            The Healthy <span className="text-slaap">Nerd</span>
          </Link>

          <div className="hidden md:block flex-1 max-w-md mx-6">
            <SearchBar />
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/slaap" className="text-gray-600 hover:text-slaap transition-colors">
              🌙 Sleep
            </Link>
            <Link href="/voeding" className="text-gray-600 hover:text-voeding transition-colors">
              🥦 Nutrition
            </Link>
            <Link href="/beweging" className="text-gray-600 hover:text-beweging transition-colors">
              🏋️ Movement
            </Link>
            <Link href="/gezondheidsadvies" className="text-gray-600 hover:text-gray-900 transition-colors">
              ✅ Best guide
            </Link>
            <Link href="/over" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-600"
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

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="pt-3 pb-2">
              <SearchBar />
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/slaap"
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-gray-700 hover:bg-slaap-light transition-colors"
              >
                🌙 Sleep
              </Link>
              <Link
                href="/voeding"
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-gray-700 hover:bg-voeding-light transition-colors"
              >
                🥦 Nutrition
              </Link>
              <Link
                href="/beweging"
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-gray-700 hover:bg-beweging-light transition-colors"
              >
                🏋️ Movement
              </Link>
              <Link
                href="/gezondheidsadvies"
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                ✅ Best guide
              </Link>
              <Link
                href="/over"
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                About this app
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
