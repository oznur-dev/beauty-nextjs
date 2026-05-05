export interface BrandConfig {
  name: string;
  slogan: string;
  description: string;
  logo?: string;
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
  };
  social: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    youtube?: string;
  };
  hours: {
    [key: string]: string;
  };
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      muted: string;
    };
  };
  fonts: {
    heading: string;
    body: string;
  };
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  locale: string;
  ogImage?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
  duration?: string;
  image?: string;
  category: string;
  featured?: boolean;
}

export interface SiteConfig {
  brand: BrandConfig;
  theme: ThemeConfig;
  seo: SEOConfig;
  services: Service[];
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "Beautyliva",
    slogan: "Güzelliğinizi Keşfedin",
    description:
      "Kadıköy'de modern teknikler ve deneyimli ekibimizle kişiye özel güzellik hizmetleri sunuyoruz.",
    contact: {
      phone: "+90 538 915 52 48",
      whatsapp: "+90 538 915 52 48",
      email: "info@beautyliva.com",
      address: {
        street: "Moda Caddesi No: 85/A",
        city: "Kadıköy",
        state: "İstanbul",
        zipCode: "34710",
        country: "Türkiye",
      },
    },
    social: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      tiktok: "https://tiktok.com/",
    },
    hours: {
      Pazartesi: "09:00 - 19:00",
      Salı: "09:00 - 19:00",
      Çarşamba: "09:00 - 19:00",
      Perşembe: "09:00 - 20:00",
      Cuma: "09:00 - 20:00",
      Cumartesi: "09:00 - 18:00",
      Pazar: "10:00 - 17:00",
    },
  },
  theme: {
    colors: {
      primary: "#D4A574",
      secondary: "#F5F5DC",
      accent: "#8B4513",
      background: "#FFFFFF",
      surface: "#FAFAFA",
      text: {
        primary: "#2C2C2C",
        secondary: "#666666",
        muted: "#999999",
      },
    },
    fonts: {
      heading: "Playfair Display, serif",
      body: "Inter, sans-serif",
    },
  },
  seo: {
    title: "Beautyliva - Kadıköy Güzellik Merkezi",
    description:
      "Kadıköy'de lazer epilasyon, cilt bakımı, hydrafacial ve kalıcı makyaj hizmetleri. Uzman ekibimizle randevu alın.",
    keywords: [
      "güzellik merkezi",
      "lazer epilasyon",
      "cilt bakımı",
      "hydrafacial",
      "kalıcı makyaj",
      "kadıköy güzellik salonu",
      "istanbul güzellik merkezi",
    ],
    author: "Beautyliva",
    siteUrl: "https://beautyliva.com",
    locale: "tr_TR",
  },
  services: [
    {
      id: "sac-boyama",
      name: "Saç Boyama",
      description:
        "Kişiye özel renk analizi ile tekli boyama, röfle, balayage ve ombre teknikleri.",
      duration: "90-150 dk",
      image:
        "/assets/images/pexels-photo-8468126.jpeg",

      category: "Saç Bakımı",
      featured: true,
    },
    {
      id: "keratin-bakimi",
      name: "Keratin Bakımı",
      description:
        "Yıpranmış saçları besleyen, frizleri azaltan ve parlaklık katan profesyonel keratin uygulaması.",
      duration: "60-90 dk",
      image:
       "/assets/images/pexels-photo-29189919.jpeg",
      category: "Saç Bakımı",
    },
    {
      id: "sac-kesimi-fon",
      name: "Saç Kesimi & Fön",
      description:
        "Yüz şeklinize ve saç tipinize özel kesim ile şekillendirme seansı.",
      duration: "45-60 dk",
      image:
        "/assets/images/pexels-photo-6502174.jpg",
      category: "Saç Bakımı",
    },
    {
      id: "yuz-bakimi",
      name: "Yüz Bakımı",
      description:
        "Cilt tipine özel derin temizlik, nemlendirme maskesi ve peeling içeren kapsamlı yüz bakımı.",
      duration: "60 dk",
      image:
        "/assets/images/pexels-photo-3985338.jpeg",
      category: "Cilt Bakımı",
      featured: true,
    },
    {
      id: "hydrafacial",
      name: "Hydrafacial",
      description:
        "Derin gözenek temizliği, peeling ve yoğun nemlendirmeyi tek seansta birleştiren ileri teknoloji cilt bakımı.",
      duration: "45 dk",
      image:
        "/assets/images/pexels-photo-18209809.jpeg",
      category: "Cilt Bakımı",
      featured: true,
    },
    {
      id: "lazer-epilasyon",
      name: "Lazer Epilasyon",
      description:
        "Diode lazer teknolojisiyle tüm vücut veya bölgesel kalıcı tüy azaltma seansları.",
      duration: "30-90 dk",
      image:
        "/assets/images/pexels-photo-3985354.jpeg",
      category: "Epilasyon",
      featured: true,
    },
    {
      id: "agda",
      name: "Ağda",
      description:
        "Bacak, koltuk altı, bikini ve üst dudak için sıcak/soğuk ağda uygulaması.",
      duration: "20-45 dk",
      image:
        "/assets/images/pexels-photo-35103884.jpeg",
      category: "Epilasyon",
    },
    {
      id: "kalici-makyaj",
      name: "Kalıcı Makyaj",
      description:
        "Microblading, kaş dövmesi ve eyeliner uygulamalarıyla uzun ömürlü doğal bir görünüm.",
      duration: "2-3 saat",
      image:
        "/assets/images/pexels-photo-8826403.jpeg",
      category: "Kaş & Kirpik",
      featured: true,
    },
    {
      id: "kas-tasarimi",
      name: "Kaş Tasarımı",
      description:
        "Yüz şeklinize özel kaş şekillendirme, renklendirme ve laminasyon hizmetleri.",
      duration: "30-45 dk",
      image:
        "/assets/images/pexels-photo-18809795.jpeg",
      category: "Kaş & Kirpik",
    },
    {
      id: "ipek-kirpik",
      name: "İpek Kirpik",
      description:
        "Tek tek veya hacim tekniğiyle uygulanan doğal görünümlü kalıcı kirpik uzatma.",
      duration: "90-120 dk",
      image:
        "/assets/images/pexels-photo-36930354.jpeg",
      category: "Kaş & Kirpik",
    },
    {
      id: "manikur-pedikur",
      name: "Manikür & Pedikür",
      description:
        "El ve ayak bakımı; tırnak şekillendirme, kutikül temizliği ve nemlendirici masaj içerir.",
      duration: "45-60 dk",
      image:
        "/assets/images/pexels-photo-6135675.jpeg",
      category: "Tırnak Bakımı",
    },
    {
      id: "kalici-oje",
      name: "Kalıcı Oje (Jel)",
      description:
        "UV/LED lambayla kürlenen, 2-3 hafta boyunca çatlama ve dökülme yapmayan uzun ömürlü oje uygulaması.",
      duration: "45 dk",
      image:
        "/assets/images/pexels-photo-3997392.jpeg",
      category: "Tırnak Bakımı",
    },
    {
      id: "gelin-makyaji",
      name: "Gelin & Özel Gün Makyajı",
      description:
        "Düğün, nişan ve özel etkinlikler için uzman makyaj sanatçısı tarafından yapılan kalıcı makyaj.",
      duration: "60-90 dk",
      image:
        "/assets/images/pexels-photo-35983904.jpeg",
      category: "Makyaj",
    },
  ],
};
