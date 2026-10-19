
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Replace these two placeholders with your BSA project details.
const SUPABASE_URL = "YOUR_BSA_PROJECT_URL";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_BSA_PUBLISHABLE_KEY";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
