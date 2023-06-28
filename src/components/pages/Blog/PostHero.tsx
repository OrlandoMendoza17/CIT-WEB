import React from 'react'
import { FaClock } from "react-icons/fa6";

const PostHero = () => {

  const cover = "https://www.tutorialrepublic.com/lib/images/html-illustration.png"

  return (
    <section className="PostHero" style={{ backgroundImage: `url(${cover})` }}>
      <div className="main_container">
        <h1>44 etiquetas HTML que debes conocer</h1>
        <div className="post_info">
          <div className="user">
            <img src="https://static.platzi.com/media/avatars/avatars/OrlandoMendoza20_675db526-41e7-43ff-81b2-d64a486fdc7c.jpg" alt="user-image" />
            <a href="">Orlando Mendoza</a>
          </div>
          <div className="created_at">
            <FaClock className="inline-block mr-4" />
            <small>hace 6 horas</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostHero