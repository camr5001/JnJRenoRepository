/*
  # Add Gallery-Specific Fields to Portfolio Projects

  ## Changes

  ### Modified Tables

  #### portfolio_projects
  - Added `style` (text) - Design style (modern, traditional, contemporary, transitional)
  - Modified `location` to be optional

  ## Purpose

  These fields support the new gallery filtering system that allows users to:
  - Filter projects by design style
  - Filter by budget range
  - Filter by project timeline

  ## Notes

  - Location is now optional to support projects where clients prefer privacy
  - Style field enables better categorization and filtering in gallery views
  - Existing projects will have NULL for style field until updated
*/

-- Add style column to portfolio_projects if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'portfolio_projects' AND column_name = 'style'
  ) THEN
    ALTER TABLE portfolio_projects ADD COLUMN style text;
  END IF;
END $$;

-- Make location nullable if needed
ALTER TABLE portfolio_projects ALTER COLUMN location DROP NOT NULL;

-- Create index on style for faster filtering
CREATE INDEX IF NOT EXISTS idx_portfolio_style ON portfolio_projects(style);
