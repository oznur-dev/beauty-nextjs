import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const { brand, seo } = siteConfig;

  return (
    <section className="relative bg-surface py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
            {brand.name}
          </h1>

          <p className="font-heading text-xl sm:text-2xl text-theme-primary mb-6 italic">
            {brand.slogan}
          </p>

          <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            {brand.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/services"
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent transition-colors shadow-lg"
            >
              Hizmetlerimizi İnceleyin
            </Link>

            <a
              href={`https://wa.me/${brand.contact.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(`Merhaba! ${brand.name} için randevu almak istiyorum. Hangi hizmetler için uygun saatleriniz var?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-theme-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Randevu Al
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-secondary mb-2">Bugün bizi arayın</p>
            <a
              href={`tel:${brand.contact.phone}`}
              className="text-2xl font-heading font-semibold text-theme-primary hover:text-accent transition-colors"
            >
              {brand.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
