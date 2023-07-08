import React, { ReactNode } from 'react'
import Header from '@/components/widgets/Header'
import Footer from '@/components/widgets/Footer'
import useSession from '@/hooks/useSession'

type Props = {
  alignCenter?: boolean,
  children: ReactNode
}

const DarkFullscreen = ({ alignCenter = true, children }: Props) => {
  const [session] = useSession()
  return (
    <>
      <Header session={session} position="relative" />
      <main className={`DarkFullscreen`}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default DarkFullscreen;