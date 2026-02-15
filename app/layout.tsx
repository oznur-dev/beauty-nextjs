import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import LocalBusinessSchema from "@/components/seo/local-business-schema";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import { generateMetadata } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...generateMetadata(),
  metadataBase: new URL(siteConfig.seo.siteUrl),
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = siteConfig.theme;

  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-body antialiased`}
        style={
          {
            "--color-primary": theme.colors.primary,
            "--color-secondary": theme.colors.secondary,
            "--color-accent": theme.colors.accent,
            "--color-background": theme.colors.background,
            "--color-surface": theme.colors.surface,
            "--color-text-primary": theme.colors.text.primary,
            "--color-text-secondary": theme.colors.text.secondary,
            "--color-text-muted": theme.colors.text.muted,
            "--font-heading": theme.fonts.heading,
            "--font-body": theme.fonts.body,
          } as React.CSSProperties
        }
      >
        <LocalBusinessSchema />
        <div className="min-h-screen bg-background text-text-primary">
          <div className="flex flex-col min-h-screen">
            {/* Header/Navbar */}
            <header className="sticky top-0 z-50">
              <Navbar />
            </header>

            {/* Main content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <Footer />
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
