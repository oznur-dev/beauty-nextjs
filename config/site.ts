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
      id: "lazer-epilasyon",
      name: "Lazer Epilasyon",
      description: "Diod lazer teknolojisiyle kalıcı tüy azaltma işlemi.",
      price: "₺150'den başlayan fiyatlarla",
      duration: "30-90 dk",
      category: "Lazer",
      featured: true,
    },
    {
      id: "cilt-bakimi",
      name: "Medikal Cilt Bakımı",
      description: "Cilt tipinize özel profesyonel bakım uygulamaları.",
      price: "₺300",
      duration: "60 dk",
      category: "Cilt Bakımı",
      featured: true,
    },
    {
      id: "hydrafacial",
      name: "Hydrafacial",
      description: "Derin temizlik, peeling ve nemlendirme işlemi.",
      price: "₺450",
      duration: "45 dk",
      category: "Cilt Bakımı",
      featured: true,
    },
    {
      id: "kalici-makyaj",
      name: "Kalıcı Makyaj",
      description: "Kaş, göz ve dudak için kalıcı makyaj uygulaması.",
      price: "₺800'den başlayan fiyatlarla",
      duration: "2-3 saat",
      category: "Kalıcı Makyaj",
      featured: true,
    },
    {
      id: "kas-kirpik",
      name: "Kaş & Kirpik Tasarımı",
      description: "Kaş şekillendirme ve kirpik lifting hizmetleri.",
      price: "₺120",
      duration: "45 dk",
      category: "Kaş & Kirpik",
    },
    {
      id: "bolgesel-incelme",
      name: "Bölgesel İncelme",
      description: "Kavitasyon ve radyofrekans ile bölgesel zayıflama.",
      price: "₺200",
      duration: "60 dk",
      category: "Vücut Bakımı",
    },
    {
      id: "ipek-kirpik",
      name: "İpek Kirpik",
      description: "Doğal görünümlü kalıcı kirpik uzatma işlemi.",
      price: "₺250",
      duration: "90 dk",
      category: "Kaş & Kirpik",
    },
    {
      id: "g5-masaj",
      name: "G5 Masajı",
      description: "Selülit giderici ve sıkılaştırıcı masaj uygulaması.",
      price: "₺180",
      duration: "50 dk",
      category: "Vücut Bakımı",
    },
  ],
};
