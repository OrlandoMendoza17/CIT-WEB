import { Post } from '@/services/types/Posts';
import { howLong } from '../../../utils/parseDate/index';
import React, { useEffect } from 'react'
import { FaClock } from "react-icons/fa6";
import supabase from '@/services/api';
import { getImageUrl } from '@/utils';

type Props = Post

const PostHero = ({
  title = "44 etiquetas HTML que debes conocer",
  cover = "https://www.tutorialrepublic.com/lib/images/html-illustration.png",
  created_at = "2023-07-01T22:00:00Z",
}: Props) => {

  console.log('cover', cover)
  
  return (
    <section className="PostHero" style={{ backgroundImage: `url(${getImageUrl(cover)})` }}>
      <div className="main_container">
        <h1>{title}</h1>
        <div className="post_info">
          <div className="user">
            <img src="https://i.imgur.com/Rn0NwIh.png" alt="user-image" />
            <a href="">CIT TEAM</a>
          </div>
          {
            Boolean(created_at) &&
            <div className="created_at">
              <FaClock className="inline-block mr-4" />
              <small>{howLong(new Date(created_at))}</small>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default PostHero

// https://xwuwegzblgkbpchmqnmw.supabase.co/storage/v1/object/post-covers/tech_neoncircuitboard_857021704_medium_lc5h05.jfif
// https://xwuwegzblgkbpchmqnmw.supabase.co/storage/v1/object/public/post-covers/tech_neoncircuitboard_857021704_medium_lc5h05.jfif