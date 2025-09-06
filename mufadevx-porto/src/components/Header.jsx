import React from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  return (
    <header>
      <nav className="fixed top-4 left-1/2 w-[90%] transform -translate-x-1/2 flex items-center justify-between rounded-xl bg-black/70 px-8 py-3 backdrop-blur-md shadow-md z-50">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-gray-200">MUFA</span>
          <span className="text-cyan-400">DevX</span>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="transition hover:text-cyan-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
