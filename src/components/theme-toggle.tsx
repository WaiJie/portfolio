import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/theme-context';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center rounded-full p-1 bg-[var(--bg-soft)] border border-[var(--card-border)]">
      <Button
        variant={theme === 'light' ? 'secondary' : 'ghost'}
        size="icon"
        onClick={() => setTheme('light')}
        className="rounded-full focus:outline-none focus:ring-0 focus:ring-offset-0"
        aria-label="Switch to light theme"
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        variant={theme === 'dark' ? 'secondary' : 'ghost'}
        size="icon"
        onClick={() => setTheme('dark')}
        className="rounded-full focus:outline-none focus:ring-0 focus:ring-offset-0"
        aria-label="Switch to dark theme"
      >
        <Moon className="h-4 w-4" />
      </Button>
    </div>
  );
}
