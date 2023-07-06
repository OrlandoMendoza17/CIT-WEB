import React from 'react'
import { Editor, EditorContent } from '@tiptap/react'
import MenuBar from './MenuBar'
// import useTextEditor from '@/hooks/useTextEditor'

type Props = {
  editor: Editor | null,
}

const TextEditor = ({ editor }: Props) => {
  // editor.commands.toggleLink({ href: 'https://example.com', target: '_blank' })
  return (
    <div>
      <div className="TextEditor">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: editor?.getHTML() || "" }}></div> */}
    </div>
  )
}

export default TextEditor;