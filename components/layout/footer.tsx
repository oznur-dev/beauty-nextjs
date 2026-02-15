import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { brand } = siteConfig;

  return (
    <footer className="bg-surface border-t border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-heading text-lg font-semibold text-theme-primary mb-3">
              {brand.name}
            </h3>
            <p className="text-secondary text-sm mb-4 max-w-md">
              {brand.description}
            </p>
            <p className="text-muted text-xs italic">{brand.slogan}</p>
          </div>

          <div>
            <h4 className="font-medium text-primary mb-3">İletişim</h4>
            <div className="space-y-2 text-sm text-secondary">
              <div>
                <a
                  href={`tel:${brand.contact.phone}`}
                  className="hover:text-theme-primary transition-colors"
                >
                  {brand.contact.phone}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${brand.contact.email}`}
                  className="hover:text-theme-primary transition-colors"
                >
                  {brand.contact.email}
                </a>
              </div>
              <div className="text-muted">
                <div>{brand.contact.address.street}</div>
                <div>
                  {brand.contact.address.city}, {brand.contact.address.state}{" "}
                  {brand.contact.address.zipCode}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-primary mb-3">Çalışma Saatleri</h4>
            <div className="space-y-1 text-sm text-secondary">
              {Object.entries(brand.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between">
                  <span className="text-muted">{day}:</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {brand.social.instagram && (
                <a
                  href={brand.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-theme-primary transition-colors"
                >
                  Instagram
                </a>
              )}
              {brand.social.facebook && (
                <a
                  href={brand.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-theme-primary transition-colors"
                >
                  Facebook
                </a>
              )}
              {brand.social.tiktok && (
                <a
                  href={brand.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-theme-primary transition-colors"
                >
                  TikTok
                </a>
              )}
              {brand.social.youtube && (
                <a
                  href={brand.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-theme-primary transition-colors"
                >
                  YouTube
                </a>
              )}
            </div>

            <div className="text-xs text-muted">
              © {new Date().getFullYear()} {brand.name}. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
