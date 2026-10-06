import CollectionPage from "@/components/products/CollectionPage";
import { products } from "@/lib/data/products";

/**
 * All products page
 * Displays all available products in the store
 */
export default function AllProductsPage() {
  return (
    <CollectionPage
      products={products}
      titleKey="collections.all.title"
      subtitleKey="collections.all.subtitle"
    />
  );
}
