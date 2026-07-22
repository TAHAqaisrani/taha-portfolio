import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <header className="fade-in-up sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 text-slate-900 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/70 dark:bg-slate-950/75 dark:text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="float-gentle flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 font-black text-slate-950 shadow-lg shadow-amber-400/25">
            MT
          </div>
          <div>
            <div className="display-font text-lg font-bold tracking-wide text-slate-950 dark:text-white">Muhammad Taha Khan</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Computer Science Undergraduate | Web Developer</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <nav className="flex flex-wrap gap-2 text-sm font-semibold">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/skills", "Skills"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  [
                    "rounded-full px-4 py-2 transition duration-200",
                    isActive
                      ? "bg-slate-950 text-white shadow-lg shadow-slate-950/15 dark:bg-white dark:text-slate-950 dark:shadow-white/10"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Theme Toggle Switch */}
          <button
            onClick={toggleTheme}
            className="relative inline-flex h-9 w-16 items-center rounded-full bg-slate-200 p-1 transition-colors duration-300 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
            aria-label="Toggle Theme"
          >
            <span className="sr-only">Toggle theme</span>
            <span
              className={`${
                theme === "dark" ? "translate-x-7 bg-slate-950" : "translate-x-0 bg-white"
              } flex h-7 w-7 items-center justify-center rounded-full shadow-md transition-transform duration-300`}
            >
              {theme === "dark" ? (
                <FiMoon size={14} className="text-amber-400" />
              ) : (
                <FiSun size={14} className="text-amber-500" />
              )}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
