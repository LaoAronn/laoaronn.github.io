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
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95
            ${
            isDark
                ? "border-zinc-700/60 bg-zinc-900/70 hover:bg-zinc-800/80"
                : "border-white/50 bg-white/70 text-zinc-700 hover:bg-white/90"
            }`}
        title={isDark ? "light mode" : "dark mode"}
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
