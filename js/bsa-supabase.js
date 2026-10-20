import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "sb_publishable_56RB5RZKBaiblerCP8lrtw_SMCVssXY";
const SUPABASE_PUBLISHABLE_KEY = " https://wunzifvjumxoeftwudpi.supabase.co";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
