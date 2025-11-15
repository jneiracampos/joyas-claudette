# Joyas Claudette - Jewelry E-commerce

A modern, elegant e-commerce website for handcrafted jewelry built with Next.js 16, TypeScript, and Tailwind CSS.

## 🎨 Design Inspiration

The design is inspired by [Chan Luu](https://chanluu.com/), featuring:
- Clean, minimalist aesthetic
- Elegant typography with Playfair Display and Inter fonts
- Responsive grid layouts
- Subtle hover effects and transitions
- Focus on product imagery and craftsmanship

## 🏗️ Project Structure

```
joyas-claudette/
├── app/                          # Next.js App Router pages
│   ├── collections/              # Product collection pages
│   │   ├── all/                  # All products
│   │   ├── necklaces/            # Necklaces category
│   │   └── bracelets/            # Bracelets category
│   ├── products/[id]/            # Dynamic product detail pages
│   ├── layout.tsx                # Root layout with Header/Footer
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx            # Navigation header with WhatsApp link
│   │   └── Footer.tsx            # Site footer
│   └── products/                 # Product-related components
│       ├── ProductCard.tsx       # Product card with WhatsApp button
│       └── ProductGrid.tsx       # Product grid layout
├── lib/
│   └── data/
│       └── products.ts           # Product data and utilities
├── types/
│   └── index.ts                  # TypeScript type definitions
└── public/                       # Static assets (images, etc.)
```

## 🔑 Key Features

### Architecture & Best Practices

1. **Component Organization**
   - Separation of concerns with layout, product, and page components
   - Reusable, composable components following single responsibility principle
   - Proper TypeScript typing throughout

2. **WhatsApp Integration**
   - Direct contact via WhatsApp for product inquiries
   - Pre-filled messages with product information
   - Easy customer communication flow

3. **Data Layer**
   - Centralized product data management in `lib/data`
   - Utility functions for filtering and querying products
   - Type-safe product interfaces

4. **Routing**
   - Next.js App Router for modern routing
   - Dynamic routes for product details (`/products/[id]`)
   - Collection pages for category filtering

5. **Styling**
   - Tailwind CSS for utility-first styling
   - Consistent design system with spacing, colors, and typography
   - Responsive design with mobile-first approach
   - Custom CSS properties for theme consistency

### Product Features

- **Home Page**: Hero section, featured collections, product highlights
- **Category Pages**: Browse necklaces and bracelets separately
- **Product Details**: Full product information with WhatsApp contact
- **WhatsApp Contact**: Direct messaging with pre-filled product information (+57 3112150040)
- **Stock Management**: Out of stock indicators
- **Material & Color Information**: Detailed product specifications

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📝 Data Management

Currently, all product data lives in the frontend (`lib/data/products.ts`). To add or modify products:

1. Edit the `products` array in `lib/data/products.ts`
2. Follow the `Product` interface defined in `types/index.ts`
3. Add product images to the `public` folder

### Future Backend Integration

The current structure makes it easy to migrate to a backend:
- Replace static imports with API calls in data layer
- Add loading states to components
- Implement server-side rendering for SEO
- Add authentication for checkout

## 🎯 Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Fonts**: Playfair Display (serif), Inter (sans-serif)
- **Communication**: WhatsApp Business integration

## 🔮 Future Enhancements

- [ ] Product search functionality
- [ ] Filtering and sorting options
- [ ] Product image galleries
- [ ] Customer reviews
- [ ] Wishlist feature
- [ ] Instagram integration
- [ ] Payment gateway integration
- [ ] Order management system
- [ ] Email notifications
- [ ] Multi-language support (Spanish/English)

## 📄 License

This project is for educational purposes.
