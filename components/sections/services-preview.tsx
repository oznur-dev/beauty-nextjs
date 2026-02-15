import Link from "next/link";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ServicesPreview() {
  const { services, brand } = siteConfig;

  const featured = services.filter((service) => service.featured).slice(0, 4);
  const display = featured.length > 0 ? featured : services.slice(0, 4);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Profesyonel güzellik uygulamaları
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {display.map((service) => (
            <div
              key={service.id}
              className="bg-surface rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-secondary"
            >
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>

              <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                {service.name}
              </h3>

              <p className="text-secondary text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-1 text-sm">
                {service.price && (
                  <div className="font-medium text-theme-primary">
                    {service.price}
                  </div>
                )}
                {service.duration && (
                  <div className="text-muted">{service.duration}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
          >
            Tüm Hizmetleri Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
}
