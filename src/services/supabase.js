import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dydskofcuywsywygxbqs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5ZHNrb2ZjdXl3c3l3eWd4YnFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxNDk1MzEsImV4cCI6MjAzOTcyNTUzMX0.atjxUbe-hF9iSXJ2l2ddoYNhIGUjEKpv8zvGfrahsWI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
