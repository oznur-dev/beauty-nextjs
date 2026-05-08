import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const { brand } = siteConfig;

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/photo-1487412947147-5cebf100ffc2.jpg"
          alt="Beautyliva güzellik merkezi"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Warm brand-color gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 pb-32 sm:py-24 sm:pb-24">
        <div className="max-w-2xl">
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-amber-300 mb-4">
            {brand.contact.address.city} · {brand.contact.address.state}
          </span>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {brand.name}
          </h1>

          <p className="font-heading text-xl sm:text-2xl text-amber-200 mb-6 italic">
            {brand.slogan}
          </p>

          <p className="text-lg text-gray-200 max-w-xl mb-12 leading-relaxed">
            {brand.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent transition-colors shadow-xl text-center"
            >
              Hizmetlerimizi İnceleyin
            </Link>

            <a
              href={`https://wa.me/${brand.contact.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(`Merhaba! ${brand.name} için randevu almak istiyorum. Hangi hizmetler için uygun saatleriniz var?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors text-center"
            >
              Randevu Al
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="w-12 h-px bg-amber-300" />
            <a
              href={`tel:${brand.contact.phone}`}
              className="text-lg font-heading font-semibold text-white hover:text-amber-300 transition-colors"
            >
              {brand.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom feature bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4 text-sm sm:text-base text-white font-medium">
            <span className="flex items-center gap-1.5">✦ Uzman Ekip</span>
            <span className="flex items-center gap-1.5">✦ Modern Teknoloji</span>
            <span className="flex items-center gap-1.5">✦ Kişiye Özel Bakım</span>
            <span className="flex items-center gap-1.5">✦ Hijyenik Ortam</span>
          </div>
        </div>
      </div>
    </section>
  );
}
