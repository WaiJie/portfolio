import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system'; // Default to 'system'
    }
    return 'system'; // Default for server-side rendering or initial load
  });

  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('dark'); // Will be updated in useEffect

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const getSystemTheme = (): 'light' | 'dark' => {
      return mediaQuery.matches ? 'dark' : 'light';
    };

    const applyTheme = (selectedTheme: Theme) => {
      let resolvedTheme: 'light' | 'dark';

      if (selectedTheme === 'system') {
        resolvedTheme = getSystemTheme();
      } else {
        resolvedTheme = selectedTheme;
      }
      
      setActualTheme(resolvedTheme); // Update actualTheme state
      root.classList.remove('light', 'dark');
      root.classList.add(resolvedTheme);
      localStorage.setItem('theme', selectedTheme); // Store the user's preference (light, dark, or system)
    };

    // Apply theme initially
    applyTheme(theme);

    // Add listener for system theme changes if current theme is 'system'
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme('system'); // Re-apply 'system' to re-evaluate based on new system preference
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Cleanup listener
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]); // Depend on 'theme' state to re-run effect when user changes theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
