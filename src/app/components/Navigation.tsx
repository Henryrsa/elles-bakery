"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <span className="font-display text-2xl md:text-3xl font-bold text-primary-dark tracking-wide">
              Elle&apos;s <span className="text-accent-gold">Bakery</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-sm tracking-wide transition-colors duration-300 hover:text-primary-dark ${
                  pathname === link.href
                    ? "text-primary-dark border-b-2 border-accent-gold"
                    : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-transform ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-base font-medium transition-colors ${
                pathname === link.href
                  ? "text-primary-dark bg-secondary"
                  : "text-gray-600 hover:bg-secondary/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
