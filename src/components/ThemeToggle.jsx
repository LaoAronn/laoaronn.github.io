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
          ? "border-[rgba(117,178,240,0.18)] bg-[rgba(11,16,21,0.76)] text-[var(--text)] hover:bg-[rgba(16,24,32,0.9)]"
          : "border-[var(--border)] bg-[rgba(255,255,255,0.88)] text-[var(--text)] hover:bg-white"
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
