'use client';

export default function RedoFocusCheckButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('focus-check:redo'))}
      className="text-gray-500 hover:text-gray-900 transition-colors"
    >
      Retake Focus Check
    </button>
  );
}
