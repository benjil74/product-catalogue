import postgres from 'postgres';
import {
  Product,
  Review,
} from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchProducts() {
  try {
 
    const data = await sql<Product[]>`SELECT * FROM products`;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch product data.');
  }
}


export async function fetchProductById(id: string): Promise<Product | null> {
try{

  const result = await sql<Product[]>`SELECT * FROM products WHERE id = ${id}`;
  return result[0] || null; 
} catch (error) {
  console.error('Database Error:', error);
  throw new Error('Failed to fetch product data.');
}
}

export async function fetchReviewById(id: string) {
  try {
    const data = await sql<Review[]>`
      SELECT
        *
      FROM reviews
      WHERE reviews.product_id = ${id};
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch review.');
  }
}

