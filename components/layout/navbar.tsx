"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const { brand } = siteConfig;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-secondary shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              {brand.logo ? (
                <img src={brand.logo} alt={brand.name} className="h-8 w-auto" />
              ) : (
                <span className="font-heading text-xl font-semibold text-theme-primary">
                  {brand.name}
                </span>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-primary font-medium hover:text-theme-primary transition-colors"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/services"
              className="text-primary font-medium hover:text-theme-primary transition-colors"
            >
              Hizmetler
            </Link>
            <Link
              href="/about"
              className="text-primary font-medium hover:text-theme-primary transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              href="/contact"
              className="text-primary font-medium hover:text-theme-primary transition-colors"
            >
              İletişim
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${brand.contact.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(`Merhaba! ${brand.name} için randevu almak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors"
            >
              Randevu Al
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-primary hover:text-theme-primary transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Phone number (hidden on small screens) */}
            <a
              href={`tel:${brand.contact.phone}`}
              className="hidden sm:flex items-center text-sm text-secondary hover:text-theme-primary transition-colors"
            >
              <Phone className="h-4 w-4 mr-1" />
              {brand.contact.phone}
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-surface border-t border-secondary">
              <Link
                href="/"
                className="block px-3 py-2 text-primary font-medium hover:text-theme-primary hover:bg-secondary/20 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-primary font-medium hover:text-theme-primary hover:bg-secondary/20 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetler
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-primary font-medium hover:text-theme-primary hover:bg-secondary/20 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-primary font-medium hover:text-theme-primary hover:bg-secondary/20 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>

              {/* Mobile phone link */}
              <a
                href={`tel:${brand.contact.phone}`}
                className="block px-3 py-2 text-secondary hover:text-theme-primary transition-colors"
              >
                <Phone className="h-4 w-4 inline mr-2" />
                {brand.contact.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
