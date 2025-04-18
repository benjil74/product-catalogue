import React from 'react';
import { Product } from '@/app/lib/definitions'
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
    <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
      <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-700">{product.price} NIS</p>
    </div>
    </Link>
  );
}