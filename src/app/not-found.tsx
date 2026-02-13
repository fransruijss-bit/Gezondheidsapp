import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Page not found
      </h1>
      <p className="text-gray-600 mb-8">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
