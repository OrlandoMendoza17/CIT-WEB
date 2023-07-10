import { Post } from '@/services/types/Posts'
import { getImageUrl } from '@/utils'
import { howLong } from '@/utils/parseDate'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState } from 'react'
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { FaClock, } from "react-icons/fa6";
import { RiFileEditFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import Link from 'next/link'

// type Props = {}

const PostItem = ({ id, title, body, cover, created_at }: Post) => {

  const [opened, setOpened] = useState(false)

  const editor = useEditor({
    content: body,
    extensions: [
      StarterKit.configure(),
    ]
  })

  editor?.getText()


  const handleOptions = () => {
    
  }

  return (
    <article className="PostItem">
      <figure className="PostItem__cover">
        <img width={200} src={getImageUrl(cover)} alt="" />
      </figure>
      <Link href={`/blog/${id}`} className="PostItem__details">
        <h3 className="PostItem__title">{title}</h3>
        <p>{editor?.getText().slice(0, 100)}...</p>

        <div className="text-slate-400">
          <FaClock className="inline-block mr-4" />
          <small>{howLong(new Date(created_at))}</small>
        </div>
      </Link>
      <div className="relative">
        <button onClick={() => setOpened(!opened)}>
          <PiDotsThreeVerticalBold size={30} />
        </button>
        {
          opened &&
          <div className="PostItem__options">
            <Link href={`/blog/${id}/edit`}>
              <RiFileEditFill className="fill-secondary" size={30} />
            </Link>
            <button>
              <MdDeleteForever className="fill-red-700" size={30} />
            </button>
          </div>
        }
      </div>
    </article>
  )
}

export default PostItem