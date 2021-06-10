import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Investments from 'components/Investments';
import OurInvestments from 'components/OurInvestments';


export default function Portfolio() {


  return (
    <div className="bg-gradient bg-cover bg-center">
      <Head>
        <title>Portfolio</title>
      </Head>
 
      {/* This example requires Tailwind CSS v2.0+ */}

      {/* Section 1 */}
    <div className="relative pt-16 sm:pt-24 lg:pt-20">
      <div className="mx-auto px-4 max-w-md text-center sm:max-w-7xl sm:px-6 lg:px-8 lg:max-w-6xl">
        <p className="mt-8 mx-auto text-4xl text-white font-black inconsolata lg:max-w-6xl">
          Taking DeFi to greater heights.
        </p>
        <p className="mt-8 mx-auto max-w-prose text-lg text-white">
          Fomocraft Ventures runs parallel to our advisory work. We work closely with projects in our portfolio to guarantee they have access to all the resources and advisory services they need to succeed.
        </p>
      </div>
      <div className="mx-10">

      </div>
      <div className="px-4">

    <Investments></Investments>
      </div>

    <OurInvestments></OurInvestments>
 
    {/* FOOTER */}
     </div>
    </div>
  );
}
