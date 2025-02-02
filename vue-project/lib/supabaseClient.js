import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://asbkzrawjnszfkhokhhk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzYmt6cmF3am5zemZraG9raGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0OTQwMjMsImV4cCI6MjA1NDA3MDAyM30.0HEzkHO3Ew-nKVNQw7y5We7_tWay4eSfGUHzaDdM4XA')