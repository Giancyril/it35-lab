import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://npfoggrgkbskqzgkcpci.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wZm9nZ3Jna2Jza3F6Z2tjcGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3OTQzMzYsImV4cCI6MjA1ODM3MDMzNn0.AV8_K6T64rD1dM5tnLXZMmHHowVY6lysGwrFZPhCBqg'

export const supabase = createClient(supabaseUrl, supabaseKey);