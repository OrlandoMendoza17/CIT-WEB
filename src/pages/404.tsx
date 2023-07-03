import DarkFullscreen from '@/components/template/DarkFullscreen'
import Footer from '@/components/widgets/Footer'
import Header from '@/components/widgets/Header'
import React from 'react'

const NotFound = () => {
  return (
    <DarkFullscreen>
      <div className="mb-12">
        <img width={250} src="https://i.imgur.com/aFg4F7L.png" alt="" />
      </div>
      <h1 className="font-bold text-2xl">404 NOT FOUND</h1>
      <p className="text-slate-500 text-center">The resource requested could not be found on this server</p>
    </DarkFullscreen>
  )
}

export default NotFound;
