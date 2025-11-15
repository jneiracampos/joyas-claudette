# Project Structure Overview

## Directory Organization

### `/app` - Next.js App Router
The main application directory using Next.js 16's App Router pattern.

**Pages:**
- `page.tsx` - Home page with hero, featured products, and category highlights
- `layout.tsx` - Root layout wrapper with Header, Footer, and CartProvider
- `globals.css` - Global styles and Tailwind configuration

**Routes:**
- `/cart` - Shopping cart page
- `/collections/all` - All products page
- `/collections/necklaces` - Necklaces category page
- `/collections/bracelets` - Bracelets category page
- `/products/[id]` - Dynamic product detail pages

---

### `/components` - Reusable React Components

#### `/components/layout`
Layout-related components that structure the application.

- **Header.tsx**
  - Sticky navigation header
  - Mobile responsive menu
  - Logo, navigation links, search, and cart icons
  - Client component for interactive menu

- **Footer.tsx**
  - Site footer with company info
  - Navigation links organized by category
  - Newsletter signup form
  - Copyright and legal links

#### `/components/products`
Product display components for the e-commerce catalog.

- **ProductCard.tsx**
  - Individual product card for grid display
  - Shows product image, name, price
  - Color indicators and stock status
  - Hover effects for better UX

- **ProductGrid.tsx**
  - Responsive grid layout for products
  - Handles empty states
  - Adapts columns based on screen size (1-4 columns)

---

### `/context` - React Context Providers

- **CartContext.tsx**
  - Global shopping cart state management
  - Methods: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`
  - Persists cart data to localStorage
  - Calculates cart totals automatically
  - Provides `useCart` hook for components

---

### `/lib` - Utilities and Data

#### `/lib/data`
- **products.ts**
  - Centralized product data (12 sample products)
  - Utility functions for querying products:
    - `getFeaturedProducts()` - Get featured items
    - `getProductsByCategory()` - Filter by category
    - `getProductById()` - Find specific product
    - `getCategories()` - List all categories
  - Easy to replace with API calls in future

#### `/lib`
- **utils.ts**
  - Helper functions for formatting and manipulation:
    - `formatCurrency()` - Format numbers as USD
    - `slugify()` - Convert text to URL-friendly slugs
    - `capitalize()` - Title case conversion
    - `truncate()` - Shorten text with ellipsis
    - `getColorHex()` - Map color names to hex values

---

### `/types` - TypeScript Definitions

- **index.ts**
  - Core type definitions:
    - `Product` - Product data structure
    - `ProductCategory` - Category type ('necklaces' | 'bracelets')
    - `CartItem` - Cart item with product and quantity
    - `Cart` - Complete cart with items and total
    - `FilterOptions` - Product filtering options

---

### `/public` - Static Assets
- Place for images, fonts, and other static files
- Currently using placeholder images
- Future: Add product images, icons, logos

---

## Key Architectural Decisions

### 1. Component-Based Architecture
- **Atomic Design Principles**: Small, reusable components
- **Single Responsibility**: Each component has one clear purpose
- **Composition**: Complex UIs built from simple components

### 2. Type Safety
- **TypeScript Throughout**: All code uses strict typing
- **Interface-First Design**: Types defined before implementation
- **Type Safety**: Catch errors at compile time, not runtime

### 3. State Management
- **Context API**: Lightweight solution for cart state
- **Local Storage**: Persist cart across sessions
- **No External Dependencies**: Keep bundle size small

### 4. Data Layer Separation
- **Centralized Data**: All products in one file
- **Abstraction Layer**: Functions separate data from components
- **Easy Migration**: Simple to swap with API calls later

### 5. Styling Strategy
- **Tailwind CSS**: Utility-first approach
- **Responsive Design**: Mobile-first breakpoints
- **Consistent Design System**: Reusable spacing, colors, typography
- **Custom Fonts**: Playfair Display (serif) + Inter (sans-serif)

### 6. Routing
- **App Router**: Next.js 16's modern routing
- **File-Based**: Routes match file structure
- **Dynamic Routes**: Product pages use [id] parameter
- **Type-Safe Navigation**: Links use proper types

---

## Design Patterns Used

### 1. Provider Pattern
- `CartProvider` wraps entire app
- Provides cart state to all components
- Custom hook `useCart()` for easy access

### 2. Container/Presentational Pattern
- Pages fetch data (containers)
- Components display data (presentational)
- Clear separation of concerns

### 3. Composition Pattern
- Components compose smaller components
- `ProductGrid` uses `ProductCard`
- Layout uses `Header` and `Footer`

### 4. Custom Hook Pattern
- `useCart()` hook encapsulates cart logic
- Throws error if used outside provider
- Clean, reusable cart access

---

## Code Quality Features

### Documentation
- JSDoc comments on all major functions
- Type definitions for all interfaces
- Clear component descriptions

### Naming Conventions
- PascalCase for components
- camelCase for functions and variables
- SCREAMING_SNAKE_CASE for constants
- Descriptive, self-documenting names

### File Organization
- Grouped by feature (layout, products)
- One component per file
- Clear folder hierarchy

### Error Handling
- Type safety prevents many errors
- 404 handling for invalid product IDs
- Empty state handling in grids

---

## Future Scalability

### Easy to Add:
- New product categories (just add to type)
- More pages (add to /app directory)
- New components (add to /components)
- API integration (replace /lib/data functions)

### Ready for:
- Backend API (structured data layer)
- Database (type-safe models ready)
- Authentication (context pattern established)
- Testing (pure functions, clear components)
- SEO optimization (Next.js SSR ready)

---

## Best Practices Implemented

✅ TypeScript for type safety
✅ Component reusability
✅ Separation of concerns
✅ Mobile-first responsive design
✅ Semantic HTML
✅ Accessible navigation
✅ Clean code principles
✅ Consistent styling
✅ Performance optimization (Next.js features)
✅ Maintainable file structure
✅ Self-documenting code
✅ Clear naming conventions
