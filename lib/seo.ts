import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  noindex = false,
}: SEOProps = {}): Metadata {
  const { seo, brand } = siteConfig;

  const pageTitle = title ? `${title} - ${brand.name}` : seo.title;
  const desc = description || seo.description;
  const allKeywords = [...seo.keywords, ...keywords];
  const url = canonical ? `${seo.siteUrl}${canonical}` : seo.siteUrl;

  return {
    title: pageTitle,
    description: desc,
    keywords: allKeywords,
    authors: [{ name: seo.author }],
    creator: seo.author,
    publisher: brand.name,
    robots: noindex ? "noindex,nofollow" : "index,follow",

    // Canonical URL
    alternates: {
      canonical: url,
    },

    // OpenGraph
    openGraph: {
      type: "website",
      locale: seo.locale,
      url: url,
      title: pageTitle,
      description: desc,
      siteName: brand.name,
      images: seo.ogImage
        ? [
            {
              url: seo.ogImage,
              width: 1200,
              height: 630,
              alt: pageTitle,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: desc,
      creator: `@${brand.name.replace(/\s+/g, "")}`,
      images: seo.ogImage ? [seo.ogImage] : [],
    },

    other: {
      "business:contact_data:street_address": brand.contact.address.street,
      "business:contact_data:locality": brand.contact.address.city,
      "business:contact_data:region": brand.contact.address.state,
      "business:contact_data:postal_code": brand.contact.address.zipCode,
      "business:contact_data:country_name": brand.contact.address.country,
      "business:contact_data:email": brand.contact.email,
      "business:contact_data:phone_number": brand.contact.phone,
    },
  };
}
