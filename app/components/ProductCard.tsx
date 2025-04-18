import React from 'react';

type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
    </div>
  );
}