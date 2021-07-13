/* eslint no-undef: 0*/
import { useMediaQuery } from '@react-hook/media-query'
import React, { useState, useEffect, useRef } from 'react'
import NET from 'node_modules/vanta/dist/vanta.net.min.js'
import Image from 'next/image'

// Sub-components
import Head from 'next/head'
import Navbar from 'components/Navbar'

// Main sections components
import Thorchain from 'components/Thorchain'
import Train from 'components/Train'
import Challenges from 'components/Challenges'
import Solutions from 'components/Solutions'
import Network from 'components/Network'
import Platforms from 'components/Platforms'
import Roadmap from 'components/Roadmap'
import Team from 'components/Team'
import Footer from 'components/Footer'

export default function Index() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  const matches = useMediaQuery('(min-device-width: 800px)')

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          showDots: false,
          color: '#0af584',
          backgroundColor: '#474782',
          points: 12,
          maxDistance: 24,
          spacing: matches ? 18 : 30,
          scale: 1,
          scaleMobile: 1
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div className="bg-secondary">
      <Head>
        <title>Station</title>
      </Head>
      {/* This example requires Tailwind CSS v2.0+ */}

      <Navbar></Navbar>
      <div ref={myRef} id="bg-element">
        <div className="blur">
          <div className="px-5 pb-32">
            <div className="sm:w-40 sm:pt-40  w-36 pt-44 mx-auto">
              <Image priority width={160} height={140} alt="main logo" src="/mainlogo.webp" />
            </div>
            <h1 className="tracking-tight sm:mt-16 mt-10 px-10 sm:px-0 text-center sm:text-5xl text-4xl font-gilroy font-bold text-gray-200">
              Where Derivatives Live
            </h1>
            <h2 className="mt-4 text-center max-w-xl text-base mx-auto font-open-sans text-gray-200">
              Get simple, secure, efficient, and decentralized access to aggregated derivatives from
              multiple defi platforms on multiple blockchains.
            </h2>
            <a href="#howitworks">
              <button
                type="button"
                className="transition-colors font-bold hover:bg-gray-200 mt-8 px-10 block text-base font-gilroy mx-auto items-center  py-1.5 border border-transparent  rounded shadow-sm text-secondary bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Discover Station
              </button>
            </a>
          </div>
        </div>
      </div>
      <Thorchain></Thorchain>
      <Train></Train>
      <Challenges></Challenges>
      <Solutions></Solutions>
      <Network></Network>
      <Platforms></Platforms>
      <Roadmap></Roadmap>
      <Team></Team>
      <Footer></Footer>

      <style jsx>{`
        #bg-element {
          width: 100%;
        }
        .main {
          flex: 1;
          height: 100vh;
          justify-content: center;
          align-items: center;
          background: rgb(60, 78, 121);
          background: linear-gradient(
            21deg,
            rgba(60, 78, 121, 1) 0%,
            rgba(33, 52, 108, 1) 14%,
            rgba(5, 26, 94, 1) 43%
          );
        }
        p {
          color: blue;
        }
      `}</style>
    </div>
  )
}
