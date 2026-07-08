import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleToggle = (e) => {
    e.preventDefault();
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-br from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white shadow-lg transition-all duration-300 hover:scale-110 dark:from-sky-600 dark:to-sky-700"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label="Toggle theme"
      type="button"
    >
      {isDark ? (
        <span className="material-symbols-outlined text-2xl">dark_mode</span>
      ) : (
        <span className="material-symbols-outlined text-2xl">light_mode</span>
      )}
    </button>
  );
};

export default ThemeToggle;
