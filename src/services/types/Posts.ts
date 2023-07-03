import { Database } from "./supabase";

type PostSchema = Database["public"]["Tables"]["posts"]

export type Post = PostSchema["Row"]
export type PostCreate = PostSchema["Insert"]
export type PostUpdate = PostSchema["Update"]