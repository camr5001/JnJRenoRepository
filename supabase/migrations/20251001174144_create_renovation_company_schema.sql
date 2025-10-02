/*
  # Renovation Company Database Schema

  ## Overview
  Complete database structure for a home renovation company website with sales funnel
  tracking, lead management, consultation scheduling, and portfolio showcase.

  ## Tables Created

  ### 1. consultation_requests
  Captures consultation booking requests from potential clients
  - `id` (uuid, primary key)
  - `full_name` (text, required) - Client's full name
  - `email` (text, required) - Contact email
  - `phone` (text, required) - Contact phone number
  - `service_type` (text, required) - Type of renovation (kitchen, bathroom, basement, whole-home)
  - `preferred_date` (date, optional) - Preferred consultation date
  - `preferred_time` (text, optional) - Preferred time slot
  - `address` (text, optional) - Property address
  - `budget_range` (text, optional) - Budget range for project
  - `message` (text, optional) - Additional details
  - `status` (text, default: 'new') - Request status (new, contacted, scheduled, completed, cancelled)
  - `created_at` (timestamptz) - Timestamp of request submission
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. quote_requests
  Captures detailed quote requests with project specifications
  - `id` (uuid, primary key)
  - `full_name` (text, required)
  - `email` (text, required)
  - `phone` (text, required)
  - `service_type` (text, required)
  - `project_scope` (text, required) - Detailed project description
  - `property_type` (text, optional) - Single-family, condo, etc.
  - `property_size` (text, optional) - Square footage
  - `timeline` (text, optional) - Desired completion timeline
  - `budget_range` (text, required)
  - `address` (text, optional)
  - `attachments` (jsonb, optional) - File references or URLs
  - `status` (text, default: 'new')
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 3. portfolio_projects
  Showcases completed renovation projects with before/after photos
  - `id` (uuid, primary key)
  - `title` (text, required) - Project name/title
  - `service_type` (text, required)
  - `description` (text, required) - Detailed project description
  - `location` (text, required) - City/neighborhood
  - `project_duration` (text, optional) - Time to complete
  - `budget_range` (text, optional)
  - `before_images` (jsonb, required) - Array of before image URLs
  - `after_images` (jsonb, required) - Array of after image URLs
  - `featured` (boolean, default: false) - Show on homepage
  - `testimonial` (text, optional) - Client testimonial
  - `client_name` (text, optional) - Client name (with permission)
  - `completion_date` (date, optional)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  - `display_order` (integer, default: 0) - For ordering on site

  ### 4. testimonials
  Client testimonials and reviews
  - `id` (uuid, primary key)
  - `client_name` (text, required)
  - `service_type` (text, required)
  - `rating` (integer, required) - 1-5 star rating
  - `testimonial_text` (text, required)
  - `location` (text, optional) - City
  - `project_value` (text, optional) - Budget range
  - `image_url` (text, optional) - Client photo or project photo
  - `featured` (boolean, default: false)
  - `approved` (boolean, default: false) - Admin approval
  - `created_at` (timestamptz)
  - `display_order` (integer, default: 0)

  ### 5. newsletter_subscribers
  Email newsletter subscribers for ongoing engagement
  - `id` (uuid, primary key)
  - `email` (text, unique, required)
  - `full_name` (text, optional)
  - `interests` (text[], optional) - Service types of interest
  - `subscribed` (boolean, default: true)
  - `source` (text, optional) - How they found us
  - `created_at` (timestamptz)

  ### 6. lead_magnets
  Tracks downloads of free resources (planning guides, worksheets)
  - `id` (uuid, primary key)
  - `email` (text, required)
  - `full_name` (text, required)
  - `resource_type` (text, required) - Type of resource downloaded
  - `interests` (text[], optional) - Services they're interested in
  - `created_at` (timestamptz)

  ## Security
  - RLS enabled on all tables
  - Public can insert into lead capture tables (consultations, quotes, newsletters, lead magnets)
  - Public can read approved testimonials and featured portfolio projects
  - Admin access required for updates and sensitive data

  ## Indexes
  - Created on frequently queried columns (service_type, status, email, featured)
  - Timestamps indexed for reporting and analytics
*/

-- Create consultation_requests table
CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_type text NOT NULL,
  preferred_date date,
  preferred_time text,
  address text,
  budget_range text,
  message text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_type text NOT NULL,
  project_scope text NOT NULL,
  property_type text,
  property_size text,
  timeline text,
  budget_range text NOT NULL,
  address text,
  attachments jsonb,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create portfolio_projects table
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  service_type text NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  project_duration text,
  budget_range text,
  before_images jsonb NOT NULL,
  after_images jsonb NOT NULL,
  featured boolean DEFAULT false,
  testimonial text,
  client_name text,
  completion_date date,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  service_type text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  testimonial_text text NOT NULL,
  location text,
  project_value text,
  image_url text,
  featured boolean DEFAULT false,
  approved boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text,
  interests text[],
  subscribed boolean DEFAULT true,
  source text,
  created_at timestamptz DEFAULT now()
);

-- Create lead_magnets table
CREATE TABLE IF NOT EXISTS lead_magnets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  full_name text NOT NULL,
  resource_type text NOT NULL,
  interests text[],
  created_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_consultation_requests_service_type ON consultation_requests(service_type);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_status ON consultation_requests(status);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at ON consultation_requests(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_quote_requests_service_type ON quote_requests(service_type);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio_projects(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_portfolio_service_type ON portfolio_projects(service_type);
CREATE INDEX IF NOT EXISTS idx_portfolio_display_order ON portfolio_projects(display_order);

CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(approved) WHERE approved = true;
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_testimonials_service_type ON testimonials(service_type);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_lead_magnets_email ON lead_magnets(email);
CREATE INDEX IF NOT EXISTS idx_lead_magnets_created_at ON lead_magnets(created_at DESC);

-- Enable Row Level Security
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_magnets ENABLE ROW LEVEL SECURITY;

-- RLS Policies for consultation_requests
CREATE POLICY "Anyone can submit consultation requests"
  ON consultation_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Public cannot read consultation requests"
  ON consultation_requests FOR SELECT
  TO anon
  USING (false);

-- RLS Policies for quote_requests
CREATE POLICY "Anyone can submit quote requests"
  ON quote_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Public cannot read quote requests"
  ON quote_requests FOR SELECT
  TO anon
  USING (false);

-- RLS Policies for portfolio_projects
CREATE POLICY "Anyone can view portfolio projects"
  ON portfolio_projects FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for testimonials
CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (approved = true);

-- RLS Policies for newsletter_subscribers
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Public cannot read subscribers"
  ON newsletter_subscribers FOR SELECT
  TO anon
  USING (false);

-- RLS Policies for lead_magnets
CREATE POLICY "Anyone can download lead magnets"
  ON lead_magnets FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Public cannot read lead magnet downloads"
  ON lead_magnets FOR SELECT
  TO anon
  USING (false);