import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "İletişim",
  description: `${siteConfig.brand.name} ile iletişime geçin. Kadıköy'deki güzellik merkezimizden randevu almak ve sorularınız için bize ulaşın. Telefon: ${siteConfig.brand.contact.phone}`,
  keywords: [
    "iletişim",
    "randevu",
    "beautyliva kadıköy",
    "güzellik merkezi iletişim",
    "randevu al",
  ],
  canonical: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
