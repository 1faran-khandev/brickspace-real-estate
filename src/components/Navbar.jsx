import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Properties', path: '/properties' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen(prev => !prev);

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm shadow-sm dark:bg-gray-900/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-white tracking-tight"
        >
          Brick<span className="text-neutral-800 dark:text-blue-400">Space</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `relative text-[16px] font-medium transition duration-200 ease-in-out group 
                 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300'}`
              }
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl text-gray-700 dark:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {isMobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-4 pb-6 space-y-4 transition-all duration-300">
          {NAV_ITEMS.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `block text-[17px] font-medium px-2 py-2 rounded transition 
                 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-300'}`
              }
              onClick={closeMobileMenu}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
