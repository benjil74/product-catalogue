import ProductList from '@/app/components/ProductList';
import { fetchProducts } from '@/app/lib/data'

const productsList = await fetchProducts()

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductList products={productsList} />
    </main>
  );
}
