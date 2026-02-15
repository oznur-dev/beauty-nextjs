import { Metadata } from "next";
import { Sparkles, Target, Users, Shield, Diamond } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Hakkımızda",
  description: `${siteConfig.brand.name} olarak Kadıköy'de profesyonel güzellik hizmetleri sunuyoruz. Deneyimli ekibimiz ve modern yaklaşımımızla güzelliğinizi keşfedin.`,
  keywords: [
    "hakkımızda",
    "beautyliva",
    "kadıköy güzellik merkezi",
    "profesyonel güzellik",
  ],
  canonical: "/about",
});

export default function AboutPage() {
  const { brand } = siteConfig;

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6">
            Hakkımızda
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Kadıköy'ün kalbinde yer alan {brand.name}, modern teknikler ve
            deneyimli ekibimizle her müşterimize özel güzellik deneyimi sunuyor.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center bg-surface rounded-xl p-8">
            <div className="text-3xl font-heading font-bold text-theme-primary mb-2">
              5+
            </div>
            <div className="text-secondary">Yıllık Deneyim</div>
          </div>
          <div className="text-center bg-surface rounded-xl p-8">
            <div className="text-3xl font-heading font-bold text-theme-primary mb-2">
              2000+
            </div>
            <div className="text-secondary">Mutlu Müşteri</div>
          </div>
          <div className="text-center bg-surface rounded-xl p-8">
            <div className="text-3xl font-heading font-bold text-theme-primary mb-2">
              15+
            </div>
            <div className="text-secondary">Özel Hizmet</div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-theme-primary mb-4">
                Misyonumuz
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-secondary leading-relaxed">
                Her müşterimizin kendini özel hissetmesi için kişiye özel
                güzellik çözümleri sunuyoruz. Kaliteli ürünler, hijyenik ortam
                ve uzman ekibimizle Kadıköy'de güzellik standardını belirliyor,
                doğal güzelliğinizi ön plana çıkarıyoruz.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 text-center">
              <Sparkles className="h-12 w-12 text-theme-primary mb-4 mx-auto" />
              <div className="text-theme-primary font-medium">
                Güzelliğinizi Keşfedin
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-12 text-center">
              <Target className="h-12 w-12 text-theme-primary mb-4 mx-auto" />
              <div className="text-theme-primary font-medium">
                Kalite ve Güven
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-theme-primary mb-4">
                Vizyonumuz
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-secondary leading-relaxed">
                İstanbul'un en güvenilir güzellik merkezi olmak. Sürekli gelişen
                teknolojiler ve yenilikçi yaklaşımlarla sektöre öncülük etmek.
                Müşteri memnuniyetini her zaman ön planda tutarak uzun vadeli
                güven ilişkileri kuruyoruz.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-surface rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-theme-primary mb-4">
                Neden Beautyliva?
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-primary mb-2">
                  Uzman Ekip
                </h3>
                <p className="text-secondary text-sm">
                  Sertifikalı ve deneyimli güzellik uzmanlarımız
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-primary mb-2">
                  Hijyen Standartları
                </h3>
                <p className="text-secondary text-sm">
                  En yüksek hijyen ve güvenlik önlemleri
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Diamond className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-primary mb-2">
                  Premium Ürünler
                </h3>
                <p className="text-secondary text-sm">
                  Kaliteli ve güvenilir marka ürünleri
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
