'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Blank } from '@/data/icons/theme-icons';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <button
        aria-label='Theme switcher'
        className='p-2 transition-all duration-300 ease-in-out focus:outline-none'
      >
        <Blank className='h-5 w-5 text-gray-900' />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
      className='p-2 transition-all duration-300 ease-in-out focus:outline-none'
    >
      {resolvedTheme === 'dark' ? (
        <Moon className='h-5 w-5 text-gray-200 transition-all duration-300 ease-in-out hover:text-red-400' />
      ) : (
        <Sun className='h-5 w-5 text-gray-900 transition-all duration-300 ease-in-out hover:text-red-400' />
      )}
    </button>
  );
};

export default ThemeToggle;
