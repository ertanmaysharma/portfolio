// Supabase Configuration Template
// Copy this file to config.js and replace with your actual credentials

const SUPABASE_URL = 'https://accfueqliyvzuqfrlfkd.supabase.co'; // e.g., https://xxxxx.supabase.co
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjY2Z1ZXFsaXl2enVxZnJsZmtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0OTQ1MTUsImV4cCI6MjA4MDA3MDUxNX0.XvoXC-eUYKtI8yEyDcOmsJqpGnuQ7QNzFBQ4XFnJeyo'; // Long string starting with eyJ...

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
