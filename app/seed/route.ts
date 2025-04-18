import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedProducts (){
   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  image_url TEXT
);
`;
}


async function seedReviews (){
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
 await sql`
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;
}



export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedProducts(),
      seedReviews()
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
