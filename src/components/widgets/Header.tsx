import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FaUsers, FaDiagramProject, FaMessage, FaPhoneFlip } from "react-icons/fa6";
import { FaInstagram, FaTwitter, FaCode, FaXmark } from "react-icons/fa6";


const types = {
  relative: "relative",
  fixed: "md:fixed",
}

type Props = {
  transparent?: boolean,
  position: "fixed" | "relative"
}

const Header = ({ position, transparent = false }: Props) => {

  const [opened, setOpened] = useState<boolean>(false)

  const links = [
    {
      label: "Nosotros",
      href: "/",
      Icon: <FaUsers size={22} />,
    },
    {
      label: "Proyectos",
      href: "/",
      Icon: <FaDiagramProject size={22} />,
    },
    {
      label: "Blog",
      href: "/blog/post-prueba",
      Icon: <FaMessage size={20} />,
    },
    {
      label: "Contacto",
      href: "/",
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

  useEffect(() => {
    const TO_OF_THE_PAGE = 0
    const $header = document.getElementById('Header')
    const style = "onTop"
    const fixed = $header?.className.includes("fixed")
    
    if (fixed) {
      debugger
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

  const $navLinks = useRef<HTMLUListElement>(null)

  return (
    <header id="Header" className={`Header ${types[position]} ${transparent && "transparent"} onTop`}>
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