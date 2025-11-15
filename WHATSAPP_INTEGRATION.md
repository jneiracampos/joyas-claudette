# WhatsApp Integration Guide

## Overview
The jewelry e-commerce site uses WhatsApp Business as the primary contact and sales channel. Instead of a traditional shopping cart, customers contact you directly via WhatsApp with pre-filled messages about products they're interested in.

## Contact Number
**WhatsApp Business**: +57 3112150040

## How It Works

### 1. Product Cards (Collection Pages)
Each product card displays:
- Product image (placeholder)
- Product name
- Price
- Color options
- **"CONSULTAR" button** → Opens WhatsApp with product info

### 2. Product Detail Pages
Full product information with:
- Large product image
- Complete description
- Materials list
- Color options
- **"CONTACTAR POR WHATSAPP" button** → Opens WhatsApp with product info

### 3. Header Navigation
- Permanent WhatsApp contact button in header
- Visible on desktop: Shows WhatsApp icon + "CONTACTAR" text
- Opens WhatsApp with general greeting message

## Message Templates

### From Product Card/Detail Page:
```
Hola! Estoy interesado/a en: [Product Name] - $[Price]
```

Example:
```
Hola! Estoy interesado/a en: Pearl Cascade Necklace - $295.00
```

### From Header Contact Button:
```
Hola! Me interesa conocer más sobre sus joyas
```

## WhatsApp URL Format
```javascript
https://wa.me/573112150040?text=[encoded_message]
```

## User Experience Flow

1. **Customer browses products** → Sees products on home page or collection pages
2. **Customer likes a product** → Clicks product card or views details
3. **Customer wants to buy** → Clicks "CONSULTAR" or "CONTACTAR POR WHATSAPP"
4. **WhatsApp opens** → Pre-filled message with product information
5. **Customer sends message** → You receive inquiry via WhatsApp
6. **You respond** → Handle the sale, answer questions, arrange payment/delivery

## Benefits of This Approach

### For First Iteration:
✅ **No payment gateway needed** - Avoid complex integration costs
✅ **Direct customer contact** - Build personal relationships
✅ **Flexible pricing** - Negotiate, offer discounts, bundle deals
✅ **Simple logistics** - Arrange delivery directly with customer
✅ **Lower development time** - Focus on showcasing products
✅ **Payment flexibility** - Accept various payment methods
✅ **Customer trust** - Direct human interaction

### For Colombian Market:
✅ **WhatsApp is widely used** - 99% of Colombians use WhatsApp
✅ **Familiar communication** - Customers prefer messaging
✅ **Easy for customers** - No registration or checkout process
✅ **Mobile-first** - Perfect for smartphone users

## Stock Management
- Out of stock products show "OUT OF STOCK" badge
- WhatsApp buttons are disabled for out-of-stock items
- Update stock status in `lib/data/products.ts`

## Customization Options

### Change WhatsApp Number
Edit in three files:
1. `components/layout/Header.tsx` (line with wa.me link)
2. `components/products/ProductCard.tsx` (handleWhatsAppContact function)
3. `app/products/[id]/page.tsx` (handleContactWhatsApp function)

### Change Message Text
Edit the message strings in:
- **Header**: Generic greeting in Header.tsx
- **Product pages**: Product-specific message in ProductCard.tsx and page.tsx

### Add Spanish/English Toggle
Future enhancement to switch message language based on user preference.

## Tips for Managing WhatsApp Inquiries

1. **Quick Response Time** - Reply within 1-2 hours during business hours
2. **Save Templates** - Use WhatsApp Business features for quick replies
3. **Product Availability** - Keep product data updated in the code
4. **Payment Instructions** - Have clear payment methods ready (bank transfer, etc.)
5. **Shipping Info** - Prepare shipping costs for different cities
6. **Professional Tone** - Maintain brand voice in all communications

## Future Enhancements

### Possible Additions:
- [ ] WhatsApp widget chat button (floating)
- [ ] Business hours indicator
- [ ] Automated greeting message
- [ ] FAQ section to reduce common questions
- [ ] Catalog button for full product list
- [ ] Instagram integration for more touchpoints

## Testing

### Test WhatsApp Integration:
1. Click any product's "CONSULTAR" button
2. Verify WhatsApp opens (web or app)
3. Check message is pre-filled correctly
4. Ensure your number (+57 3112150040) is correct
5. Test on mobile and desktop browsers

### Expected Behavior:
- ✅ Opens WhatsApp in new tab/window
- ✅ Message is pre-populated with product info
- ✅ Customer can edit message before sending
- ✅ Works on both mobile (app) and desktop (web)

## Analytics Considerations

To track which products generate most interest:
1. Ask customers where they saw the product
2. Use unique message variations per product category
3. Keep notes on which products get most inquiries
4. Consider adding UTM parameters to shared links

---

**Remember**: This WhatsApp-first approach is perfect for MVP and testing market interest before investing in complex e-commerce infrastructure!
