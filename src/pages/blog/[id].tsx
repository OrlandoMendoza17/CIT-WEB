import PostContent from '@/components/pages/Blog/PostContent'
import PostHero from '@/components/pages/Blog/PostHero'
import Footer from '@/components/widgets/Footer'
import Header from '@/components/widgets/Header'
import React from 'react'

const Post = () => {
  return (
    <>
      <Header position="relative" />
      <main>
        <PostHero />
        <PostContent />
      </main>
      <Footer />
    </>
  )
}

export default Post
