import PostEditor from '@/components/pages/Blog/PostEditor'
import Footer from '@/components/widgets/Footer'
import Header from '@/components/widgets/Header'
import useSession from '@/hooks/useSession'
import PostsService from '@/services/posts'
import { Post } from '@/services/types/Posts'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const service = new PostsService()

const edit = () => {

  const router = useRouter()
  const [session] = useSession({ ProtectRoute: true })

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
      const { id } = router.query
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
    session &&
    <>
      <Header session={session} position="relative" transparent={false} />
      <main>
        <section className="PostContent">
          <PostEditor postEdition post={post} session={session} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default edit