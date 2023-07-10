import useTextEditor from '@/hooks/useTextEditor'
import { Post } from '@/services/types/Posts'
import { EditorContent } from '@tiptap/react'
import { type } from 'os'
import React, { ReactNode, useEffect, useState } from 'react'

interface Props extends Post {
}

const PostContent = ({ body }: Props) => {

  const editor = useTextEditor({
    editable: false,
    content: body,
  })

  useEffect(() => {
    editor?.commands.setContent(body)
  }, [body])

  // console.log(editor?.getHTML())

  return (
    <section className="PostContent">
      <div className="main_container px-4">
        <EditorContent editor={editor} />
      </div>
    </section>
  )
}

export default PostContent