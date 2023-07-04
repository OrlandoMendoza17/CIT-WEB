import { Post } from '@/services/types/Posts'
import { howLong } from '@/utils/parseDate'
import React from 'react'

type Props = Post

const BlogItem = ({ id, title, cover, created_at }: Props) => {
  return (
    <article className="BlogItem">
      <a href={`/blog/${id}`}>
        <figure>
          <img src={cover || ""} alt="" />
        </figure>
        <div className="BlogItem__details">
          <div>
            <img src="https://i.imgur.com/Rn0NwIh.png" alt="" />
          </div>
          <div>
            <span>
              {title}
            </span>
            <small>
              {howLong(new Date(created_at))}
            </small>
          </div>
        </div>
      </a>
    </article>
  )
}

export default BlogItem