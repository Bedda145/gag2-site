import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "./assets/logo.png"; // Kept your .png extension as per your code

const navLinks = [
  { to: "/seeds", label: "Seeds" },
  { to: "/packs", label: "Packs" },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b-2 border-bark-700 bg-bark-950/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-leaf">
            <img src={logo} alt="GrowHub logo" className="h-12 w-12" />
            GrowHub
          </Link>
          <div className="flex gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2 font-bold transition-colors ${
                    isActive
                      ? "bg-bark-800 text-leaf"
                      : "text-cream/70 hover:bg-bark-900 hover:text-cream"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t-2 border-bark-700 py-6 text-center text-sm text-cream/40">
        GrowHub is a fan-made site. Not affiliated with the game's developers.
      </footer>
    </div>
  );
}
