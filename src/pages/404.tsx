import Footer from '@/components/widgets/Footer'
import Header from '@/components/widgets/Header'
import React from 'react'

const NotFound = () => {
  return (
    <>
      <Header position="relative" />
      <main className='bg-slate-700 text-primary flex flex-col justify-center items-center px-8' style={{height: "calc(100vh - 123px)"}}>
        <div className="mb-12">
          <img width={250} src="https://i.imgur.com/aFg4F7L.png" alt="" />
        </div>
        <h1 className="font-bold text-2xl">404 NOT FOUND</h1>
        <p className="text-slate-500 text-center">The resource requested could not be found on this server</p>
      </main>
      <Footer/>
    </>
  )
}

export default NotFound;