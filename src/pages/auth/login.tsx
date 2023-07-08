import DarkFullscreen from '@/components/template/DarkFullscreen'
import Header from '@/components/widgets/Header'
import Input from '@/components/widgets/Input'
import React, { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa6'
import Link from 'next/link'
import supabase from '@/services/api'
import Footer from '@/components/widgets/Footer'
import { useRouter } from 'next/router'
import useSession from '@/hooks/useSession'

const Login = () => {

  // const cover = "https://res-3.cloudinary.com/fieldfisher/image/upload/f_jpg,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05"
  const cover = "https://www.strategyand.pwc.com/de/en/industries/financial-services/transforming-eu-banks/tech/teaser-deep-dives-transforming-eu-banks-tech.jpg"
  // const cover = "https://www.cato.org/sites/cato.org/files/styles/optimized/public/2021-01/GettyImages-1226985345.jpg?itok=f9SULHjG"

  const router = useRouter()

  const [state, setState] = useState({
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState<boolean>()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    try {
      setLoading(true)
      console.log(state)

      const { data, error } = await supabase.auth.signInWithPassword({
        ...state
      })

      console.log(data)
      console.log(error)

      if (!error) {
        router.push("/")
      }

      setLoading(false)

    } catch (error) {
      console.log(error)
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

  const [session] = useSession()
  
  return (
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
    </>
  )
}

export default Login