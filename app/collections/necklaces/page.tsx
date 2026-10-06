import CollectionPage from "@/components/products/CollectionPage";
import { getProductsByCategory } from "@/lib/data/products";

/**
 * Necklaces collection page
 */
export default function NecklacesPage() {
  return (
    <CollectionPage
      products={getProductsByCategory('necklaces')}
      titleKey="collections.necklaces.title"
      subtitleKey="collections.necklaces.subtitle"
    />
  );
}
