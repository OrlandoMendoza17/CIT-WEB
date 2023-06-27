import React from 'react'
import { FaShare } from 'react-icons/fa6'

const MainDescription = () => {
  return (
    <section id="main-description" className="MainDescription my-5 p-20">

      {/* Section heading */}
      <h2 className="text-center font-bold text-2xl text-primary">¿Por qué es tan GENIAL?</h2>
      <hr className="horizontal-rule" />

      {/* Section description */}
      <p className="text-center mx-auto mb-20">
        <span className="text-primary">CIT</span> es un equipo que destaca dentro del resto de equipos de la <span className="text-primary">UNITEC</span> debido a que es
        el único orientado al Desarrollo Técnologico, y a su gran trabajo en equipo de sus integrantes con el objetivo
        fundamental de ofrecer soluciones tecnologicas para la sociedad
      </p>

      <div className="MainDescription__focus">

        <div className="img-container">
          <img src="https://i.imgur.com/kCG9hi7.jpg" alt="Sample image" />
        </div>

        <div className="goals">
          <div className="item-grid">
            <FaShare className="fill-primary" />
            <h5 className="font-bold">Misión</h5>
            <p className="!text-[18px] font-light pb-6">Desarrollar soluciones integrales basadas en medios tecnológicos, innovadores,
              ecológicos y de bajo impacto económico que solventen problematicas de la sociedad.</p>
          </div>

          <div className="item-grid">
            <FaShare className="fill-primary" />
            <h5 className="font-bold">Visión</h5>
            <p className="!text-[18px] font-light pb-6">Ser reconocido por la sociedad como el equipo referente de P.I. de la UNITEC para las
              búsqueda y solución de problemas basados en texcnologías con una buena relación costo-servicio.</p>
          </div>

          <div className="item-grid">
            <FaShare className="fill-primary"/>
            <h5 className="font-bold">Objetivo General</h5>
            <p className="!text-[18px] font-light pb-6">Conformar un equipo multidisciplinario, que basado en las ultimas tecnologias pueda
              diseñar, crear e implementar soluciones en el área técnica apoyados en la innovación, de forma ecológica y
              con el menor costo posible a ser aplicados a las sociedad.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default MainDescription