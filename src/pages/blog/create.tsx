import React from 'react'
import Header from '@/components/widgets/Header'
import Footer from '@/components/widgets/Footer'
import TextEditor from '@/components/widgets/TextEditor/TextEditor'
// import { useEditor, EditorContent } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'



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
      <main className="">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="p-20">
          {/* <EditorContent editor={editor} /> */}
          <TextEditor />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Create