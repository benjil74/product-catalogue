import { fetchProductById, fetchReviewById } from '@/app/lib/data';
import Form from '@/app/components/ReviewForm';
import { Button } from '@/app/ui/button';
import Link from 'next/link';

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const product = await fetchProductById(id);

    if (!product) {
        return <p>Product not found.</p>;
      }

    const reviews = await fetchReviewById(id);

    if (!reviews) {
        return <p>No reviews yet.</p>
    }
  return (
    <main>
    <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
      <img src={product.image_url} alt={product.name} className="w-full h-96 object-contain rounded" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-700">{product.price} NIS</p>
      <p>{product.description}</p>
    </div>

      <h2 className="text-xl font-semibold mb-2">Reviews</h2>
      {reviews.length > 0 ? (
        <ul className="space-y-2">
          {reviews.map((review) => (
            <li key={review.id} className="border rounded p-3">
              <p className="text-sm text-gray-800">⭐ {review.rating} / 5</p>
              <p className="text-sm text-gray-600">{review.comment}</p>
              <p className="text-xs text-gray-400">{new Date(review.created_at).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )} 

          <Link href={`/add-review/${product.id}`}>
          <div className='p-4'>
    <Button>Add Review</Button>
    </div>
    </Link>
    
      <div className='p-4'>
      <Link href={'/'}>
    <Button className='bg-gray-500  hover:bg-gray-400'>Home Page</Button>
    </Link>
    </div>
    </main>
  );
}
