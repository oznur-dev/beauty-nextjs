"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const { brand } = siteConfig;

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
            <a
              href={`tel:${brand.contact.phone}`}
              className="hidden sm:flex items-center text-sm text-secondary hover:text-theme-primary transition-colors"
            >
              <Phone className="h-4 w-4 mr-1" />
              {brand.contact.phone}
            </a>

            <a
              href={`https://wa.me/${brand.contact.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(`Merhaba! ${brand.name} için randevu almak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors"
            >
              Randevu Al
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
