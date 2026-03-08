import React, { useState } from 'react';
import './Navbar.css';

const navItems = [
  { href: '#home', label: 'Home', icon: '⌂' },
  { href: '#about', label: 'About', icon: '◆' },
  { href: '#experience', label: 'Experience', icon: '▣' },
  { href: '#projects', label: 'Projects', icon: '◇' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <div className="logo-icon">NK</div>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
        </button>
      </div>

      <div
        className={`mobile-menu-backdrop ${menuOpen ? 'mobile-menu-backdrop--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <nav className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu-inner">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-menu-link"
              onClick={closeMenu}
            >
              <span className="mobile-menu-link-icon">{item.icon}</span>
              <span className="mobile-menu-link-label">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
