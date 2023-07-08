import supabase from '@/services/api';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FaUsers, FaDiagramProject, FaMessage, FaPhoneFlip } from "react-icons/fa6";
import { FaInstagram, FaTwitter, FaCode, FaXmark } from "react-icons/fa6";
import { Session } from "@supabase/gotrue-js/src/lib/types"
import { useRouter } from 'next/router';
import useSession from '@/hooks/useSession';

interface Props {
  transparent?: boolean,
  position: "fixed" | "relative",
  session?: Session | null
}

const links = [
  {
    label: "Nosotros",
    href: "/nosotros",
    Icon: <FaUsers size={22} />,
  },
  {
    label: "Proyectos",
    href: "/proyectos",
    Icon: <FaDiagramProject size={22} />,
  },
  {
    label: "Blog",
    href: "/blog",
    Icon: <FaMessage size={20} />,
  },
  {
    label: "Contacto",
    href: "/contacto",
    Icon: <FaPhoneFlip size={17} />,
  },
]

const socialLinks = [
  {
    href: "https://www.instagram.com/citunitec/",
    Icon: FaInstagram,
  },
  {
    href: "https://twitter.com/CitUnitec2015",
    Icon: FaTwitter,
  },
]

const pathNotToRenderWhenSignedUp = ["/auth/login", "/auth/signup"]


const Header = ({ session = null, position, transparent = false }: Props) => {

  const [opened, setOpened] = useState<boolean>(false)

  const router = useRouter()

  // const [session, setSession] = useState<Session | null>()
  const [triggeredEvent, setTriggeredEvent] = useState<boolean>(false)

  const verifyPath = (paths: string[]): boolean => {
    const verified = !(paths.find(path => {
      return router.pathname.includes(path)
    }))
    return verified;
  }
  
  // useEffect(() => {
  //   (async () => {
  //     console.log('router', router)
  //     debugger

  //     supabase.auth.onAuthStateChange((event, session) => {
  //       if (session) {
  //         setSession(session)
  //       }
  //       console.log('session', session)
  //       console.log('event', event)
  //       setTriggeredEvent(true)
  //     })

  //   })()
  // }, [])

  useEffect(() => {
    const TO_OF_THE_PAGE = 0
    const $header = document.getElementById('Header')
    const style = "onTop"
    const fixed = $header?.className.includes("fixed")

    if (fixed) {
      // debugger
      if ($header) {
        window.addEventListener('scroll', () => {
          if (window.scrollY === TO_OF_THE_PAGE) {
            $header.classList.add(style)
          } else {
            $header.classList.remove(style)
          }
        })
      }
    }
  }, [])

  const handleSignOut = () => {
    supabase.auth.signOut()
    // setSession(null)
  }

  const $navLinks = useRef<HTMLUListElement>(null)

  return (
    <header id="Header" className={`Header ${position} ${transparent && "transparent"} onTop`}>
      <nav className="">
        {/* Brand */}
        <Link className="navbar-brand" href="/">
          <img src="https://i.imgur.com/Rn0NwIh.png" alt="logo de cit" />
        </Link>
        {/* Left */}

        <ul ref={$navLinks} className={`nav-links ${opened && "opened"}`}>
          {
            links.map(({ label, href, Icon }, i) =>
              <li key={`nav-links-${i}`} className="nav-item">
                <Link href={href}>
                  {Icon}<span>{label}</span>
                </Link>
              </li>
            )
          }
        </ul>

        {/* Redes Sociales, No se Colapsa  */}
        <ul className="nav-social-links">
          {
            socialLinks.map(({ href, Icon }, i) =>
              <li key={`nav-social-links-${i}`} className="nav-item">
                <Link href={href}>
                  <Icon size={18} />
                </Link>
              </li>
            )
          }
          <li>
            {
              (session) ?
                <button onClick={handleSignOut}>
                  Cerrar Sesión
                </button>
                :
                <Link href="/auth/login">
                  Iniciar Sesión
                </Link>
            }
          </li>
        </ul>

        <button onClick={() => setOpened(!opened)} className="burger-button">
          {
            opened ?
              <FaXmark size={20} />
              :
              <FaCode size={20} />
          }
        </button>
      </nav>
    </header>
  )
}

export default Header