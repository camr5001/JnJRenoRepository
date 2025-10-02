import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ConsultationRequest {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  service_type: string;
  preferred_date?: string;
  preferred_time?: string;
  address?: string;
  budget_range?: string;
  message?: string;
  status?: string;
  created_at?: string;
}

export interface QuoteRequest {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  service_type: string;
  project_scope: string;
  property_type?: string;
  property_size?: string;
  timeline?: string;
  budget_range: string;
  address?: string;
  status?: string;
  created_at?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  service_type: string;
  description: string;
  location?: string;
  project_duration?: string;
  budget_range?: string;
  before_images: string[];
  after_images: string[];
  featured: boolean;
  testimonial?: string;
  client_name?: string;
  completion_date?: string;
  display_order: number;
  style?: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  service_type: string;
  rating: number;
  testimonial_text: string;
  location?: string;
  project_value?: string;
  image_url?: string;
  featured: boolean;
  approved: boolean;
}

export interface LeadMagnet {
  email: string;
  full_name: string;
  resource_type: string;
  interests?: string[];
}
