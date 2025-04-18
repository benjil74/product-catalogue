'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createReview, State } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function Form({ productId }: { productId: string }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createReview, initialState);
  return (
    <form action={formAction}>
        <div>
            <input id='product_id' name='product_id'type="hidden" value={productId} />
        </div>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="rating" className="mb-2 block text-sm font-medium">
            Rating
          </label>
          <input id='rating' name='rating' type='number' placeholder='/5' required />
          {state.errors?.rating &&
          state.errors.rating.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="mb-2 block text-sm font-medium">
            Comment
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="comment"
                name="comment"
                type="text"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
            </div>
          </div>
        </div>

       
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Review</Button>
      </div>
    </form>
  );
}
