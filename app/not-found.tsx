import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-8xl font-heading font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-secondary mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/services"
            className="block border-2 border-primary text-theme-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
          >
            Hizmetlerimizi İnceleyin
          </Link>
        </div>
      </div>
    </div>
  );
}
