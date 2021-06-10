import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Features from 'components/Features';
import OurWork from 'components/OurWork';

 



export default function About() {
  
const features = [
  {
    name: 'Intimate With Launchpads',
    description:
<div>We know the best launchpads because we literally helped build them:<ul>
<li>• Polkastarter</li>
<li>• Launchpool</li>
<li>• MANTRA DAO Zendit</li>
<li>• Gumpad</li> 
<li>• Genesis Shards</li>
<li>• PolkaFoundry’s RedKite</li>

</ul></div>,
    icon: 'feature_icon4.png',
  },
  {
    name: 'Blitz Launch',
    description:
'We have experience in delivering multiple projects that have enjoyed 30x-plus price jumps upon listing. Our clients bring us in for the three to five weeks surrounding their TGE and we kill it for them.',
    icon: 'feature_icon3.png',
  },
  {
    name: 'Token Value Capture (Circular Token Economy Creation)',
    description:
'The crypto industry has matured. Tokens need to be used or they will be sold. Our team specializes in creating innovative token sinks and long-term cryptoeconomic structures that drive value directly into your token.',
    icon: 'feature_icon1.png',
  },
  {
    name: 'Partner Network',
    description:
'We draw from our vast partner network to match projects with influencers, technology and media partners, and other value added strategic investors.',
    icon: 'feature_icon6.png',
  },
  {
    name: 'Blitz Community Building & Influencer Outreach',
    description:
'Our influencer and community builders network spans the globe, ensuring that your project gets quick access to many large communities so that your newly listed token enjoys 24/7 social media coverage throughout the most critical period of building brand awareness.',
    icon: 'feature_icon5.png',
  },
  {
    name: 'Tokenomics Design',
    description:
'Every crypto project is different. Some demand fully fair unlocks. Others require long term vesting schedules to ensure key parties maintain their involvement. Still others require bespoke tranches. Fomocraft has the experience to develop robust tokenomics that protect the value of your token.',    icon: 'feature_icon2.png',
  },



]
  return (
    <div className="bg-gradient bg-cover bg-center">
      <Head>
        <title>Fomocraft</title>
      </Head>
       {/* This example requires Tailwind CSS v2.0+ */}
<div className="relative  pt-16 sm:pt-24 lg:pt-32">
  <div className="mx-auto px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
    <p className="mb-20 max-w-4xl   mx-auto text-4xl inconsolata font-black text-white ">
    Craft the FOMO.
    </p>
  </div>


<Features features={features}></Features>
<OurWork></OurWork>
{/* FOOTER */}
     </div>
    </div>
  );
}
