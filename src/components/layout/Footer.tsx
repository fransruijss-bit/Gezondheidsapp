import Link from 'next/link';
import RedoFocusCheckButton from '@/components/focus/RedoFocusCheckButton';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">The Healthy Nerd</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Science-backed health knowledge made practical in three layers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-sm">Domains</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/slaap" className="text-gray-500 hover:text-slaap transition-colors">
                  🌙 Sleep
                </Link>
              </li>
              <li>
                <Link href="/voeding" className="text-gray-500 hover:text-voeding transition-colors">
                  🥦 Nutrition
                </Link>
              </li>
              <li>
                <Link href="/beweging" className="text-gray-500 hover:text-beweging transition-colors">
                  🏋️ Movement
                </Link>
              </li>
              <li>
                <Link href="/gezondheidsadvies" className="text-gray-500 hover:text-gray-900 transition-colors">
                  ✅ Best guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-sm">Info</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/over" className="text-gray-500 hover:text-gray-900 transition-colors">
                  About & Methodology
                </Link>
              </li>
              <li>
                <RedoFocusCheckButton />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-6 text-center text-xs text-gray-400">
          <p>
            This app does not provide medical advice. Always consult a physician for personal health questions.
          </p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} The Healthy Nerd
          </p>
        </div>
      </div>
    </footer>
  );
}
