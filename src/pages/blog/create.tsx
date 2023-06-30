import React from 'react'
import Header from '@/components/widgets/Header'
import Footer from '@/components/widgets/Footer'
import TextEditor from '@/components/widgets/TextEditor/TextEditor'

const Create = () => {
  return (
    <>
      <Header position="relative" transparent={false} />
      <main>
        <section className="PostContent">
          <div className="main_container px-4">
            <h1 className="font-bold !text-2xl py-8">Nuevo Post</h1>
            <TextEditor />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}



export default Create