import Link from "next/link";
import Image from "next/image";
import { Clock, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ServicesPreview() {
  const { services, brand } = siteConfig;

  const featured = services.filter((service) => service.featured).slice(0, 4);
  const display = featured.length > 0 ? featured : services.slice(0, 4);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-primary">
            Ne Sunuyoruz?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
            Öne Çıkan Hizmetlerimiz
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Uzman ekibimiz ve son teknoloji cihazlarımızla en iyi sonuçları
            sağlıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {display.map((service) => (
            <div
              key={service.id}
              className="group bg-surface rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 border border-secondary"
            >
              {/* Service Image */}
              <div className="relative h-52 overflow-hidden">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                  {service.name}
                </h3>

                <p className="text-secondary text-sm mb-4 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center justify-end text-sm">
                  {service.duration && (
                    <span className="flex items-center gap-1 text-muted">
                      <Clock className="h-3.5 w-3.5" />
                      {service.duration}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
          >
            Tüm Hizmetleri Görüntüle
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
