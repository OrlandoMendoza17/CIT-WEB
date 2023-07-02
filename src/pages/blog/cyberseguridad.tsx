import React from 'react'
import PostContent from '@/components/pages/Blog/PostContent'
import PostHero from '@/components/pages/Blog/PostHero'
import Footer from '@/components/widgets/Footer'
import Header from '@/components/widgets/Header'

const cyberseguridad = () => {
  
  const post = {
    title: "Conferencia de Cyberseguridad",
    cover: "https://itop.academy/wp-content/uploads/2022/08/por-que-formarse-en-ciberseguridad-itop-academy.jpg",
  }
  
  return (
    <>
      <Header position="relative" />
      <main>
        <PostHero {...post} />
        <PostContent>
          <p>A medida que nuestra sociedad se vuelve cada vez más digital, la seguridad informática se vuelve esencial.</p>
          <p>Sin embargo, los ataques cibernéticos son cada vez más frecuentes y sofisticados, así que proteger nuestros datos personales se ha vuelto más desafiante que nunca.</p>
          <p>¿Sabías que un solo virus puede poner en peligro toda nuestra información? </p>
          <p>Por esta razón, el equipo de Proyectos Institucionales CIT te invita al &quot;Encuentro con la Ciberseguridad&quot; ¿Te gustaría ampliar tus conocimientos sobre a la seguridad informática y la protección de tus datos personales? ¡Esta ponencia es para ti!</p>
          <ul>
            <li>📍 Día viernes 👉 20 de  julio a las ⏰ 1:00 P.M.</li>
            <li>📍 Virtual: Vía Google Meet</li>
            <li>📍 Certificado de Participación🧑🏽‍🎓</li>
            <li>📍 Entrada Libre.</li>
          </ul>
          
          <p><strong>¡Inscríbete a través del siguiente <a href="https://forms.gle/b4kFQYXteRmyKPTL7">Formulario!</a>  ✅👈🏻🦉</strong></p>
          
          <Image width={600} src="https://i.imgur.com/MTolrPw.jpg" alt="banner publicitario" />

          <p>Además, al inscribirte estarás participando por el acceso a una masterclass sobre business intelligence e inteligencia artificial en donde aprenderás a elaborar Dashboards, con la herramienta Google Data Studio y ChatGPT.</p>
          
          <p>¡Inscríbete en nuestra conferencia sobre ciberseguridad y aprende a proteger tus datos personales!</p>
          <p>Podrás unirte a la conferencia a través del Google Meet el 20 de julio a la 1:00p.m.</p>
          <p>¡No te lo pierdas!</p>
        </PostContent>
      </main>
      <Footer />
    </>
  )
}

export default cyberseguridad
