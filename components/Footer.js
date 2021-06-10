import Link from 'components/Link'


export default function Footer() {
  
  return (

  <footer className="footer_override">
    <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      
      <h2 className="max-w-3xl mx-auto mt-6 text-2xl text-center font-extrabold text-white  sm:text-2xl"></h2>
      <div className=" mx-auto text-center mt-6 ">
          <div className="mx-auto button_gradient_border  inline-flex items-center px-5 border border-transparent text-base font-medium rounded-full shadow-sm text-white focus:outline-none ">
            <a
              target="_blank"
              href="https://twitter.com/fomocraft"
              className="  inline-flex items-center px-5 py-2  backdrop-opacity-10 hover:bg-blue-900 hover:bg-opacity-30  index-button1-border mb-4 mx-auto inline-flex items-center px-5 py-2 text-base rounded-full text-white inconsolata   rounded-full shadow-sm text-white  ">
              Follow us
              <svg className="h-6 w-6 ml-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      <p className="mt-8 text-center text-base text-white">
        &copy; 2021 Fomocraft, Inc. All rights reserved.
      </p>
    </div>
  </footer>
  )
}