import { throws } from "assert";
import supabase from "./api"
import { Post, PostCreate, PostUpdate } from "./types/Posts";

class PostsService {
  getAll = async (): Promise<Post[] | null> => {
    const { data, error } = await supabase.from("posts").select()
    if (data) {
      const post: Post[] = [...data]
      return post;
    } else {
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

  create = async (post: PostCreate) => {
    const { data, error } = await supabase
      .from('posts')
      .insert(post)
      .select()
    debugger
    if (error) {
      throw new Error(error.message)
    }else{
      console.log("data", data)
      return data[0]
    }
  }

  update = async (postId: PostUpdate["id"], post: PostUpdate) => {
    debugger
    const { data, error } = await supabase
      .from('posts')
      .update(post)
      .eq("id", postId)
      .select();
      
    if (error) {
      throw new Error(error.message)
    }else{
      console.log("data", data)
      return data[0]
    }
  }

  uploadCover = async (file: File) => {
    const { data, error } = await supabase.storage
      .from('post-covers')
      .upload(file.name, file)
    debugger
    if (error) {
      console.error(error)
      alert("Ha habido un error con la subida de la imagen")
    }
    return (!error) ? data.path : file.name;
  }

  updateCover = async (file: File, cover: string) => {
    const { data, error } = await supabase.storage
      .from('post-covers')
      .remove([cover])
    debugger
    if (!error) {
      return await this.uploadCover(file)
    }
    return cover;
  }
}

export default PostsService;