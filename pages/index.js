/* eslint no-undef: 0*/

import Head from 'next/head'
import Navbar from 'components/Navbar'
import Thorchain from 'components/Thorchain'

import Image from 'next/image'
import logoOnly from 'public/logoOnly.png'
import { useEffect } from 'react'

export default function Index() {
  useEffect(() => {
    {
      VANTA.NET({
        el: '#bg-element',
        mouseControls: false,
        touchControls: true,
        gyroControls: true,
        showDots: false,
        color: '#0af584',
        backgroundColor: '#474782',
        points: 10,
        maxDistance: 32,
        spacing: 20,
        scale: 1.0,
        scaleMobile: 1.0
      })
    }
  }, [])
  return (
    <div className="bg-secondary">
      <Head>
        <title>Station</title>
        <script src="/scripts/three.min.js"></script>
        <script src="/scripts/net.min.js"></script>
      </Head>
      {/* This example requires Tailwind CSS v2.0+ */}

      <Navbar></Navbar>
      <div id="bg-element">
        <div className="px-5">
          <div className="w-56 pt-60 mx-auto">
            <Image src={logoOnly} />
          </div>
          <h1 className="mt-24 text-center text-6xl font-gilroy font-bold text-white">
            Where Derivatives Live
          </h1>
          <h2 className="mt-4 text-center max-w-xl text-lg mx-auto font-open-sans text-white">
            Get simple, secure, efficient, and decentralized access to aggregated derivatives from
            multiple defi platforms on multiple blockchains.
          </h2>
          <button
            type="button"
            className="mt-8 px-10 mb-32 block text-lg font-gilroy-bold mx-auto items-center  py-1.5 border border-transparent  rounded shadow-sm text-secondary bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Discover Station
          </button>
          <div className="h-px"></div>
        </div>
      </div>
      <Thorchain></Thorchain>

      <main className="">
        <h1>Test</h1>
      </main>

      <style jsx>{`
      
        #bg-element {
          width: 100%
        
         
        }
      .main {
          flex: 1
          height: 100vh
          justify-content: center
          align-items: center
          background: rgb(60,78,121)
          background: linear-gradient(21deg, rgba(60,78,121,1) 0%, rgba(33,52,108,1) 14%, rgba(5,26,94,1) 43%)
        }
        p {
          color: blue
        }
      `}</style>
    </div>
  )
}
