import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fade-in-up sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 text-slate-900 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="float-gentle flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 font-black text-slate-950 shadow-lg shadow-amber-400/25">
            MT
          </div>
          <div>
            <div className="display-font text-lg font-bold tracking-wide text-slate-950">Muhammad Taha Khan</div>
            <p className="text-sm text-slate-600">Computer Science Undergraduate | Web Developer</p>
          </div>
        </div>

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
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-950/15"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                ].join(" ")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>

  );
};

export default Header;
