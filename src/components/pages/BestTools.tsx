import React from 'react'
import { SiTailwindcss, SiAdobeillustrator } from "react-icons/si";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";

const BestTools = () => {

  const tools = [
    {
      name: "JavaScript",
      Icon: BiLogoJavascript,
      description: "Es un lenguaje de programación orientado a objetos débilmente tipado que se utiliza principalmente para la creación páginas web dinámicas.",
    },
    {
      name: "Typescript",
      Icon: BiLogoTypescript,
      description: "TypeScript es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases. Es libre y de código abierto desarrollado y mantenido por Microsoft.",
    },
    {
      name: "React",
      Icon: FaReact,
      description: "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.",
    },
    {
      name: "Tailwindcss",
      Icon: SiTailwindcss,
      description: "Tailwind CSS es un framework de CSS de código abierto​ para el diseño de páginas web. La principal característica de esta biblioteca es que, a diferencia de otras como Bootstrap, no genera una serie de clases predefinidas para elementos como botones o tablas.",
    },
    {
      name: "Adobe",
      Icon: SiAdobeillustrator,
      description: "Adobe Illustrator es un editor de gráficos vectoriales que sirve, entre otras cosas, para la ilustración como rama del arte digital, técnica o de diseño gráfico.",
    },
    {
      name: "MySQL",
      Icon: GrMysql,
      description: "MySQL es un sistema de administración de bases de datos relacionales. Es un software de código abierto desarrollado por Oracle. Se considera como la base de datos de código abierto más utilizada en el mundo",
    },
  ]

  return (
    <section id="herramientas" className="BestTools flex items-center flex-col my-5 py-20 px-10 md:px-20">
      <h2 className="font-bold text-2xl text-primary text-center">Mejores Herramientas!</h2>
      <hr className="horizontal-rule" />
      <p className="text-center font-medium text-lg text-slate-500 pt-2 pb-24 mb-2">En nuestro equipo tenemos gente con amplia experiencia en diversas Herramientas informáticas</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map(({ name, description, Icon }, index) =>
          <div key={name + index} className="grid grid-cols-[auto_1fr] align content-start gap-4">
            <Icon size={20} className="fill-primary self-center" />
            <h6 className="font-bold items-center">{name}</h6>
            <p className="col-start-2 text-slate-400 font-light text-justify">{description}</p>
          </div>
        )}
      </div>
    </section>

  )
}

export default BestTools