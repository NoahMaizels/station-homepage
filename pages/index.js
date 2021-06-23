import Head from 'next/head';
import Navbar from 'components/Navbar';
 import Image from 'next/image';
import logoOnly from 'public/logoOnly.png';
import {useEffect} from 'react'


export default function Index() {
  useEffect(()=> {
    {VANTA.NET({
        el: "#bg-element",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        color: '#0af584',
        backgroundColor: '#474782',
        scale: 1.00,
        scaleMobile: 1.00
        })}
 },[])
  return (
    <>
        <Head>
          <title>Station</title>
          <script src="/scripts/three.min.js"></script>
          <script src="/scripts/net.min.js"></script>
        </Head>
        {/* This example requires Tailwind CSS v2.0+ */}
      
        <Navbar></Navbar>
        <div id="bg-element">
         
         </div>
        <div className="w-96 mx-auto"> 
          <Image 
            src={logoOnly}
            width={322}
            height={281}
          />
        </div>

    
        
        <main className="">
          {/* <div className="w-96 mx-auto"> 
            <Image 
              src={logoOnly}
              width={322}
              height={281}
            />
          </div>
          <div className="w-96 mx-auto"> 
            <Image 
              src={logoOnly}
              width={322}
              height={281}
            />
          </div> <div className="w-96 mx-auto"> 
            <Image 
              src={logoOnly}
              width={322}
              height={281}
            />
          </div> <div className="w-96 mx-auto"> 
            <Image 
              src={logoOnly}
              width={322}
              height={281}
            />
          </div> <div className="w-96 mx-auto"> 
            <Image 
              src={logoOnly}
              width={322}
              height={281}
            />
          </div> <div className="w-96 mx-auto"> 
            <Image 
              src={logoOnly}
              width={322}
              height={281}
            />
          </div> <div className="w-96 mx-auto"> 
            <Image 
              src={logoOnly}
              width={322}
              height={281}
            />
          </div> <div className="w-96 mx-auto"> 
            <Image 
              src={logoOnly}
              width={322}
              height={281}
            />
          </div> <div className="w-96 mx-auto"> 
            <Image 
              src={logoOnly}
              width={322}
              height={281}
            />
          </div> */}
        </main>

        
         
      <style jsx>{`
        #bg-element {
          width: 100%;
          height: 800px;
        }
      .main {
          flex: 1;
          height: 100vh;
          justify-content: center;
          align-items: center;
          background: rgb(60,78,121);
          background: linear-gradient(21deg, rgba(60,78,121,1) 0%, rgba(33,52,108,1) 14%, rgba(5,26,94,1) 43%);
        }
        p {
          color: blue;
        }
      `}</style>
    </>
  );
}
