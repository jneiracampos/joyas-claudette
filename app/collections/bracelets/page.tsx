import CollectionPage from "@/components/products/CollectionPage";
import { getProductsByCategory } from "@/lib/data/products";

/**
 * Bracelets collection page
 */
export default function BraceletsPage() {
  return (
    <CollectionPage
      products={getProductsByCategory('bracelets')}
      titleKey="collections.bracelets.title"
      subtitleKey="collections.bracelets.subtitle"
    />
  );
}
