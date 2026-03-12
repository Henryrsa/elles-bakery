# Elle's Bakery Website

A modern, responsive bakery website built with Next.js and Tailwind CSS. The site features a soft and romantic design aesthetic perfect for showcasing artisan cakes, scones, and biscuits.

![Elle's Bakery](https://elles-bakery.vercel.app)

## 🌐 Live Website

**URL:** https://elles-bakery.vercel.app

## 📋 Features

- **Home Page** - Beautiful hero section with featured image, introduction, and specialties
- **Menu Page** - Complete pricing for cakes, scones, and biscuits
- **Gallery Page** - Photo showcase of cake creations
- **About Page** - Brand story and values
- **Contact Page** - Contact form with WhatsApp integration for orders
- **Mobile Responsive** - Looks great on all devices
- **WhatsApp Integration** - Customers can directly message via WhatsApp

## 💻 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Playfair Display (headings), Lato (body)
- **Deployment:** Vercel
- **Hosting:** GitHub + Vercel CI/CD

## 🎨 Design Theme

**Soft & Romantic**
- Primary Color: Dusty Pink (#D4A5A5)
- Secondary: Cream (#FFF9F0)
- Accent: Gold (#D4AF37)
- Typography: Elegant serif headings with clean sans-serif body

## 📁 Project Structure

```
elles-bakery/
├── public/
│   └── Assets/
│       └── Cakes/          # Cake images (1-8)
├── src/
│   └── app/
│       ├── components/
│       │   ├── Navigation.tsx
│       │   └── Footer.tsx
│       ├── about/
│       │   └── page.tsx
│       ├── contact/
│       │   └── page.tsx
│       ├── gallery/
│       │   └── page.tsx
│       ├── menu/
│       │   └── page.tsx
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/henryrsa/elles-bakery.git

# Navigate to project
cd elles-bakery

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Deploy

The site is automatically deployed to Vercel when changes are pushed to GitHub.

## 📞 Contact Information

- **Address:** 32 Pygmy Goose Street, Danville, Elandspoort, Pretoria, 0183
- **Phone:** +27 76 810 9168
- **WhatsApp:** +27 76 810 9168

## 💰 Current Pricing

### Cakes
- Custom Celebration Cake: From R300
- Wedding Cake: Custom Quote
- Cupcake Tower: From R250

### Scones
- 5L Box: R200
- 10L Box: R300
- 20L Box: R500

### Biscuits
- Selection Box: R300
- Large Box: R500
- Premium Gift Set: R800

*Note: Prices may vary based on customization. Contact for exact quotes.*

## 🔄 Updating the Website

### Adding New Cake Images
1. Add images to `public/Assets/Cakes/`
2. Update `src/app/gallery/page.tsx` to include new images
3. Commit and push changes

### Updating Prices
1. Edit `src/app/menu/page.tsx`
2. Update the pricing data
3. Commit and push changes

### Modifying Content
All content is in the respective page files in `src/app/[page]/`

## 📝 License

Private - All rights reserved

## 👤 Author

- **Developer:** OpenCode Assistant
- **Client:** Elle's Bakery, Pretoria, South Africa

---

*Built with ❤️ for Elle's Bakery*
