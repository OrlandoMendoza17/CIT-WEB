import Link from 'next/link';
import React from 'react'
import { FaDiagramProject, FaDatabase, FaSitemap } from "react-icons/fa6";

const Projects = () => {

  const proyects = [
    {
      title: "SIPI",
      description: "Es una plataforma de apoyo a la gestión de proyectos institucionales, donde la coordinación, consultores, preparadores y estudiantes tendrán acceso a información operativa del día a día de las actividades de cada equipo...",
      Icon: FaDatabase,
      href: "/",
      image: "https://i.imgur.com/oBgn5Xo.jpg",
    },
    {
      title: "Zayco",
      description: "Es un sistema basado en controladores programables, se plantea como primera opción por la sencillez y economía el uso de controladores Arduino que permita realizar prueba de tableros de transferencia y ...",
      Icon: FaSitemap,
      href: "/",
      image: "https://i.imgur.com/yZH5NN4.jpg",
    },
    {
      title: "SIPI",
      description: "Es una plataforma de apoyo a la gestión de proyectos institucionales, donde la coordinación, consultores, preparadores y estudiantes tendrán acceso a información operativa del día a día de las actividades de cada equipo...",
      Icon: FaDatabase,
      href: "/",
      image: "https://i.imgur.com/oBgn5Xo.jpg",
    },
    {
      title: "Zayco",
      description: "Es un sistema basado en controladores programables, se plantea como primera opción por la sencillez y economía el uso de controladores Arduino que permita realizar prueba de tableros de transferencia y ...",
      Icon: FaSitemap,
      href: "/",
      image: "https://i.imgur.com/yZH5NN4.jpg",
    },
    {
      title: "SIPI",
      description: "Es una plataforma de apoyo a la gestión de proyectos institucionales, donde la coordinación, consultores, preparadores y estudiantes tendrán acceso a información operativa del día a día de las actividades de cada equipo...",
      Icon: FaDatabase,
      href: "/",
      image: "https://i.imgur.com/oBgn5Xo.jpg",
    },
    {
      title: "Zayco",
      description: "Es un sistema basado en controladores programables, se plantea como primera opción por la sencillez y economía el uso de controladores Arduino que permita realizar prueba de tableros de transferencia y ...",
      Icon: FaSitemap,
      href: "/",
      image: "https://i.imgur.com/yZH5NN4.jpg",
    },
  ]

  return (
    <section id="proyectos" className="Projects bg-secondary text-center py-20 px-8">
      <h2 className="text-center font-weight-bold">Nuestros proximos proyectos</h2>

      <hr className="horizontal-rule border-primary" />

      <p className="text-center w-responsive mb-20 md:w-[75%]">Nuestros integrantes se encuentran  constantemente en el desarrollo de nuevos proyectos de indole tecnológica lo cual les permite progresat y afinar sus habilidades dentro del campo laboral.</p>

      <div className="grid md:grid-cols-2 gap-8">

        {
          proyects.map(({ title, description, href, image, Icon }, index) =>
            <article key={`project-item-${index}`} className={`Projects__item`} style={{ backgroundImage: `url(${image})` }}>
              <div className="Projects__overlay">
                
                <h6 className="Projects__item--title">
                  <Icon className="fill-primary inline-block mr-2" size={30} />
                  <span>{title}</span>
                </h6>

                <p className="pb-10">{description}</p>

                <Link href={href} className="Projects__item--link">
                  <FaDiagramProject className="mr-4" />
                  <span>Ver Proyecto</span>
                </Link>
              </div>
            </article>
          )
        }

      </div>

    </section>
  )
}

export default Projects