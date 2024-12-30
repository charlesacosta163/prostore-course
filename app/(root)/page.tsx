import ProductList from "@/components/shared/product/product-list";
import { getAllProducts } from "@/lib/actions/product-actions";

export default async function HomePage() {

  const products = await getAllProducts()

  return (
    <>
      <ProductList data={products ?? []} title='Newest Arrivals'/>
    </>
  );
}
