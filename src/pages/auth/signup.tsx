import DarkFullscreen from '@/components/template/DarkFullscreen'
import Header from '@/components/widgets/Header'
import Input from '@/components/widgets/Input'
import React, { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa6'
import Link from 'next/link'
import supabase from '@/services/api'
import Footer from '@/components/widgets/Footer'
import useSession from '@/hooks/useSession'
import { useRouter } from 'next/router'
import NotAvailableWhenAuthenticated from '@/components/pages/NotAvailableWhenAuthenticated'

const Signup = () => {

  // const cover = "https://res-3.cloudinary.com/fieldfisher/image/upload/f_jpg,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05"
  // const cover = "https://www.strategyand.pwc.com/de/en/industries/financial-services/transforming-eu-banks/tech/teaser-deep-dives-transforming-eu-banks-tech.jpg"
  const cover = "https://www.cato.org/sites/cato.org/files/styles/optimized/public/2021-01/GettyImages-1226985345.jpg?itok=f9SULHjG"

  const router = useRouter()

  const [state, setState] = useState({
    email: "",
    name: "",
    last_name: "",
    password: "",
  })

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    console.log(state)
    const { email, password, ...rest } = state

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          ...rest,
        }
      }
    })

    console.log(data)
    console.log(error)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target
    setState({
      ...state, [name]: value,
    })
  }

  const { email, name, last_name, password } = state

  return (
    <NotAvailableWhenAuthenticated
      render={(session) =>
        <>
          <Header session={session} position="relative" />
          <main className="Signup">
            <section className="Signup__cover" style={{ backgroundImage: `url(${cover})` }}></section>
            <section className="Signup__layout">
              <div className="Signup__main-container">
                <h1 className="text-white text-2xl mb-4 font-extrabold">
                  Crea una cuenta
                </h1>
                <p className="text-slate-600">¿Ya tienes una cuenta? <Link href="/auth/login">Ingresa aquí</Link></p>
                <hr className='my-8' />
                <form className="Signup__form" onSubmit={handleSubmit}>

                  <div className="Signup__social">
                    <Input
                      id="name"
                      type="name"
                      title="Nombres"
                      value={name}
                      placeholder="Timothy John"
                      autoComplete="name"
                      onChange={handleChange}
                    />
                    <Input
                      id="last_name"
                      type="last_name"
                      title="Apellidos"
                      value={last_name}
                      placeholder="Berners-Lee"
                      autoComplete="last_name"
                      onChange={handleChange}
                    />
                  </div>

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
                    Submit
                  </button>

                  {/* Ola k ase? 🐫 */}
                </form>
                {/* <Link href="/" className="text-slate-600 hover:text-slate-400">¿Has olvidado la contraseña?</Link> */}
              </div>
            </section>
          </main>
          <Footer />
        </>
      }
    />
  )
}

export default Signup