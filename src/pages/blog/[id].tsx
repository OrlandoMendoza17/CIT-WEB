import PostContent from '@/components/pages/Blog/PostContent'
import PostHero from '@/components/pages/Blog/PostHero'
import Footer from '@/components/widgets/Footer'
import Header from '@/components/widgets/Header'
import PostsService from '@/services/posts'
import { Post } from '@/services/types/Posts'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const service = new PostsService()

const PostArticle = () => {

  const router = useRouter()

  const [post, setPost] = useState<Post>({
    id: "",
    title: "",
    body: "",
    cover: "",
    user_id: "",
    created_at: "",
  })

  useEffect(() => {
    (async () => {
      const theresQuery = Object.values(router.query).length
      const { id } = router.query
      console.log(router)
      if (id && typeof id !== "object") {
        console.log('router', router);
        try {
          const post = await service.find(id)
          if (post) {
            setPost(post)
            console.log(post)
          }
        } catch (error) {
          console.log(error)
        }
      }

    })()
  }, [router])


  return (
    <>
      <Header position="relative" />
      <main>
        <PostHero {...post} />
        <PostContent  {...post} />
      </main>
      <Footer />
    </>
  )
}

export default PostArticle
