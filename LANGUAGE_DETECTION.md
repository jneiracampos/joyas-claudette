# Language Detection & Translation Feature

## Overview
The website now automatically detects the user's browser language and displays content in Spanish or English accordingly.

## How It Works

### **Automatic Detection**
When a user visits the site for the first time:
1. The browser's language is detected (`navigator.language`)
2. If the browser language starts with `'es'` (Spanish) → Spanish is used
3. Otherwise → English is used
4. The preference is saved in `localStorage` for future visits

### **Manual Toggle**
- A language toggle button appears in the header
- Shows "EN" when in Spanish mode (click to switch to English)
- Shows "ES" when in English mode (click to switch to Spanish)
- User's choice is remembered across sessions

## Implementation Details

### Files Created:
1. **`lib/translations.ts`** - All translations (English & Spanish)
2. **`context/LanguageContext.tsx`** - Language state management

### Files Modified:
- `app/layout.tsx` - Wrapped with LanguageProvider
- `components/layout/Header.tsx` - Added language toggle, translated nav
- `components/products/ProductCard.tsx` - Translated button text
- `app/page.tsx` - Translated all home page content
- `app/products/[id]/page.tsx` - Translated product page
- `app/collections/all/page.tsx` - Translated collection page
- `app/collections/necklaces/page.tsx` - Translated necklaces page
- `app/collections/bracelets/page.tsx` - Translated bracelets page

## Translation Keys

### Navigation
- `nav.necklaces` - "NECKLACES" / "COLLARES"
- `nav.bracelets` - "BRACELETS" / "PULSERAS"
- `nav.shopAll` - "SHOP ALL" / "VER TODO"
- `nav.contact` - "CONTACT" / "CONTACTAR"

### Product Pages
- `product.materials` - "MATERIALS" / "MATERIALES"
- `product.colors` - "COLORS" / "COLORES"
- `product.contact` - "CONTACT VIA WHATSAPP" / "CONTACTAR POR WHATSAPP"
- `product.inquire` - "INQUIRE" / "CONSULTAR"
- `product.outOfStock` - "OUT OF STOCK" / "AGOTADO"

### WhatsApp Messages
- `whatsapp.general` - General greeting message
- `whatsapp.product` - Product inquiry prefix

### Home Page
- `home.hero.title` - "Handcrafted Elegance" / "Elegancia Artesanal"
- `home.hero.subtitle` - Hero description
- `home.hero.cta` - "SHOP NOW" / "COMPRAR AHORA"
- `home.featured.title` - "FEATURED PIECES" / "PIEZAS DESTACADAS"
- And more...

## Usage in Components

```tsx
'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('some.translation.key')}</h1>
      <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>
        Toggle Language
      </button>
    </div>
  );
}
```

## Adding New Translations

To add new translation keys:

1. Open `lib/translations.ts`
2. Add the key to both `en` and `es` objects:

```typescript
export const translations = {
  en: {
    // ... existing keys
    'new.key': 'English text',
  },
  es: {
    // ... existing keys
    'new.key': 'Texto en español',
  },
};
```

3. Use in components:
```tsx
const { t } = useLanguage();
return <div>{t('new.key')}</div>;
```

## Browser Language Detection

The system detects these browser languages as Spanish:
- `es` (Spanish - generic)
- `es-ES` (Spanish - Spain)
- `es-MX` (Spanish - Mexico)
- `es-CO` (Spanish - Colombia)
- Any language code starting with `es-`

All other languages default to English.

## Testing

### Test Spanish Detection:
1. Open browser DevTools (F12)
2. Go to Console
3. Type: `navigator.language`
4. If it shows `es` or `es-*`, Spanish will be detected

### Test Language Toggle:
1. Click the "EN" or "ES" button in the header
2. Page should immediately switch languages
3. Refresh page - language preference should persist

### Test localStorage:
1. Open DevTools → Application → Local Storage
2. Look for key: `language`
3. Value will be either `"en"` or `"es"`

## Benefits

✅ **User-Friendly** - Automatic detection provides the right language immediately
✅ **Flexible** - Manual toggle allows users to override automatic detection
✅ **Persistent** - Language choice is saved across sessions
✅ **Clean Code** - Centralized translations make updates easy
✅ **Type-Safe** - TypeScript ensures translation keys are correct
✅ **SEO Ready** - Can be extended to use Next.js internationalization for SEO

## Future Enhancements

- [ ] Add more languages (Portuguese, French, etc.)
- [ ] Translate product names and descriptions
- [ ] Add language selector dropdown for multiple languages
- [ ] Implement Next.js i18n for SEO-friendly URLs (/en/, /es/)
- [ ] Add language meta tags for search engines
- [ ] Create admin interface to manage translations

---

**Note**: Currently only UI text is translated. Product names, descriptions, and materials remain in English as they're stored in the data layer. For full translation, consider adding multilingual product data.
