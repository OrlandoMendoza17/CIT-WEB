import React, { ReactNode } from 'react'
import Header from '@/components/widgets/Header'
import Footer from '@/components/widgets/Footer'

type Props = {
  children: ReactNode
}

const DarkFullscreen = ({ children }: Props) => {
  return (
    <>
      <Header position="relative" />
      <main className='bg-secondary-dark text-primary flex flex-col justify-center items-center px-8' style={{ height: "calc(100vh - 123px)" }}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default DarkFullscreen;