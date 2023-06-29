import TextEditor from '@/components/widgets/TextEditor/TextEditor'
import React, {FormEventHandler} from 'react'

const PostContent = () => {
  return (
    <section className="PostContent">
      <div className="main_container px-4">
        <TextEditor/>
      </div>
      {/* <div className="main_container px-4">
        <p>Aprender <a href="https://platzi.com/blog/que-es-html-css-javascript/" target="_blank" rel="noopener">qué es HTML</a> y cómo usarlo es clave cuando quieres entrar al mundo del desarrollo web. Es duro al inicio, pero el esfuerzo vale la pena una vez que llegas a la meta de convertirte en desarrollador o desarrolladora web.</p>
        <p><strong>En HTML la gran mayoría del tiempo te la pasarás usando etiquetas</strong>. Tú y yo sabemos que son DEMASIADAS las que existen, y <strong>es casi imposible aprendernos todas de memoria</strong>, así que te preparamos un regalo que te va a gustar. 💚</p>
        <h2>Guía definitiva: etiquetas HTML esenciales</h2>
        <p>Hemos creado una guía completa con las 44 etiquetas HTML que debes conocer. Además, <strong>al final del blogpost encontrarás una imagen descargable que contiene todas las etiquetas.</strong></p>
        <h2>La estructura</h2>
        <p>Antes de empezar, debes entender cuál es la estructura de una etiqueta HTML. La gran mayoría están compuestas por:</p>
        <ol>
          <li>Apertura</li>
          <li>Atributo</li>
          <li>Valor</li>
          <li>Contenido</li>
          <li>Cierre</li>
        </ol>
        <figure><img src="https://static.platzi.com/media/user_upload/Carrusel-html-02%20%281%29-dab98625-3207-411b-b482-4c5aebbab9d9.jpg" alt="estructura etiqueta HTML" /></figure>
        <h3>Apertura y cierre</h3>
        <p>La apertura y el cierre siempre llevan el nombre de la etiqueta HTML que usarás, y son las que sirven para delimitar el contenido de la misma.</p>
        <h3>Atributo y valor</h3>
        <p>El atributo son distintos ingredientes o modificaciones que puedes hacer a la etiqueta. Como por ejemplo colocarle un ID, especificar algún evento (como los casos de <code>onsubmit</code> y <code>onclick</code>), o modificar el aspecto visual (como cambiarle el color a un texto).</p>
        <p>El valor es la especificación de estas modificaciones. ¿Qué debe suceder después del <code>onsubmit</code>? ¿Qué color debe tener el texto? ¿Qué ID tendrá la etiqueta?</p>
        <h3>Contenido</h3>
        <p>Es la información que queremos que sea afectada por la etiqueta con sus modificaciones (atributos).</p>
        <p>Ahora que entendemos esto, 👇 vamos con las etiquetas.</p>
        <h2>Etiquetas base</h2>
        <p>Son las primeras etiquetas que usas al crear tu archivo HTML. Necesarias para casi cualquier proyecto.</p>
        <figure><img src="https://static.platzi.com/media/user_upload/para%20la%20base-74d756f1-a89d-4933-a597-e20fca8f25be.jpg" alt="etiquetas HTML base" /></figure>
        <h2>Etiquetas de texto</h2>
        <p>Esenciales para cuando deseas darle funciones, jerarquías y estilos diferentes a tu texto. Desde las etiquetas “h” que sirven para jerarquizar el texto de una página, hasta las famosas negrillas o cursivas.</p>
        <figure><img src="https://static.platzi.com/media/user_upload/Carrusel-html-04-70b4746b-e4a8-4c5f-a727-6cb710a30470.jpg" alt="etiquetas HTML de texto" /></figure>
        <h2>Etiquetas multimedia</h2>
        <p>¿Deseas insertar un video, una imagen, un audio o un video de YouTube? Estas son tus etiquetas HTML. La más versátil de ellas es <code>iframe</code>, te permite insertar contenidos de otras páginas web.</p>
        <figure><img src="https://static.platzi.com/media/user_upload/Carrusel-html-05-d8200501-20bc-434c-b15c-c855d5528393.jpg" alt="etiquetas HTML multimedia" /></figure>
        <h2>Etiquetas para estructurar el contenido</h2>
        <p>Si quieres darle orden al texto, las imágenes y todo lo que coloques en tu página web, usa estas etiquetas. Desde crear listas ordenadas de texto, hasta el <strong>&lt;div&gt;</strong> por el que en algún momento sufrimos intentando centrarlo.</p>
        <figure><img src="https://static.platzi.com/media/user_upload/para%20la%20estructura-42d2bb9a-766c-4b59-9f3e-e6e9a24ea589.jpg" alt="etiquetas HTML para estructurar contenido" /></figure>
        <h2>Etiquetas para crear tablas</h2>
        <p>Las tablas son MUY útiles, especialmente cuando traemos información de una base de datos y queremos darle orden y formato a los datos.</p>
        <figure><img src="https://static.platzi.com/media/user_upload/Carrusel-html-07-4ca387cb-0e01-4df2-88e3-656c8a86eb35.jpg" alt="etiquetas HTML para crear tablas" /></figure>
        <h2>Etiquetas para crear formularios</h2>
        <p>Y por último, las de creación de formularios. ¿Quieres crear la sección de contacto? ¿O el paso de registro o login de un usuario? Estas son tus etiquetas.</p>
        <figure><img src="https://static.platzi.com/media/user_upload/Carrusel-html-08-4d0e4b19-5dbc-493d-91d8-0aafc5877571.jpg" alt="etiquetas HTML para crear formularios" /></figure>
        <h2>Descarga la tabla con todas las etiquetas HTML</h2>
        <p>Y aquí va el regalo que te prometimos al inicio del post. Una imagen descargable con todas las etiquetas que mencionamos aquí.</p>
        <p>Úsala como fondo de pantalla en tu computador, o como una imagen de apoyo para cuando estudies o programes.</p>
        <p>👉 <a href="https://static.platzi.com/media/public/uploads/sheet-html_78e6f04d-2ecb-472a-a36c-582b9fc4fb6f.png" target="_blank" rel="noopener">Descargar la tabla de etiquetas HTML en formato PNG.</a></p>
        <p>👉 <a href="https://static.platzi.com/media/public/uploads/sheet-html_e27f26e2-8669-437b-84dd-912932693263.pdf" target="_blank" rel="noopener">Descargar la tabla de etiquetas HTML en formato PDF.</a></p>
        <figure><img src="https://static.platzi.com/media/user_upload/Sheet-html-1f72409c-ffd7-4865-8323-3216e9b1c509.jpg" alt="Sheet-html.png" /></figure>
        <p>Si quieres poner en práctica tus conocimientos y usar la tabla de etiquetas HTML por primera vez, puedes mirar el <a href="https://platzi.com/cursos/html-practico/" target="_blank" rel="noopener">Curso Práctico de HTML</a>, donde <strong>aprenderás a hacer tu propia versión de Google usando solo HTML y CSS.</strong></p>
        <p>👀 <strong>¿Te gustaría que hiciéramos otra tabla (cheat sheet) de otro tema?</strong> Cuéntanos en los comentarios.</p>
        <blockquote>
          <p>IMPORTANTE: Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
        </blockquote>
      </div> */}
    </section>
  )
}

export default PostContent