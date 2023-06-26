import Hero from "@/components/pages/Hero";
import MainDescription from "@/components/pages/MainDescription";
import Header from "@/components/widgets/Header";
import Title from "@/components/widgets/Title";

const Home = () => {
  return (
    <>
      <Title />
      <Header />
      <main className={``}>
        <Hero />

        <MainDescription />

        <section id="proyectos" className="container-fluid text-center py-5 my-5 px-3">
          <h2 className="text-center font-weight-bold">Nuestros proximos proyectos</h2>
          <hr className="w-header mb-4" />
          <p className="text-center w-responsive mx-auto mb-5">Nuestros integrantes se encuentran constantemente en el
            desarrollo de nuevos proyectos de indole tecnológica lo cual les permite progresat y afinar sus habilidades
            dentro del campo laboral.</p>
          <div className="grid-proyectos">

            <div className="item-container">
              <div className="proyecto-item rgba-black-strong">
                <h6 className="py-3 font-weight-bold">
                  <i className="fas fa-database mx-1 text-primary" /><span>SIPI</span>
                </h6>
                <p className="pb-3">Es una plataforma de apoyo a la gestión de proyectos institucionales, donde la coordinación,
                  consultores, preparadores y estudiantes tendrán acceso a información operativa del día a día de las
                  actividades de cada equipo...</p>
                <a href="proyectos/sipi.html" className="btn bg-primary btn-rounded btn-md"><i className="fas fa-clone left" />Ver Proyecto</a>
              </div>
            </div>

            <div className="item-container">
              <div className="proyecto-item rgba-black-strong">
                <h6 className="py-3 font-weight-bold">
                  <i className="fas fa-sitemap mx-1 text-primary" /><span>Zayco</span>
                </h6>
                <p className="pb-3">Es un sistema basado en controladores programables, se plantea como primera opción por la
                  sencillez y economía el uso de controladores Arduino que permita realizar prueba de tableros de
                  transferencia y ...</p>
                <a href="proyectos/zayco.html" className="btn btn bg-primary btn-rounded btn-md"><i className="fas fa-clone left" />Ver Proyecto</a>
              </div>
            </div>

          </div>
        </section>

        🐪 Ola k ase?
      </main>
    </>
  )
}

export default Home;