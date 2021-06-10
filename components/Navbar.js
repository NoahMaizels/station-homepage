import { Transition } from '@headlessui/react'
import { useState } from 'react'
import Link from 'components/Link'
import Image from 'next/image'


export default function Navbar() {
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative navbar_override">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex flex-shrink-0 justify-start lg:w-0 lg:flex-1">
             <Link href="/ ">
              <a>
                
                  <span className="sr-only">Fomocraft</span>
                  <h1 className="text-3xl tracking-widest text-primary monoton">
                    STATION
                  </h1>
                </a>
             </Link>
              
            </div>
            <div className="z-40 -mr-2 -my-2 md:hidden">
              <button
                type="button"
                onBlur={() => setMobileOpen(false)}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="rounded-md p-2 inline-flex items-center justify-center text-primary "
                aria-expanded="false">
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link href="/">
                <a className="nav-item text-base font-light text-primary ">
                  Home
                </a>
              </Link>
              {/* <Link href="/about">
                <a className="nav-item text-base font-light text-primary ">
                  About
                </a>
              </Link> */}
              <Link href="/services">
                <a className="nav-item text-base font-light text-primary ">
                  Services
                </a>
              </Link>
              <Link  href="/portfolio">
                <a className="nav-item text-base font-light text-primary ">
                  Portfolio
                </a>
              </Link>
              <a target="_blank" href="mailto:fomocraft@gmail.com" className=" flex items-center rounded-md">                  
                <span className=" text-base font-light text-primary">Contact</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="#FD00C4">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a target="_blank" href="https://twitter.com/fomocraft" className="-mr-3 pr-3 flex items-center rounded-md">                  
                <span className="whitespace-nowrap text-primary">Follow Us</span>
                <svg className="h-6 w-6 ml-2" fill="#FD00C4" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
                          
          
               
           
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-light text-gray-500 hover:text-gray-900">
            
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-light ">
        
              </a>
            </div>
          </div>
        </div>
        {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
From: "opacity-0 scale-95"
To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
From: "opacity-100 scale-100"
To: "opacity-0 scale-95"
  */}

<Transition
                  show={mobileOpen}
                  enter="transition-opacity duration-1100075"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-1000150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">

        <div className="z-40 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-300 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
              <Link href="/ ">
                <a>
                <div>
                  <h1 className="text-primary monoton">
                    STATION
                  </h1>
                </div>
                </a>
              </Link>
               
                <div className="-mr-2">
                  <button
                    type="button"
                    onBlur={() => setMobileOpen(false)}
                    onClick={() => setMobileOpen(false)}
                    className="bg-gray-300 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/ ">
                    <a  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">                  
                      <span className="ml-3 text-base font-light text-gray-900">Home</span>
                    </a>
                  </Link>
                  <Link href="/services ">
                    <a  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">                  
                      <span className="ml-3 text-base font-light text-gray-900">Services</span>
                    </a>
                  </Link>
                  <Link href="/portfolio ">
                    <a  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">                  
                      <span className="ml-3 text-base font-light text-gray-900">Portfolio</span>
                    </a>
                  </Link>
          
                  <a target="_blank" href="mailto:fomocraft@gmail.com" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">                  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="ml-2 text-base font-light text-gray-900">Contact</span>
                  </a>
                  <a target="_blank" href="https://twitter.com/fomocraft" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">                  
                  <svg className="h-6 w-6 ml-2" fill="black" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    <span className="ml-2 text-base font-light text-gray-900">Follow us</span>
                    
                  </a>
      
             
               
                </nav>
              </div>
            </div>
            
          </div>
        </div>
        </Transition>
      </div>
      
    </>
  )
}
