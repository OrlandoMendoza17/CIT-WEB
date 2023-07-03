import { Post } from '@/services/types/Posts'
import { type } from 'os'
import React, { ReactNode } from 'react'

interface Props extends Post {
}

const PostContent = ({ body }: Props) => {
  return (
    <section className="PostContent">
      <div className="main_container px-4" dangerouslySetInnerHTML={{__html: body}}>
      </div>
    </section>
  )
}

export default PostContent