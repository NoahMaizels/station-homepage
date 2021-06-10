/* This example requires Tailwind CSS v2.0+ */
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Link from 'components/Link'

export default function Example() {
  return (
    <div className="bg-center py-20 bg-cover bg-no-repeat bg-heretohelp relative bg-white">
    
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex-col flex md:mx-auto md:w-1/2 ">
          <h2 className="text-base text-xl font-black inconsolata uppercase text-center text-white">Looking for a strategic investor or marketing advisor?</h2>
          <p className="my-8 text-white text-3xl font-black inconsolata text-center ">Look no further!</p>
          <p className="mt-3 text-center text-sm text-white">
          Fomocraft maintains a team of global experts that provide continuous access to top-notch advisory throughout your Fomocraft engagement. Whether you’re looking to launch the next big thing in blockchain or just need to put the finishing touches on your crypto masterpiece, successful projects utilize Fomocraft
          <Link  href="/services "><a className="underline">services</a></Link> 
          to develop their brand and build their runway for long-term success!
        </p>
     
            <div className="mt-12 inline-flex mx-auto rounded-md shadow">
              <a
                href="mailto:fomocraft@gmail.com"
                className="inline-flex text-xl items-center justify-center px-5 py-3 border border-transparent text-base font-black inconsolata rounded-full text-gray-800 bg-white hover:bg-gray-50"
              >
                Get In Touch
                <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-grey-800" aria-hidden="true" />
              </a>
            </div>
 
        </div>
      </div>
      <style jsx global>{`
 
    `}</style>
    </div>
  )
}

