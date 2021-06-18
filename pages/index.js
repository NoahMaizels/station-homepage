import Head from 'next/head';
import Navbar from 'components/Navbar';
import IndexCTA from 'components/IndexCTA';
import Footer from 'components/Footer';
import Link from 'components/Link';
import Image from 'next/image'




export default function Home() {
  return (

    <div className="">
      <div className="bg-landing bg-center bg-cover bg-no-repeat">
        <Head>
          <title>Station</title>
        </Head>
        {/* This example requires Tailwind CSS v2.0+ */}
        <div className="py-20  bg-center bg-cover bg-no-repeat ">
          <div className="relative overflow-hidden ">

            <div className="relative pt-6 pb-16 sm:pb-24">

              <main className="mt-16 mx-auto max-w-4xl px-4 sm:mt-54">
                <div className="text-center">

                <div className="w-96 mx-auto mb-24">
                  <img src="/logo03.png"  />
                </div>

                      <h2 className="text-4xl inconsolata font-bold mt-10 mb-20 text-white">
                      The world's first cross-chain defi derivatives aggregator. 

              </h2>
 
             
            </div>
          </main>
        </div>
      </div>
</div>




                </div>
                <div className=" bg-gradient bg-cover bg-center  relative pt-32 pb-40">
                  <div className="mx-auto text-center lg:max-w-6xl sm:max-w-7xl">
                    <div className="px-6">
                      <h2 className="text-4xl font-black inconsolata  text-white">Purpose driven growth.</h2>
                      <p className="mt-8 mx-auto text-lg text-white  lg:max-w-3xl">
                        Fomocraft is more than a name - crafting FOMO is what we do!
          </p>
                    </div>
                    <div className="mt-12">
                      {/* grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 */}
                      <div className="px-4 overflow-hidden  md:flex-row md:max-w-3xl mx-auto flex-wrap flex flex-col">

                        <div className="pt-12 my-6 h-80 max-w-xs mx-auto flow-root border-2 border-gray-600 bg-about1 bg-cover bg-no-repeat rounded-3xl">
                          <div className=" px-6">
                            <h3 className="text-3xl  inconsolata font-bold text-primary ">Marketing</h3>
                            <p className="tracking-tight mt-5 text-white text-sm">
                              With dozens of successful token launches under our belt, we’re intimate with all the ins and outs of crypto marketing. As the industry changes at light speed, so do we.
                  </p>
                          </div>
                        </div>

                        <div className="pt-12 my-6 h-80 max-w-xs  mx-auto flow-root border-2 border-gray-600 bg-about2 bg-cover bg-no-repeat rounded-3xl">
                          <div className=" px-6">
                            <h3 className="text-3xl  inconsolata font-bold text-primary ">Strategy</h3>
                            <p className="tracking-tight mt-5 text-sm text-white">
                              Many years of experience across all facets of the blockchain industry provide us  unparalleled insight into crafting a comprehensive integrated marketing plan.
                              
                    </p>
                          </div>
                        </div>

                        <div className="pt-12 my-6 h-80 max-w-xs mx-auto flow-root bg-about3 border-2 border-gray-500 bg-cover bg-no-repeat rounded-3xl">
                          <div className=" px-6">
                            <h3 className="text-3xl  inconsolata font-bold text-primary ">Network</h3>
                            <p className="tracking-tight mt-5 text-sm text-white">
                              Our valuable partners all across the planet - crypto funds, influencers, community builders, media partners, content creators, etc. - help grow successful global brands.
                   </p>
                          </div>
                        </div>

                        <div className="pt-12 my-6 h-80 max-w-xs mx-auto flow-root bg-about3 bg-about4 border-2 border-gray-500 bg-cover bg-no-repeat rounded-3xl">
                          <div className=" px-6">
                            <h3 className="text-3xl   inconsolata font-bold text-primary ">Investment</h3>
                            <p className="tracking-tight mt-5 text-sm text-white">
                              We take seed positions in the most promising blockchain technology in the industry, with an eye toward game-changing DeFi platforms. <Link href="portfolio"><a className="underline">See our portfolio.</a></Link>
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
          
     </div>
  );
}
