"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Careers", href: "#careers" },
  { label: "Contract Vehicles", href: "#contracts" },
  { label: "News", href: "#news" },
  { label: "Contact Us", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "glass-dark border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex-shrink-0 text-2xl font-bold">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-silver to-blue-accent rounded-lg flex items-center justify-center text-navy-900 font-bold">
                A
              </div>
              <span className="hidden sm:inline text-silver">AFT</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-light hover:text-blue-accent transition-colors text-small"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-text-light hover:text-blue-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-900/95 z-30 lg:hidden pt-24"
          >
            <div className="flex flex-col items-center gap-8 p-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xl text-text-light hover:text-blue-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setIsOpen(false);
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
