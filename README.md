# Beauty Salon Website Template

A clean, config-driven Next.js template for beauty salons that can be easily customized for any salon by editing just one file.

## Key Features

- **100% Config-Driven**: Change everything by editing `config/site.ts`
- **SEO Optimized**: Complete metadata, OpenGraph, LocalBusiness schema
- **WhatsApp Integration**: Floating button with direct booking
- **Responsive Design**: Mobile-first beauty salon theme
- **Zero Maintenance**: No complex state management or backend

## Quick Start

1. **Clone and install:**

   ```bash
   npm install
   npm run dev
   ```

2. **Customize your salon:**
   Edit `config/site.ts` with your salon's information:
   - Brand name, slogan, description
   - Contact info and WhatsApp number
   - Services with prices and descriptions
   - Business hours and location
   - Social media links
   - Theme colors

3. **That's it!** Your salon website is ready.

## Project Structure

```
beauty/
├── config/
│   └── site.ts              # ← Edit this file only
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── sections/            # Hero, Services preview
│   ├── seo/                 # LocalBusiness schema
│   └── ui/                  # WhatsApp button
├── app/
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page
│   ├── services/page.tsx    # Services page
│   ├── contact/page.tsx     # Contact page
│   └── layout.tsx           # Global layout
└── lib/
    └── seo.ts               # SEO utilities
```

## Customization

### Change Brand & Content

Edit `config/site.ts`:

```typescript
export const siteConfig = {
  brand: {
    name: "Your Salon Name",
    slogan: "Your Slogan",
    // ... all other content
  },
};
```

### Customize Theme Colors

```typescript
theme: {
  colors: {
    primary: "#Your-Primary-Color",
    secondary: "#Your-Secondary-Color",
    // ... rest of colors
  }
}
```

### Add/Remove Services

```typescript
services: [
  {
    id: "service-id",
    name: "Service Name",
    description: "Description",
    price: "Starting at $99",
    category: "Category",
    featured: true, // Shows on homepage
  },
  // Add more services...
];
```

## Technical Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Server-Side Rendering**
- **No database required**

## Features

- Homepage with hero section
- Services page with categories
- WhatsApp floating button
- SEO optimization
- Mobile responsive
- Fast loading
- Easy reusability

## Reusability

To reuse for another salon:

1. Copy project
2. Edit `config/site.ts`
3. Deploy

No code changes needed.
