# Component Hierarchy

```
App
│
└── RootLayout (app/layout.tsx)
    │
    ├── CartProvider (context/CartContext.tsx)
    │   │
    │   ├── Header (components/layout/Header.tsx)
    │   │   ├── Logo Link
    │   │   ├── Navigation Menu
    │   │   │   ├── Necklaces Link
    │   │   │   ├── Bracelets Link
    │   │   │   └── Shop All Link
    │   │   └── Action Icons
    │   │       ├── Search Button
    │   │       ├── Cart Link (with count)
    │   │       └── Mobile Menu Toggle
    │   │
    │   ├── Main Content Area
    │   │   │
    │   │   ├── HomePage (app/page.tsx)
    │   │   │   ├── Hero Section
    │   │   │   ├── Featured Collections Grid
    │   │   │   │   ├── Necklaces Category Link
    │   │   │   │   └── Bracelets Category Link
    │   │   │   ├── Featured Products Section
    │   │   │   │   └── ProductGrid
    │   │   │   │       └── ProductCard (x6 featured)
    │   │   │   └── About Section
    │   │   │
    │   │   ├── CollectionPages
    │   │   │   ├── All Products (app/collections/all/page.tsx)
    │   │   │   │   └── ProductGrid
    │   │   │   │       └── ProductCard (x12 products)
    │   │   │   │
    │   │   │   ├── Necklaces (app/collections/necklaces/page.tsx)
    │   │   │   │   └── ProductGrid
    │   │   │   │       └── ProductCard (x6 necklaces)
    │   │   │   │
    │   │   │   └── Bracelets (app/collections/bracelets/page.tsx)
    │   │   │       └── ProductGrid
    │   │   │           └── ProductCard (x6 bracelets)
    │   │   │
    │   │   ├── ProductDetailPage (app/products/[id]/page.tsx)
    │   │   │   ├── Product Image
    │   │   │   ├── Product Info
    │   │   │   ├── Materials List
    │   │   │   ├── Color Options
    │   │   │   ├── Quantity Selector
    │   │   │   └── Add to Cart Button
    │   │   │
    │   │   └── CartPage (app/cart/page.tsx)
    │   │       ├── Cart Items List
    │   │       │   └── CartItem (foreach item)
    │   │       │       ├── Product Image Link
    │   │       │       ├── Product Info
    │   │       │       ├── Quantity Controls
    │   │       │       └── Remove Button
    │   │       └── Order Summary Sidebar
    │   │           ├── Subtotal
    │   │           ├── Shipping Info
    │   │           ├── Total
    │   │           └── Checkout Button
    │   │
    │   └── Footer (components/layout/Footer.tsx)
    │       ├── About Section
    │       ├── Shop Links
    │       ├── Customer Care Links
    │       ├── Newsletter Form
    │       └── Copyright & Legal Links
    │
    └── (Context Providers)
        └── CartContext
            ├── cart (state)
            ├── addToCart (method)
            ├── removeFromCart (method)
            ├── updateQuantity (method)
            ├── clearCart (method)
            └── itemCount (computed)
```

## Data Flow

```
User Action
    │
    ├─── Navigate to page ─────────> Next.js Router
    │                                      │
    │                                      ├─── Load Page Component
    │                                      │         │
    │                                      │         └─── Fetch Data from lib/data/products.ts
    │                                      │                   │
    │                                      │                   └─── Return typed Product[]
    │                                      │
    │                                      └─── Render with Components
    │                                               │
    │                                               └─── Pass data as props
    │
    ├─── Add to Cart ─────────────> useCart() hook
    │                                      │
    │                                      ├─── Update CartContext state
    │                                      │         │
    │                                      │         └─── Calculate new total
    │                                      │
    │                                      └─── Save to localStorage
    │                                               │
    │                                               └─── Re-render cart badge
    │
    └─── View Cart ───────────────> CartPage
                                          │
                                          ├─── Access cart from useCart()
                                          │         │
                                          │         └─── Display items with controls
                                          │
                                          └─── User can modify quantities
                                                    │
                                                    └─── Updates flow back to CartContext
```

## State Management Flow

```
Application Start
    │
    └─── RootLayout mounts
            │
            └─── CartProvider initializes
                    │
                    ├─── Load cart from localStorage (if exists)
                    │         │
                    │         └─── Set initial state
                    │
                    └─── Provide cart context to children
                            │
                            ├─── Any component can useCart()
                            │         │
                            │         ├─── addToCart(product, quantity)
                            │         ├─── removeFromCart(productId)
                            │         ├─── updateQuantity(productId, qty)
                            │         ├─── clearCart()
                            │         └─── Access cart.items, cart.total
                            │
                            └─── Changes saved to localStorage automatically
```

## Routing Structure

```
/ (Home)
    │
    ├── /collections
    │   ├── /all              → All products page
    │   ├── /necklaces        → Necklaces category
    │   └── /bracelets        → Bracelets category
    │
    ├── /products
    │   └── /[id]             → Dynamic product detail
    │       ├── /necklace-001
    │       ├── /necklace-002
    │       ├── /bracelet-001
    │       └── ... (all product IDs)
    │
    ├── /cart                 → Shopping cart
    │
    └── /[future pages]
        ├── /about
        ├── /contact
        ├── /shipping
        └── /returns
```
