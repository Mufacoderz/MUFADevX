import React, { useState } from "react";
import { Menu, X } from "lucide-react"; //pke npm lucide

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-4 left-1/2 w-[90%] transform -translate-x-1/2 flex items-center justify-between rounded-xl bg-black/70 px-8 py-3 backdrop-blur-md shadow-md z-50">

        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-gray-200">MUFA</span>
          <span className="text-cyan-400">DevX</span>
        </h1>

        <ul className="hidden sm:flex space-x-8 text-lg">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="transition text-white hover:text-cyan-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        
        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

     
      {isOpen && (
        <div className="sm:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] rounded-xl bg-black/90 backdrop-blur-md shadow-lg z-40">
          <ul className="flex flex-col items-center py-6 space-y-4 text-lg">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="transition text-white hover:text-cyan-400"
                  onClick={() => setIsOpen(false)} 
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
