import Link from 'next/link';

import ProductList from '@/app/components/ProductList';

const mockProducts = [
  { id: '1', name: 'Laptop', price: 999.99, imageUrl: '/laptop.jpg' },
  { id: '2', name: 'Phone', price: 699.99, imageUrl: '/phone.jpg' },
  { id: '3', name: 'Headphones', price: 199.99, imageUrl: '/headphones.jpg' },
];

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductList products={mockProducts} />
    </main>
  );
}
