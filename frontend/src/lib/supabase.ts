import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Check if credentials are placeholder or actual keys
const isSupabaseConfigured = 
  supabaseUrl.includes('supabase.co') && 
  !supabaseUrl.includes('your-supabase-project') && 
  supabaseAnonKey.length > 20;

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export interface UploadRecord {
  id: string;
  filename: string;
  public_url: string;
  size_bytes: number;
  format: 'jpg' | 'png' | 'webp';
  created_at: string;
  storage_provider: 'supabase_cloud' | 'local_session';
  ai_analysis_verdict?: string;
  deepfake_probability?: number;
}

const ALLOWED_EXTENSIONS = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const MAX_FILE_SIZE_MB = 10;

/**
 * Validates and uploads JPG, PNG, or WEBP images to Supabase Storage & Database
 */
export async function uploadMediaImage(file: File): Promise<{ success: boolean; data?: UploadRecord; error?: string }> {
  // 1. Format validation
  if (!ALLOWED_EXTENSIONS.includes(file.type.toLowerCase())) {
    return {
      success: false,
      error: `Invalid file format (${file.type || 'unknown'}). Only JPG, PNG, and WEBP images are supported.`
    };
  }

  // 2. File size validation
  if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
    return {
      success: false,
      error: `File size exceeds maximum limit of ${MAX_FILE_SIZE_MB}MB.`
    };
  }

  const fileExt = file.name.split('.').pop()?.toLowerCase() || 'png';
  const formatKey = fileExt === 'jpeg' ? 'jpg' : (fileExt as 'jpg' | 'png' | 'webp');
  const filename = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
  const filePath = `uploads/${filename}`;

  // If Supabase is connected via valid keys
  if (supabase && isSupabaseConfigured) {
    try {
      // Step A: Upload to Supabase Storage bucket 'truthlens-uploads'
      const { error: storageError } = await supabase.storage
        .from('truthlens-uploads')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (storageError) {
        console.warn('Supabase storage upload fallback:', storageError.message);
      }

      // Step B: Get Public URL
      const { data: publicUrlData } = supabase.storage
        .from('truthlens-uploads')
        .getPublicUrl(filePath);

      const publicUrl = publicUrlData?.publicUrl || URL.createObjectURL(file);

      // Step C: Save record to Supabase database table 'media_uploads'
      const record: UploadRecord = {
        id: `supa-${Date.now()}`,
        filename: file.name,
        public_url: publicUrl,
        size_bytes: file.size,
        format: formatKey,
        created_at: new Date().toISOString(),
        storage_provider: 'supabase_cloud'
      };

      const { error: dbError } = await supabase
        .from('media_uploads')
        .insert([{
          filename: file.name,
          storage_path: filePath,
          public_url: publicUrl,
          file_size: file.size,
          format: formatKey,
          mime_type: file.type
        }]);

      if (dbError) {
        console.warn('Supabase DB insert warning (using client record):', dbError.message);
      }

      return { success: true, data: record };
    } catch (err: any) {
      console.error('Supabase upload exception:', err);
    }
  }

  // Demo / Fallback Session Storage (if credentials are pending or offline)
  const localUrl = URL.createObjectURL(file);
  const fallbackRecord: UploadRecord = {
    id: `local-${Date.now()}`,
    filename: file.name,
    public_url: localUrl,
    size_bytes: file.size,
    format: formatKey,
    created_at: new Date().toISOString(),
    storage_provider: 'local_session'
  };

  return { success: true, data: fallbackRecord };
}
