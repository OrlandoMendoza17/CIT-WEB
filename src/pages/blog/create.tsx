import React from 'react'
import Header from '@/components/widgets/Header'
import Footer from '@/components/widgets/Footer'
import TextEditor from '@/components/widgets/TextEditor/TextEditor'
import PostHero from '@/components/pages/Blog/PostHero'

const Create = () => {

  // const editor = useEditor({
  //   extensions: [
  //     StarterKit,
  //   ],
  //   content: '<p>Hello World! 🌎️</p>',
  // })

  return (
    <>
      <Header />
      <main>
        <PostHero />
        <section className="PostContent">
          <div className="main_container px-4">
            <TextEditor />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Create