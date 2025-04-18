export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
};

export type Review = {
  id: string;
  product_id: number;
  rating: number;
  comment: string;
  created_at: Date;
}
