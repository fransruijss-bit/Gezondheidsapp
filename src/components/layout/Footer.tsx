import Link from 'next/link';
import RedoFocusCheckButton from '@/components/focus/RedoFocusCheckButton';

export default function Footer() {
  return (
    <footer className="mt-16 border-t" style={{ background: 'var(--surface)', borderColor: 'var(--border-subtle)' }}>
      <div className="app-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Gezondheidsapp</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
              Betrouwbare, klinisch heldere gezondheidskennis voor dagelijkse keuzes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm" style={{ color: 'var(--text-primary)' }}>Domeinen</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/slaap" className="nav-link">🌙 Slaap</Link></li>
              <li><Link href="/voeding" className="nav-link">🥦 Voeding</Link></li>
              <li><Link href="/beweging" className="nav-link">🏋️ Beweging</Link></li>
              <li><Link href="/gezondheidsadvies" className="nav-link">✅ Best advies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm" style={{ color: 'var(--text-primary)' }}>Info</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li><Link href="/over" className="nav-link">Over & Methodologie</Link></li>
              <li><RedoFocusCheckButton /></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-xs" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-tertiary)' }}>
          <p>Deze app biedt geen medisch advies. Raadpleeg altijd een arts voor persoonlijke gezondheidsvragen.</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} Gezondheidsapp</p>
        </div>
      </div>
    </footer>
  );
}
