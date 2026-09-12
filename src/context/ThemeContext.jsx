import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState('light');

  useEffect(() => {
    // Only run on client side
    const savedTheme = localStorage.getItem('theme');
    const initialMode = savedTheme === 'dark' ? 'dark' : 'light';
    setMode(initialMode);

    const shouldBeDark = initialMode === 'dark';
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

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, mode }}>
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
