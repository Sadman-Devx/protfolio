"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = saved === 'dark' || (!saved && systemDark);
      
      if (isDark) {
        document.documentElement.classList.add('dark');
        setDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        setDark(false);
      }
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window === 'undefined') return;
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDark(true);
    }
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 rounded-full bg-gray-200 dark:bg-gray-800 p-3 transition-all duration-300 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-110"
    >
      {dark ? (
        <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.364-13.364l-.707.707M4.343 19.657l-.707.707M21 12h-1M3 12H2m16.364 5.364l-.707-.707M6.343 6.343l-.707-.707" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
}

