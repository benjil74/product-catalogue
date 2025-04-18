import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/app/lib/definitions'

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}