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
          <p><strong>Imperdible</strong> 👍🏻🔊 Conferencia Encuentro con la Ciberseguridad BC ¿Quieres optimizar tus conocimientos respecto a la seguridad y protección de datos personales, equipos y softwares?</p>
          <ul>
            <li>📍 Día viernes 👉 20 de  julio a las ⏰ 1:00 P.M.</li>
            <li>📍 Aula Magistral 2B</li>
            <li>📍 Certificado de Participación🧑🏽‍🎓</li>
            <li>📍 Valor: 3$ dólares pagaderos en Bolívares.</li>
          </ul>
          
          <p><strong>¡Inscríbete a través del siguiente <a href="https://forms.gle/b4kFQYXteRmyKPTL7">Formulario!</a>  ✅👈🏻🦉</strong></p>
          
          <img width={600} src="https://i.imgur.com/MTolrPw.jpg" alt="" />
          
          <p><strong>Datos de Pago:</strong></p>
          <p>Cédula de Identidad: 29.912.020</p>
          <p>Número de Teléfono: 0424-4217139</p>
          <p>Banco: (0105) Mercantil</p>
          
          
        </PostContent>
      </main>
      <Footer />
    </>
  )
}

export default cyberseguridad