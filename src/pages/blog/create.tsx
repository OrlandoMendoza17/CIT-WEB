import React, { FormEventHandler, useState } from 'react'
import Header from '@/components/widgets/Header'
import Footer from '@/components/widgets/Footer'
import TextEditor from '@/components/widgets/TextEditor/TextEditor'
import DropZone from '@/components/widgets/DropZone'
import { FaXmark } from 'react-icons/fa6'
import Input from '@/components/widgets/Input'
import useTextEditor from '@/hooks/useTextEditor'
import { PostCreate } from '@/services/types/Posts'
import PostsService from '@/services/posts'
import useSession from '@/hooks/useSession'

const filesAllowed = [
  {
    label: ".webp",
    type: "image/webp",
  },
  {
    label: ".jpg, .jpeg",
    type: "image/jpeg",
  },
  {
    label: ".png",
    type: "image/png",
  },
]

const service = new PostsService()

const Create = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [domString, setDomString] = useState<string>("")

  const [file, setFile] = useState<File | null>(null)

  const editor = useTextEditor(`
    <h2>Hi there,</h2><p><br class="ProseMirror-trailingBreak"></p><p>this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:</p><ul><li><p>That’s a bullet list with one …</p></li><li><p>… or two list items.</p></li></ul><blockquote><p>Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block: 🖖😎</p></blockquote><p><br class="ProseMirror-trailingBreak"></p><img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/02/220218163634-freddy-vega-2-okok-full-169.jpg?quality=100&amp;strip=info" contenteditable="false" draggable="true"><pre><code class="language-javascript"><span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i=<span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">20</span>; i++)\n    {\n      <span class="hljs-keyword">if</span> (i % <span class="hljs-number">15</span> == <span class="hljs-number">0</span>)\n        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"FizzBuzz"</span>);\n      <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (i % <span class="hljs-number">3</span> == <span class="hljs-number">0</span>)\n        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"Fizz"</span>);\n      <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (i % <span class="hljs-number">5</span> == <span class="hljs-number">0</span>)\n        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"Buzz"</span>);\n      <span class="hljs-keyword">else</span>\n        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(i);\n    }</code></pre><p>I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.</p><p><br class="ProseMirror-trailingBreak"></p><img src="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/robert-downey-jr.-improviso-escena-iron-man-decisiva-universo-marvel/138148094-1-esl-ES/Robert-Downey-Jr.-improviso-una-escena-de-Iron-Man-que-fue-decisiva-para-el-Universo-Marvel.jpg" contenteditable="false" draggable="true"><p><br class="ProseMirror-trailingBreak"></p>
  `)

  const handleFiles = (files: FileList) => {

    // Only the first archive will be accepted and/or validated
    const [file] = Array.from(files)
    const allowedTypes = filesAllowed.map(item => item.type)

    if (allowedTypes.includes(file.type)) {
      console.log('file', file)

      const domString = URL.createObjectURL(file)
      console.log('domString', domString)

      setFile(file)
      setDomString(domString)
    }
  }

  const handleDeleteFile = () => {
    setFile(null)
    setDomString("")
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    if (file) {
      debugger
      const cover = await service.uploadCover(file)
      const post: PostCreate = {
        title: form.get("title") as string,
        body: editor?.getHTML() as string,
        cover,
        user_id: "8ab34820-17d6-4112-ba97-d9d107013c6b"
      }
      debugger
      await service.create(post)
      alert("Se ha creado con exito el nuevo post")
    } else {
      alert("Falta el cover")
    }
  }

  const [session] = useSession()

  return (
    <>
      <Header session={session} position="relative" transparent={false} />
      <main>
        <section className="PostContent">
          <form onSubmit={handleSubmit} className="main_container px-4">
            <div className="flex justify-between items-center">
              <h1 className="font-bold !text-2xl py-8">Nuevo Post</h1>
              <button className="bg-primary hover:bg-sky-300 rounded-lg py-2 px-4" type="submit">Crear</button>
            </div>

            <Input id="title" placeholder="Título" />
            <div className="mb-20 !text-base">
              {
                file &&
                <div className="relative">
                  <button onClick={handleDeleteFile} className="absolute p-2 top-4 right-4 bg-[#232c3d40] rounded-lg">
                    <FaXmark className="fill-white" />
                  </button>
                  <img className="w-full" src={domString} alt="" />
                </div>
              }
              <DropZone
                loading={loading}
                filesAllowed={filesAllowed}
                setLoading={setLoading}
                handleFiles={handleFiles}
              />
            </div>
            <TextEditor editor={editor} />
            {
              editor &&
              <div className="border border-primary" dangerouslySetInnerHTML={{ __html: editor?.getHTML() }}></div>
            }
          </form >
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Create