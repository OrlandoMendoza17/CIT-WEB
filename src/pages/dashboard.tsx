import React, { useEffect, useState } from 'react'
import Title from '@/components/widgets/Title'
import Header from '@/components/widgets/Header'
import useSession from '@/hooks/useSession'
import Footer from '@/components/widgets/Footer'
import supabase from '@/services/api'
import { Post } from '@/services/types/Posts'
import Link from 'next/link'
import PostItem from '@/components/pages/dashboard/PostItem'

const Dashboard = () => {

  const [session] = useSession({ ProtectRoute: true })
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    if (session) {
      (async () => {
        const { data, error } = await supabase.from("posts").select("*").eq("user_id", session.user.id)
        if(data) setPosts(data)
        console.log('data', data)
        console.log('error', error)
      })()
    }
  }, [session])


  return (
    <>
      <Title text="Dashboard" />
      <Header session={session} position="relative" />
      <main className="Dashboard">
        <aside></aside>
        <section>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Posts</h1>
            <Link href="/blog/create" className="bg-secondary text-white p-4 rounded-lg">
              Crear nuevo Post
            </Link>
          </div>
          <ul className="grid gap-8">
            {
              posts.map((post) =>
                <PostItem key={post.id} {...post} />
              )
            }
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Dashboard