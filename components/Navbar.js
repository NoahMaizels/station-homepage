/* This example requires Tailwind CSS v2.0+ */
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Twitter, Telegram, Telegramann, Medium } from './Socials'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Overview', href: '#overview' },
  { name: 'How It Works', href: '#howitworks' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Team', href: '#team' },
  { name: 'Community', href: '#footer' }
]

export default function Navbar() {
  const [hoverState, setHoverState] = useState({
    twitter: false,
    telegram: false,
    medium: false,
    mediumann: false
  })

  function handleMouseOver(e) {
    const newState = Object.assign({}, hoverState)
    const closest = e.target.closest('.navIcon')
    if (closest) {
      newState[closest.id] = true
      setHoverState(newState)
    }
  }

  function handleMouseLeave(e) {
    const newState = Object.assign({}, hoverState)
    const closest = e.target.closest('.navIcon')
    if (closest) {
      newState[closest.id] = false
      setHoverState(newState)
    }
  }

  useEffect(() => {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    // let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      // let currentScrollPos = window.pageYOffset
      if (window.pageYOffset < 135) {
        document.getElementById('main-nav').style.top = '0'
      } else {
        document.getElementById('main-nav').style.top = '-150px'
      }
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block'
      } else {
        mybutton.style.display = 'none'
      }
    }
    //Get the button:
    const mybutton = document.getElementById('myBtn')
  })
  return (
    <div>
      <Popover>
        {({ open }) => (
          <>
            <div
              id="main-nav"
              className="blur transition-top duration-500 fixed top-0 left-0 w-full z-10">
              <div className="z-50 flex justify-between items-center px-4 py-6 sm:px-6   md:space-x-10">
                <div className="flex justify-start ">
                  <a href="/">
                    <img className="h-10 w-auto" src="logo07.webp" alt="" />
                  </a>
                </div>
                <div className="-mr-2 -my-2 lg:hidden">
                  <Popover.Button className="bg-dark rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-primary focus:outline-none">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden lg:flex space-x-7">
                  {navigation.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="font-gilroy transition-colors hover:text-gray-200 text-primary  text-base font-bold hover:text-gray-200">
                      {link.name}
                    </a>
                  ))}
                </Popover.Group>
                <div className="hidden lg:flex space-x-4 items-center justify-end ">
                  <Twitter
                    hoverState={hoverState}
                    handleMouseOver={handleMouseOver}
                    handleMouseLeave={handleMouseLeave}></Twitter>
                  <Telegram
                    hoverState={hoverState}
                    handleMouseOver={handleMouseOver}
                    handleMouseLeave={handleMouseLeave}></Telegram>
                  <Telegramann
                    hoverState={hoverState}
                    handleMouseOver={handleMouseOver}
                    handleMouseLeave={handleMouseLeave}></Telegramann>
                  <Medium
                    hoverState={hoverState}
                    handleMouseOver={handleMouseOver}
                    handleMouseLeave={handleMouseLeave}></Medium>
                </div>
              </div>
            </div>

            {/* 
          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          > */}

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full">
              <Popover.Panel
                focus
                static
                className="z-50 absolute top-0 inset-x-0 transition transform origin-top-right lg:hidden">
                <div className="w-full shadow-lg ring-1 ring-black ring-opacity-5 bg-dark divide-y-2">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <a href="/">
                          <img className="h-10 mb-4 font-bold w-auto" src="logo07.webp" alt="" />
                        </a>
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-secondary rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-primary focus:outline-none">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="flex-col">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-2 hover:text-gray-200 flex items-center font-gilroy text-primary font-semibold">
                            {item.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                    <div className="lg:hidden flex space-x-4 mt-8 mb-4 items-center justify-start">
                      <Twitter
                        hoverState={hoverState}
                        handleMouseOver={handleMouseOver}
                        handleMouseLeave={handleMouseLeave}></Twitter>
                      <Telegram
                        hoverState={hoverState}
                        handleMouseOver={handleMouseOver}
                        handleMouseLeave={handleMouseLeave}></Telegram>
                      <Telegramann
                        hoverState={hoverState}
                        handleMouseOver={handleMouseOver}
                        handleMouseLeave={handleMouseLeave}></Telegramann>
                      <Medium
                        hoverState={hoverState}
                        handleMouseOver={handleMouseOver}
                        handleMouseLeave={handleMouseLeave}></Medium>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <button
        onClick={() => {
          document.body.scrollTop = 0 // For Safari
          document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
        }}
        id="myBtn"
        className="focus-visible:outline-none focus:outline-none"
        title="Go to top">
        <a href="#" id="return-to-top">
          {/* <div className="chevron-wrapper"> */}
          <FontAwesomeIcon
            className="fa-scroll-up"
            // style={{ width: '20px', margin: 'auto' }}
            icon={faChevronUp}
            color="white"
          />
          {/* </div> */}

          {/* <i className="icon-chevron-up"></i> */}
        </a>
      </button>
    </div>
  )
}
