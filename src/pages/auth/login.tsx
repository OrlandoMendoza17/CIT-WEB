import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import NotAvailableWhenAuthenticated from '@/components/pages/NotAvailableWhenAuthenticated'
import Header from '@/components/widgets/Header'
import Footer from '@/components/widgets/Footer'
import Input from '@/components/widgets/Input'
import Link from 'next/link'
import { Session } from "@supabase/gotrue-js/src/lib/types"
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa6'
import { useRouter } from 'next/router'
import supabase from '@/services/api'
import NotificationModal from '@/components/widgets/NotificationModal'
import useNotification from '@/hooks/useNotification'

const Login = () => {

  // const cover = "https://res-3.cloudinary.com/fieldfisher/image/upload/f_jpg,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05"
  const cover = "https://www.strategyand.pwc.com/de/en/industries/financial-services/transforming-eu-banks/tech/teaser-deep-dives-transforming-eu-banks-tech.jpg"
  // const cover = "https://www.cato.org/sites/cato.org/files/styles/optimized/public/2021-01/GettyImages-1226985345.jpg?itok=f9SULHjG"

  const router = useRouter()

  const notificationProps = useNotification()
  const { notification, handleNotification } = notificationProps

  const [state, setState] = useState({
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState<boolean>()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const handleError = (error: unknown) => {
      handleNotification.open({
        type: "danger",
        title: "Error",
        message: "Ha ocurrido un error con el inicio de sesión"
      })
      console.error(error)
    }

    try {
      setLoading(true)
      console.log(state)

      const { data, error } = await supabase.auth.signInWithPassword({
        ...state
      })

      if (!error) {
        handleNotification.open({
          type: "success",
          title: "Éxito",
          message: "Has iniciado sesión correctamente ✅"
        })
        console.log(data)
        setTimeout(() => router.push("/dashboard"), 1000)
      }else{
        if(error.message.includes("Invalid login credentials")){
          handleNotification.open({
            type: "danger",
            title: "Inicio de Sesión",
            message: "Credenciales de usuario incorrectas"
          })
        }else{
          throw new Error(error.message)
        }
      }

      setLoading(false)

    } catch (error) {
      handleError(error)
      setLoading(false)
    }
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target
    setState({
      ...state, [name]: value,
    })
  }

  const { email, password } = state

  return (
    <NotAvailableWhenAuthenticated
      render={(session) =>
        <>
          <Header session={session} position="relative" />
          <main className="Login">
            <section className="Login__cover" style={{ backgroundImage: `url(${cover})` }}></section>
            <section className="Login__layout">
              <div className="Login__main-container">
                <h1 className="text-white text-2xl mb-4 font-extrabold">Welcome back!</h1>
                <p className="text-slate-600 mb-8">¿Aún no tienes una cuenta? <Link href="/auth/signup">Ingresa aquí</Link></p>
                <div className="Login__social">
                  <button className="google !font-normal">
                    <FcGoogle size={20} /> Continuar con Google
                  </button>
                  <button className="google !font-normal">
                    <FaGithub size={20} /> Continuar con GitHub
                  </button>
                </div>
                <hr className='my-8' />
                <form className="Login__form" onSubmit={handleSubmit}>
                  <Input
                    id="email"
                    type="email"
                    title="Correo Electrónico"
                    value={email}
                    placeholder="@gmail.com"
                    autoComplete="email"
                    onChange={handleChange}
                  />

                  <Input
                    id="password"
                    type="password"
                    title="Contraseña"
                    value={password}
                    placeholder="••••••••"
                    autoComplete="password"
                    onChange={handleChange}
                  />

                  <button type="submit" className="mt-2">
                    {(loading) ? "Cargando..." : "Iniciar Sesión"}
                  </button>

                  {/* Ola k ase? 🐫 */}
                </form>
                <Link href="/">
                  ¿Has olvidado la contraseña?
                </Link>
              </div>
            </section>
          </main>
          <Footer />

          <NotificationModal {...notificationProps} />
        </>
      }
    />
  )
}

export const getServerSideProps = async () => {
  try {
    const { data, error } = await supabase.auth.getUser()
    console.log('user', data)
    console.log('error', error)

  } catch (error) {
    console.log('error', error)
  }

  return {
    props: {
      data: ""
    }
  }
}

export default Login