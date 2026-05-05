import { siteConfig } from "@/config/site";

export default function LocalBusinessSchema() {
  const { brand, services } = siteConfig;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: brand.name,
    description: brand.description,
    slogan: brand.slogan,
    url: siteConfig.seo.siteUrl,
    logo: brand.logo || `${siteConfig.seo.siteUrl}/logo.png`,
    image: siteConfig.seo.ogImage || `${siteConfig.seo.siteUrl}/og-image.jpg`,

    address: {
      "@type": "PostalAddress",
      streetAddress: brand.contact.address.street,
      addressLocality: brand.contact.address.city,
      addressRegion: brand.contact.address.state,
      postalCode: brand.contact.address.zipCode,
      addressCountry: brand.contact.address.country,
    },
    telephone: brand.contact.phone,
    email: brand.contact.email,

    openingHours: Object.entries(brand.hours).map(([day, hours]) => {
      const dayMap: Record<string, string> = {
        Monday: "Mo",
        Tuesday: "Tu",
        Wednesday: "We",
        Thursday: "Th",
        Friday: "Fr",
        Saturday: "Sa",
        Sunday: "Su",
      };

      const timeRange = hours
        .replace(/\s/g, "")
        .replace(/AM|PM/gi, (match) => match.toLowerCase());

      return `${dayMap[day]} ${timeRange}`;
    }),

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Beauty Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          category: service.category,
          provider: {
            "@type": "BeautySalon",
            name: brand.name,
          },
        },

        availability: "InStock",
        validFrom: new Date().toISOString(),
      })),
    },

    // Social Media
    sameAs: [
      brand.social.instagram,
      brand.social.facebook,
      brand.social.tiktok,
      brand.social.youtube,
    ].filter(Boolean),

    // Additional Properties
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card",
    currenciesAccepted: "USD",
    areaServed: {
      "@type": "City",
      name: brand.contact.address.city,
    },

    // Aggregate Rating
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2),
      }}
    />
  );
}
