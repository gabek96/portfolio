import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work Experience' },
  { to: '/projects', label: 'Projects' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const basePath = import.meta.env.BASE_URL;

  return (
    <nav className="sticky top-0 z-50 bg-nav/90 backdrop-blur-md border-b border-border px-6 py-3">
      <div className="max-w-6xl mx-auto flex items-center relative">
        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Nav links — centered */}
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-nav md:bg-transparent gap-1 md:gap-2 p-4 md:p-0 items-center md:mx-auto`}
        >
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted hover:text-text hover:bg-surface'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={`${basePath}Gabriel_Kiveu_Resume.pdf`}
              download
              className="block px-4 py-2 rounded-full text-sm font-bold bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-200"
            >
              <i className="fas fa-download mr-1.5"></i>
              Resume
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}
