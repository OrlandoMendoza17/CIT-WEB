import supabase from "./api"
import { Post } from "./types/Posts";

class PostsService {
  getAll = async (): Promise<Post[] | null> => {
    const { data, error } = await supabase.from("posts").select()
    if(data){
      const post: Post[] = [...data]
      return post;
    }else{
      return null;
    }
  }

  find = async (id: string) => {
    const { data } = await supabase.from("posts").select().eq("id", id)

    if (data) {
      const post = data[0]
      return post
    }

    return null;
  }
}

export default PostsService;