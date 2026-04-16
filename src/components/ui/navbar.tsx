"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-4 left-4 right-4 z-50 flex justify-center">
        <nav
          className={`
            w-full max-w-7xl rounded-full bg-brand px-6 py-2
            flex items-center justify-between
            transition-opacity duration-300
            hover:opacity-100
            ${scrolled ? "opacity-50" : "opacity-100"}
          `}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Bridge Gap Capital Limited"
              width={110}
              height={32}
              priority
            />
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.slice(0, 4).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white text-sm font-medium hover:text-brand-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-brand-button px-5 py-2 text-white font-medium hover:bg-brand-button/90 transition-colors"
          >
            Contact Us
          </Link>

          <button
            className="md:hidden text-white"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-4 left-4 right-4 bg-brand rounded-3xl p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-2">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Image
                  src="/images/logo.svg"
                  alt="Bridge Gap Capital Limited"
                  width={110}
                  height={32}
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="text-white"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <ul className="border-t border-white/20">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-white/20">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-white text-lg font-medium hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}