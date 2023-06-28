import React from 'react'
import { FaClock } from "react-icons/fa6";

const PostHero = () => {
  return (
    <section className="PostHero">
      <div className="main_container">
        <h1>Figma lanza nuevos features que no te puedes perder</h1>
        <div className="user">
          <img src="https://static.platzi.com/media/avatars/avatars/OrlandoMendoza20_675db526-41e7-43ff-81b2-d64a486fdc7c.jpg" alt="user-image" />
          <a href="">Orlando Mendoza</a>
          <FaClock />
          <small>hace 6 horas</small>
        </div>
      </div>
    </section>
  )
}

export default PostHero