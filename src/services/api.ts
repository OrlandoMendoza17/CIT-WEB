import { createClient } from "@supabase/supabase-js"
import { Database } from "./types/supabase";

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_API as string,
  process.env.NEXT_PUBLIC_API_KEY as string,
)

// const API = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API,
// })

export default supabase;
// export default API;