import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  // mode: 'auto' | 'light' | 'dark'
  const [mode, setMode] = useState('auto');

  const computeIsDark = (modeValue) => {
    if (modeValue === 'light') return false;
    if (modeValue === 'dark') return true;
    // auto: decide based on local time (dark between 19:00-07:00)
    const hour = new Date().getHours();
    return hour >= 19 || hour < 7;
  };

  useEffect(() => {
    // Only run on client side
    const savedMode = localStorage.getItem('themeMode');
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialMode = savedMode || (savedTheme ? (savedTheme === 'dark' ? 'dark' : 'light') : 'auto');
    setMode(initialMode);

    const shouldBeDark = computeIsDark(initialMode) || (initialMode === 'auto' && !savedMode && prefersDark);
    setIsDark(shouldBeDark);

    setMounted(true);
    // set data-theme attribute for CSS hooks and toggle tailwind dark class
    document.documentElement.setAttribute('data-theme', initialMode);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem('themeMode', mode);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    // update data-theme attribute (use mode) and tailwind dark class
    document.documentElement.setAttribute('data-theme', mode);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark, mounted, mode]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setThemeMode = (newMode) => {
    setMode(newMode);
    const nextIsDark = computeIsDark(newMode);
    setIsDark(nextIsDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, mode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
