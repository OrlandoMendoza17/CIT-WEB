import DropZone from '@/components/widgets/DropZone'
import Input from '@/components/widgets/Input'
import NotificationModal from '@/components/widgets/NotificationModal'
import TextEditor from '@/components/widgets/TextEditor/TextEditor'
import useNotification from '@/hooks/useNotification'
import useSession from '@/hooks/useSession'
import useTextEditor from '@/hooks/useTextEditor'
import supabase from '@/services/api'
import PostsService from '@/services/posts'
import { Post, PostCreate, PostUpdate } from '@/services/types/Posts'
import { useRouter } from 'next/router'
import React, { FormEventHandler, useEffect, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { Session } from "@supabase/gotrue-js/src/lib/types"
import { getImageUrl } from '@/utils'

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

type Props = {
  postEdition?: boolean,
  post: Post,
  session: Session | null
}

const PostEditor = ({ postEdition = false, post, session }: Props) => {

  const { title, body, cover } = post

  const [loading, setLoading] = useState<boolean>(false)
  const [domString, setDomString] = useState<string>("")

  const [file, setFile] = useState<File | null>(null)

  const router = useRouter()

  const notificationProps = useNotification()
  const { notification, handleNotification } = notificationProps

  const editor = useTextEditor({
    content: ""
  })

  useEffect(() => {
    editor?.commands.setContent(body)
  }, [body])
  
 
    useEffect(() => {
      (async () => {
        if (postEdition && cover) {
          debugger
          const response = await fetch(getImageUrl(cover))
          const blob = await response.blob()

          if (blob) {
            const file = new File([blob], cover, { lastModified: Date.now() });
            const domString = URL.createObjectURL(blob)
            debugger
            setFile(file)
            setDomString(domString)
          }
        }
      })()
    }, [cover])


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

      let image = cover

      if(file.name !== cover){
        image = await service.uploadCover(file)
        console.log('cover', image)
      }

      const data = {
        title: form.get("title") as string,
        body: editor?.getHTML() as string,
        cover: image,
        user_id: session?.user.id as string
      }

      debugger

      if (postEdition) {
        const updated = await service.update(post.id, data)
        alert("Se ha editado con exito el nuevo post")
        setTimeout(() => router.push(`/blog/${updated.id}`), 3000);
      } else {
        const created = await service.create(data)
        alert("Se ha creado con exito el nuevo post")
        setTimeout(() => router.push(`/blog/${created.id}`), 3000);
      }
      debugger

    } else {
      alert("Falta el cover")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="main_container px-4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold !text-2xl py-8">
            {
              postEdition ? "Editar Post" : "Nuevo Post"
            }
          </h1>
          <button className="bg-primary hover:bg-sky-300 rounded-lg py-2 px-4" type="submit">
            {postEdition ? "Editar" : "Crear"}
          </button>
        </div>

        <Input id="title" defaultValue={title} placeholder="Título" />

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
      <NotificationModal {...notificationProps} />
    </>
  )
}

export default PostEditor;