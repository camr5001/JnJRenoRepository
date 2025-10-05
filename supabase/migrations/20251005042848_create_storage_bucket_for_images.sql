/*
  # Create Storage Bucket for Project Images

  1. Storage
    - Create a public bucket called 'project-images' for storing renovation photos
    - Organized by category folders: bathroom, kitchen, basement, other
    
  2. Security
    - Allow public read access to all images
    - Restrict uploads to authenticated users only
    - Set file size limits and allowed MIME types
*/

-- Create the storage bucket for project images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'project-images',
  'project-images',
  true,
  10485760,
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to all images
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Public read access'
  ) THEN
    CREATE POLICY "Public read access"
      ON storage.objects
      FOR SELECT
      TO public
      USING (bucket_id = 'project-images');
  END IF;
END $$;

-- Allow authenticated users to upload images
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Authenticated users can upload images'
  ) THEN
    CREATE POLICY "Authenticated users can upload images"
      ON storage.objects
      FOR INSERT
      TO authenticated
      WITH CHECK (bucket_id = 'project-images');
  END IF;
END $$;

-- Allow authenticated users to update their uploads
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Authenticated users can update images'
  ) THEN
    CREATE POLICY "Authenticated users can update images"
      ON storage.objects
      FOR UPDATE
      TO authenticated
      USING (bucket_id = 'project-images')
      WITH CHECK (bucket_id = 'project-images');
  END IF;
END $$;

-- Allow authenticated users to delete images
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Authenticated users can delete images'
  ) THEN
    CREATE POLICY "Authenticated users can delete images"
      ON storage.objects
      FOR DELETE
      TO authenticated
      USING (bucket_id = 'project-images');
  END IF;
END $$;