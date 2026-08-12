import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const ThemeSelector = () => {
  const { mode, setThemeMode, isDark, toggleTheme } = useTheme();
  const [anim, setAnim] = useState(false);

  const btnBase = "w-9 h-9 grid place-items-center rounded-full transition-colors duration-200";
  const activeClass = "bg-zinc-200/10 dark:bg-zinc-700/60";

  const handleToggle = () => {
    // animate rotation
    setAnim(true);
    toggleTheme();
    setTimeout(() => setAnim(false), 300);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Auto button */}
      <button
        aria-label="Auto theme"
        title="Auto (based on time)"
        onClick={() => setThemeMode('auto')}
        className={`${btnBase} ${mode === 'auto' ? activeClass : 'hover:bg-zinc-100/5'}`}
      >
        <span className="material-symbols-outlined">routine</span>
      </button>

      {/* Single Light/Dark toggle button */}
      <button
        aria-label="Toggle light/dark"
        title={isDark ? 'Switch to light' : 'Switch to dark'}
        onClick={handleToggle}
        className={`${btnBase} ${mode === 'light' ? activeClass : ''} transform transition-transform duration-300 ${anim ? 'rotate-180' : ''}`}
      >
        {isDark ? (
          <span className="material-symbols-outlined">dark_mode</span>
        ) : (
          <span className="material-symbols-outlined">light_mode</span>
        )}
      </button>
    </div>
  );
};

export default ThemeSelector;
