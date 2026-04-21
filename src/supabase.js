import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ojfmugumhrpvnoowogkk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qZm11Z3VtaHJwdm5vb3dvZ2trIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3ODYxODksImV4cCI6MjA4NzM2MjE4OX0.vAGqyONEG8XaetbNgzH7STtrWezSjCEW_X3FzGCGOUs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)