import { Metadata } from "next";
import Image from "next/image";
import { Star, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Hizmetlerimiz",
  description: `${siteConfig.brand.name} olarak ${siteConfig.services
    .slice(0, 4)
    .map((s) => s.name.toLowerCase())
    .join(
      ", ",
    )} ve daha fazlası için randevu alın. ${siteConfig.brand.contact.address.city}'de profesyonel güzellik hizmetleri.`,
  keywords: siteConfig.services.map((s) => s.name.toLowerCase()),
  canonical: "/services",
});

export default function ServicesPage() {
  const { services } = siteConfig;

  const categories = [
    ...new Set(services.map((service) => service.category)),
  ].sort();
  const getServicesByCategory = (category: string) =>
    services.filter((service) => service.category === category);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Doğal güzelliklerinizi ortaya çıkarmak ve size lüks, rahatlık dolu
            bir deneyim sunmak için tasarlanmış kapsamlı profesyonel güzellik
            hizmetlerimizi keşfedin.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <div className="mb-8">
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-theme-primary mb-2">
                  {category}
                </h2>
                <div className="w-20 h-1 bg-primary"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getServicesByCategory(category).map((service) => (
                  <div
                    key={service.id}
                    className={`group bg-surface rounded-xl overflow-hidden border-2 hover:shadow-xl transition-all duration-300 ${
                      service.featured
                        ? "border-primary shadow-lg"
                        : "border-secondary hover:border-primary"
                    }`}
                  >
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      {service.featured && (
                        <div className="absolute top-3 left-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                          <Star className="h-3 w-3 mr-1" />
                          Öne Çıkan
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                        {service.name}
                      </h3>

                      <p className="text-secondary text-sm mb-6 leading-relaxed">
                        {service.description}
                      </p>

                    <div className="space-y-3">
                      {service.duration && (
                        <div className="flex justify-between items-center py-2 border-t border-secondary">
                          <span className="text-muted font-medium flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" /> Süre:
                          </span>
                          <span className="font-semibold text-secondary">
                            {service.duration}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="mt-6">
                      <a
                        href={`https://wa.me/${siteConfig.brand.contact.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(`Merhaba! ${service.name} hizmeti için randevu almak istiyorum. Uygun saatleriniz nelerdir?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-accent transition-colors text-center block"
                      >
                        Randevu Al
                      </a>
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-surface rounded-2xl p-12">
          <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
            Hizmetlerimizle İlgili Sorularınız?
          </h3>
          <p className="text-secondary mb-6 max-w-2xl mx-auto">
            Kişiselleştirilmiş öneriler ve randevu planlaması için bizimle
            iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.brand.contact.phone}`}
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Ara {siteConfig.brand.contact.phone}
            </a>

            <a
              href={`https://wa.me/${siteConfig.brand.contact.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(`Merhaba! ${siteConfig.brand.name} için randevu almak istiyorum. Uygun saatler hakkında bilgi alabilir miyim?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-theme-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
            >
              WhatsApp ile İletişim
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
