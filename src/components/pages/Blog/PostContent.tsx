import useTextEditor from '@/hooks/useTextEditor'
import { Post } from '@/services/types/Posts'
import { EditorContent } from '@tiptap/react'
import { type } from 'os'
import React, { ReactNode } from 'react'

interface Props extends Post {
}

const PostContent = ({ body: content }: Props) => {
  
  const editor = useTextEditor({
    content, editable: false, 
  })
  
  return (
    <section className="PostContent">
      <div className="main_container px-4">
        <EditorContent editor={editor} />
      </div>
    </section>
  )
}

export default PostContent