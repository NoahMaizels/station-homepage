import { useEffect } from 'react'

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Overview', href: '#' },
  { name: 'How It Works', href: '#' },
  { name: 'Roadmap', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'Community', href: '#' }
]

export default function Example() {
  useEffect(() => {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    // let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      // let currentScrollPos = window.pageYOffset
      if (window.pageYOffset < 100) {
        document.getElementById('main-nav').style.top = '0'
      } else {
        document.getElementById('main-nav').style.top = '-150px'
      }
      // prevScrollpos = currentScrollPos
    }
  })
  return (
    <header id="main-nav" className="fixed top-0 left-0 w-full z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none">
          <a href="/">
            <img className="h-10 w-auto" src="logo07.png" alt="" />
          </a>
          <div className="flex items-center">
            <div className="hidden tracking-wider ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-gilroy-bold transition-colors hover:text-gray-200 text-base text-lg font-bold hover:text-gray-200">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex ml-10 space-x-4">
            <a>
              <img src="twitter.svg" alt="twitter" height="40" width="40" />
            </a>
            <a>
              <img src="medium.svg" alt="medium" height="40" width="40" />
            </a>
            <a>
              <img src="telegram.svg" alt="telegram" height="40" width="40" />
            </a>
          </div>
        </div>
        <div className="py-4 font-gilroy flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-gilroy text-base font-medium text-gray-200 hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      <style jsx>{`
        #main-nav {
          transition: top 0.5s;
          backdrop-filter: blur(1px);
        }

        a img {
          color: '#00fa94';
        }

        * {
          color: #00fa94;
        }
      `}</style>
    </header>
  )
}
