import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  full_description?: string;
  specifications?: Record<string, string | number | boolean>;
  image_url?: string;
  gallery_images?: string[];
  stock: number;
  sku: string;
  created_at?: string;
  updated_at?: string;
};
