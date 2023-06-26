import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaUsers, FaDiagramProject, FaHandshakeSimple, FaPhoneFlip } from "react-icons/fa6";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

const Header = () => {

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
      label: "Servicios",
      href: "/",
      Icon: <FaHandshakeSimple size={22} />,
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

    if ($header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY === TO_OF_THE_PAGE) {
          $header.classList.add(style)
        } else {
          $header.classList.remove(style)
        }
      })
    }
  }, [])

  return (
    <header id="Header" className="Header onTop">
      <nav className="">
        {/* Brand */}
        <a className="navbar-brand" href="${backURL}index.html">
          <img width={80} src="https://i.imgur.com/Rn0NwIh.png" alt="logo de cit" />
        </a>
        {/* Left */}

        <ul className="nav-links">

          {
            links.map(({ label, href, Icon }, i) =>
              <li key={i} className="nav-item">
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
              <li key={i} className="nav-item">
                <Link href={href}>
                  <Icon size={18} />
                </Link>
              </li>
            )
          }
        </ul>

      </nav>
    </header>
  )
}

export default Header