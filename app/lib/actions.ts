'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
const FormSchema = z.object({
    id: z.string(),
    product_id: z.string(),
    rating: z.coerce
      .number()
      .lte(5, { message: 'Please enter a number not greater than 5.' }),
    comment: z.string(),
    date: z.string(),
  });
   
  const CreateReview = FormSchema.omit({ id: true, date: true });
  export type State = {
    errors?: {
      product_id?: string[];
      rating?: string[];
      comment?: string[];
    };
    message?: string | null;
  };
  
  export async function createReview(prevState: State, formData: FormData) {
    const validatedFields = CreateReview.safeParse({
      product_id: formData.get('product_id'),
      rating: formData.get('rating'),
      comment: formData.get('comment'),
    });
   
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Review.',
      };
    }
  
    const { product_id, rating, comment } = validatedFields.data;
    const date = new Date().toISOString().split('T')[0];
   console.log(date)
   for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
    try {
      await sql`
        INSERT INTO reviews (product_id, rating, comment, created_at)
        VALUES (${product_id}, ${rating}, ${comment}, ${date})
      `;
    } catch (error) {
      return {
        message: 'Database Error: Failed to Create Review.',
      };
    }
  
    revalidatePath(`/products/${product_id}`);
    redirect(`/products/${product_id}`);
  }