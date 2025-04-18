'use client';

import ReviewForm from '@/app/components/ReviewForm';

const mockProduct = {
  id: '1',
  name: 'Laptop',
  price: 999.99,
  imageUrl: '/laptop.jpg',
  description: 'A high-end laptop.',
};

const mockReviews = [
  { id: 1, name: 'John', comment: 'Great product!' },
  { id: 2, name: 'Jane', comment: 'Highly recommend it.' },
];

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = mockProduct; 
  const reviews = mockReviews;

  return (
    <main className="p-6">
      <div className="mb-6">
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded" />
        <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
        <p className="text-lg text-gray-700">${product.price}</p>
        <p className="mt-2">{product.description}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Reviews</h2>
        <ul className="mb-4">
          {reviews.map(review => (
            <li key={review.id} className="mb-2 border-b pb-2">
              <strong>{review.name}:</strong> {review.comment}
            </li>
          ))}
        </ul>

        <ReviewForm onSubmit={(data) => console.log('Submitted review:', data)} />
      </div>
    </main>
  );
}