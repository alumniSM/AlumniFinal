import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    {
      name: "Pages",
      href: "#",
      dropdown: [
        { name: "About Us", href: "#" },
        { name: "Team", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
    { name: "Events", href: "#" },
    { name: "Directory", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-alumni-blue">
            ZAI<span className="text-alumni-orange">ALUMNI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <a
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-alumni-blue transition-colors flex items-center"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={16} className="ml-1" />}
                </a>
                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <ul>
                      {link.dropdown.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-alumni-lightgray hover:text-alumni-blue"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Button className="btn-primary">Join Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="px-4 pt-2 pb-4">
            {navLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a
                  href={link.href}
                  className="block py-2 px-4 font-medium text-gray-700 hover:text-alumni-blue border-b border-gray-100"
                >
                  {link.name}
                </a>
                {link.dropdown && (
                  <ul className="pl-4">
                    {link.dropdown.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-alumni-blue"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="mt-4 px-4">
              <Button className="btn-primary w-full">Join Now</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
