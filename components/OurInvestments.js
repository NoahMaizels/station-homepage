 

const projects = [
  {
    name: 'Finxflo',
    description: "The World's First Hybrid Liquidity Aggregator Regulated and secure, FXF’s platform is designed to offer best rates and prices from the world’s leading CeFi and DeFi protocols through one connection, one account and one KYC process.",
    imageUrl:
    'card-fxf.png',
    url: 'https://mantradao.com/',
  },
  {
    name: 'Launchpool',
    description: "A token launchpad offering the hottest new DeFi tokens to all LPOOL holders through their unique distribution mechanism built from the ground up to maximize fairness and accessibility.",
    imageUrl:
'card-lpool.png',
    url: 'https://launchpool.xyz/',
  }, {
    name: 'Royale.Finance',
    description: "Royale is a cross-chain De-Fi solution for the iGaming industry. Our user-centric platform creates Web 3.0 smart-backed liquidity that allows iGaming entrepreneurs to bootstrap innovation with the security and transparency of the blockchain.",
    imageUrl:
'card-roya.png',
    url: 'https://royale.finance/',
  },
  {
    name: 'MANTRA DAO',
    description: "MANTRA DAO is a community-governed DeFi platform focusing on Staking, Lending, and Governance. MANTRA DAO leverages the wisdom of the crowd to create a community-governed, transparent, and decentralized ecosystem for web 3.0.",
    imageUrl:
    'card-om.png',
    url: 'https://mantradao.com/',
  },
  {
    name: 'Polkastarter',
    description: "Polkastarter is a Protocol built for cross-chain token pools and auctions, enabling projects to raise capital on a decentralized and interoperable environment based on Polkadot.",
    imageUrl:
    'card-pols.png',
    url: 'https://polkastarter.com/',
  },
  
]
export default function OurWork() {
  return (
    <div className="mt-60 px-4">
      <h3 className="text-4xl font-bold text-center text-white">Our work speaks for itself.</h3>
      <h4 className=" mx-auto max-w-prose  text-lg my-16 text-center text-white">We’ve worked with some of the largest DeFi projects in the world to increase sales, create buzz, acquire users, and grow their online community.</h4>

      {/* <div className="mx-auto py-12 lg:max-w-7xl max-w-2xl lg:py-24"> */}
     
        <div className="max-w-5xl mx-auto grid justify-items-center sm:grid-cols-2  lg:grid-cols-3 md:grid-cols-2 ">
          {projects.map((project) => (
            
            <div  style={{backgroundImage: `url(${project.imageUrl})`}} className="w-11/12 border-2 border-gray-500 bg-top bg-no-repeat bg-auto bg-contain rounded-2xl dark-blue-background pb-8 mb-10">
            {/* w-80 lg:w-80 sm:w-72  xl:w-96  */}
              <div key={project.name} className="mb-3 mx-auto rounded-t-2xl  flex flex-col justify-end block bg-center bg-cover h-44 lg:h-48  text-left"
                   >
                
                    <div className="p-4 font-medium text-2xl leading-6 space-y-1">
                     </div>                     
              </div>
            
            
        
            
              <h3 className="text-3xl px-4 font-bold text-primary ">{project.name}</h3>
              {/* w-80 lg:w-80 xl:w-96 sm:w-72 */}
              <div className="text-sm mt-5 px-4 text-white   text-left">
                {project.description}
              </div>
              <a target="_blank" href={project.url} className=" ">
                <h3  className="hover:underline font-bold px-4 pt-2 text-primary ">
                  <span>Learn more</span>
                </h3>
              </a>
            


            </div>
            
          ))}
        </div>
       
      {/* </div> */}
      <style jsx>{`
         .dark-blue-background {
           background-color: #021633;
         }
      `}</style>
    </div>
  )
}
