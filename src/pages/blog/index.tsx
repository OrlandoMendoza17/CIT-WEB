import BlogItem from '@/components/pages/Blog/BlogItem'
import CategoryItem from '@/components/pages/Blog/CategoryItem'
import Footer from '@/components/widgets/Footer'
import Header from '@/components/widgets/Header'
import useSession from '@/hooks/useSession'
import PostsService from '@/services/posts'
import { Post } from '@/services/types/Posts'
import React, { useEffect, useState } from 'react'

const service = new PostsService()

const Blog = () => {

  const [posts, setPosts] = useState<Post[]>([])
  const [session] = useSession({})
  
  useEffect(() => {
    (async () => {
      const data = await service.getAll()
      if (data) setPosts(data)
      console.log('data', data)
    })()
  }, [])

  // const articles = [...posts, ...posts, ...posts,]

  const categories: Category[] = [
    {
      id: 1,
      name: "HTML",
      image: "https://xwuwegzblgkbpchmqnmw.supabase.co/storage/v1/object/public/categories/file_type_html_icon_130541.png",
      // image: "https://cdn.icon-icons.com/icons2/2415/PNG/512/html_original_wordmark_logo_icon_146478.png",
    },
    {
      id: 2,
      name: "CSS",
      image: "https://xwuwegzblgkbpchmqnmw.supabase.co/storage/v1/object/public/categories/css%20-%20copia.png",
      // image: "https://cdn.icon-icons.com/icons2/2415/PNG/512/css_original_wordmark_logo_icon_146576.png",
    },
    {
      id: 3,
      name: "JavaScript",
      image: "https://xwuwegzblgkbpchmqnmw.supabase.co/storage/v1/object/public/categories/JavaScript-logo.png",
    },
    {
      id: 4,
      name: "TypeScript",
      image: "https://xwuwegzblgkbpchmqnmw.supabase.co/storage/v1/object/public/categories/image_processing20210621-24504-1kzza9x.png",
    },
    {
      id: 5,
      name: "React.js",
      image: "https://xwuwegzblgkbpchmqnmw.supabase.co/storage/v1/object/public/categories/react_original_logo_icon_146374.png",
    },
  ]

  return (
    <>
      <Header session={session} position="relative" />
      <main className="Blog">
        <div className="main_container">
          <aside>
            {
              categories.map((category, i) =>
                <CategoryItem key={`category-item-${i}`} {...category}/>
              )
            }
          </aside>
          <section>
            <div className="Blog__search">
              <label htmlFor="search" className="p-4 rounded-l-full border border-slate-300">
                <input id="search" className="w-full px-4" placeholder="Buscar" type="text" />
              </label>
              <button className="py-4 px-8 bg-slate-200 rounded-r-full">
                🔍
              </button>
            </div>
            <div className="Blog__grid">
              {
                posts.map((post, i) =>
                  <BlogItem key={`blog-item-${i}`} {...post} />
                )
              }
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Blog