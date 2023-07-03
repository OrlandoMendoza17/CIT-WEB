import supabase from "./api"

class PostsService {
  getAll = async () => {
    const { data, error } = await supabase.from("posts").select()
    return data;
  }

  find = async (id: string) => {
    const { data } = await supabase.from("posts").select().eq("id", id)

    if(data){
      const post = data[0]
      return post
    }
    
    return null;
  }
}

export default PostsService;