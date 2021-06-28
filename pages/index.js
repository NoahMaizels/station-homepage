/* eslint no-undef: 0*/
import { useMediaQuery } from '@react-hook/media-query'

import logoOnly from 'public/logoOnly.png'
import { useEffect } from 'react'

// Sub-components
import Head from 'next/head'
import Navbar from 'components/Navbar'
import Image from 'next/image'

// Main sections components
import Thorchain from 'components/Thorchain'
import Train from 'components/Train'
import Challenges from 'components/Challenges'
import Solutions from 'components/Solutions'
import Network from 'components/Network'
import Platforms from 'components/Platforms'
import Roadmap from 'components/Roadmap'
import Team from 'components/Team'

export default function Index() {
  const matches = useMediaQuery('(max-width: 500px)')

  useEffect(() => {
    const effect = VANTA.NET({
      el: '#bg-element',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      showDots: false,
      color: '#0af584',
      backgroundColor: '#474782',
      points: 12,
      maxDistance: 24,
      spacing: matches ? 40 : 20,
      scale: 1,
      scaleMobile: 1
    })
    {
      effect
    }
  }, [])
  return (
    <div className="bg-secondary">
      <div className="z-50 blur absolute -top-96 h-96 w-full bg-secondary"></div>
      <Head>
        <title>Station</title>
        <script src="/scripts/three.min.js"></script>
        <script src="/scripts/net.min.js"></script>
      </Head>
      {/* This example requires Tailwind CSS v2.0+ */}

      <Navbar></Navbar>
      <div id="bg-element">
        <div className="">
          <div className="px-5 ">
            <div className="  w-56 pt-60 mx-auto">
              <Image src={logoOnly} />
            </div>
            <h1 className="tracking-tight mt-24 text-center sm:text-6xl text-5xl font-gilroy font-bold text-gray-200">
              Where Derivatives Live
            </h1>
            <h2 className="mt-4 text-center max-w-xl text-lg mx-auto font-open-sans text-gray-200">
              Get simple, secure, efficient, and decentralized access to aggregated derivatives from
              multiple defi platforms on multiple blockchains.
            </h2>
            <button
              type="button"
              className="transition-colors font-bold hover:bg-gray-200 mt-8 px-10 mb-32 block text-lg font-gilroy mx-auto items-center  py-1.5 border border-transparent  rounded shadow-sm text-secondary bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Discover Station
            </button>
            <div className="h-px"></div>
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
      {/* <ScrollToTop></ScrollToTop> */}
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
