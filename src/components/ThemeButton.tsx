'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }
  return (
    <div className="items-center flex flex-col mb-5 w-full gap-3 mt-auto">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="rounded-xl p-2 transition-colors hover:bg-neutral-400 dark:hover:bg-neutral-300"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <SunIcon className="h-5 w-5 text-orange-300" />
        ) : (
          <MoonIcon className="h-5 w-5 text-slate-800" />
        )}
      </button>
    </div>
  );
}
