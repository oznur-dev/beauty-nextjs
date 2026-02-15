import { Metadata } from "next";
import Hero from "@/components/sections/hero";
import ServicesPreview from "@/components/sections/services-preview";
import { generateMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generateMetadata({
  description: `${siteConfig.brand.description} Offering professional ${siteConfig.services
    .filter((s) => s.featured)
    .slice(0, 3)
    .map((s) => s.name.toLowerCase())
    .join(
      ", ",
    )} and more beauty services in ${siteConfig.brand.contact.address.city}.`,
  keywords: [
    "beauty salon",
    siteConfig.brand.contact.address.city.toLowerCase(),
    ...siteConfig.services
      .filter((s) => s.featured)
      .map((s) => s.name.toLowerCase()),
  ],
  canonical: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
    </>
  );
}
