import React, { FormEventHandler, useEffect, useState } from 'react'
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
import supabase from '@/services/api'
import { Session } from "@supabase/gotrue-js/src/lib/types"
import { useRouter } from 'next/router'

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

  const editor = useTextEditor({
    content: ""
  })

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

  const [session] = useSession({ ProtectRoute: true })

  return (
    <>
      {
        session &&
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
              </form >
            </section>
          </main>
          <Footer />
        </>
      }
    </>
  )
}

export default Create