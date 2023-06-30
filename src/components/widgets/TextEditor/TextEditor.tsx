import React, { useCallback } from 'react'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import ListItem from '@tiptap/extension-list-item'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight/lib/core'
import MenuBar from './MenuBar'
import Image from "@tiptap/extension-image"
import Youtube from '@tiptap/extension-youtube'
import Link from '@tiptap/extension-link';

import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
      Image,
      CodeBlockLowlight.configure({
        lowlight,
        languageClassPrefix: 'lenguaje-',
      }),
      Youtube.configure({
        ccLanguage: 'es',
        interfaceLanguage: 'es',
      }),
      Link.configure({
        protocols: ['mailto'],
        // openOnClick: false,
      })
    ],
    content: `
    <h2>Hi there,</h2><p></p><p>this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:</p><ul><li><p>That’s a bullet list with one …</p></li><li><p>… or two list items.</p></li></ul><blockquote><p>Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block: 🖖😎</p></blockquote><p></p><img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/02/220218163634-freddy-vega-2-okok-full-169.jpg?quality=100&amp;strip=info"><pre><code class="lenguaje-javascript">for (var i=1; i &lt;= 20; i++)
      {
        if (i % 15 == 0)
          console.log("FizzBuzz");
        else if (i % 3 == 0)
          console.log("Fizz");
        else if (i % 5 == 0)
          console.log("Buzz");
        else
          console.log(i);
      }</code></pre><p>I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.</p><p></p><img src="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/robert-downey-jr.-improviso-escena-iron-man-decisiva-universo-marvel/138148094-1-esl-ES/Robert-Downey-Jr.-improviso-una-escena-de-Iron-Man-que-fue-decisiva-para-el-Universo-Marvel.jpg"><p></p>
    `,
  })
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