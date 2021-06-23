import {useEffect} from 'react'

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Overview', href: '#' },
  { name: 'How it Works', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'Community', href: '#' },

]

export default function Example() {
  useEffect(()=> {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("main-nav").style.top = "0";
    } else {
      document.getElementById("main-nav").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }
  })
  return (
    <header id="main-nav" className="fixed top-0 left-0 w-full z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none">
        <a href="#">
               <img
                className="h-10 w-auto"
                src="logo07.png"
                alt=""
              />
            </a>
          <div className="flex items-center">
            
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
 
      <style jsx>{`
      #main-nav {
  transition: top .6s;
 }
        *{
          color: #00fa94;
        }  
      `}</style>
    </header>
  )
}
