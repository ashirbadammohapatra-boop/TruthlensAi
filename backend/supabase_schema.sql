-- TruthLens AI - Supabase Database Schema & Storage Setup
-- Copy and paste this script into your Supabase SQL Editor (https://app.supabase.com)

-- 1. Create Media Uploads History Table
CREATE TABLE IF NOT EXISTS public.media_uploads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    filename TEXT NOT NULL,
    storage_path TEXT NOT NULL,
    public_url TEXT NOT NULL,
    file_size BIGINT NOT NULL,
    format VARCHAR(10) NOT NULL, -- 'jpg', 'png', 'webp'
    mime_type VARCHAR(50) NOT NULL,
    ai_deepfake_probability NUMERIC(5,2),
    verdict VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Storage Bucket for TruthLens Uploads (Public access enabled for fast image analysis)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('truthlens-uploads', 'truthlens-uploads', true)
ON CONFLICT (id) DO NOTHING;

-- 3. Storage Security Policies (Allow public uploads and reads)
CREATE POLICY "Public Upload Access" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'truthlens-uploads');

CREATE POLICY "Public Read Access" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'truthlens-uploads');
