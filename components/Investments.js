import Link from 'components/Link'

export default function Investments() {
  let investments = [
    {
      title: "Thorchain",
      token: "(RUNE)",
      alt: "Thorchain (RUNE)",
      source: "ventures_logos/01thorchain.png",
      link: "https://thorchain.org/"
    },
    {
      title: "Wootrade Network",
      token: "(WOO)",
      alt: "Wootrade Network (WOO)",
      source: "ventures_logos/02wootrade.png",
      link: "https://woo.network/"
    },
    {
      title: "Finxflo",
      token: "(FXF)",
      alt: "Finxflo (FXF)",
      source: "ventures_logos/03finxflo.png",
      link: "https://www.finxflo.com/"
    },
    {
      title: "Unizen",
      token: "(ZCX)",
      alt: "Unizen (ZCX)",
      source: "ventures_logos/04unizen.png",
      link: "https://unizen.io/"
    },
    {
      title: "Cryptocurrencies.ai",
      token: "(CCAI)",
      alt: "Cryptocurrencies.ai (CCAI)",
      source: "ventures_logos/05ccai.png",
      link: " https://cryptocurrencies.ai/"
    },
    {
      title: "HXRO",
      token: "HXRO",
      alt: "HXRO",
      source: "ventures_logos/07hxro.png",
      link: "https://hxro.io/"
    },
    {
      title: "Hegic",
      alt: "Hegic",
      source: "ventures_logos/hegic.png",
      link: "https://www.hegic.co/"
    },
    {
      title: "Solana",
      token: "(SOL)",
      alt: "Solana (SOL)",
      source: "ventures_logos/06solana.png",
      link: "https://solana.com/"
    },
    {
      title: 'Polygon',
      source: 'ventures_logos/20polygon.png',
      link: 'https://polygon.technology/',
    },
    {
      title: 'Terra',
      source: 'ventures_logos/21terra.png',
      link: 'https://www.terra.money/',
    },
    {
      title: 'Polkadot',
      source: 'ventures_logos/22polkadot.png',
      link: 'https://polkadot.network/',
    }, 
    {
      title: 'Kusama',
      source: 'ventures_logos/23kusama.png',
      link: 'https://kusama.network/',
    },
      
    {
      title: "Polkastarter",
      token: "(POLS)",
      alt: "Polkastarter",
      source: "pols-white.png",
      link: "https://polkastarter.com/"
    },
    {
      title: "PolkaFoundry",
      token: "(PKF)",
      alt: "PolkaFoundry (PKF)",
      source: "ventures_logos/09polkafoundry.png",
      link: "https://polkafoundry.com/"
    },
    {
      title: "MANTRA DAO",
      token: "(OM)",
      alt: "MANTRA DAO (OM)",
      source: "ventures_logos/10mantradao.png",
      link: "https://mantradao.com/"
    },
    {
      title: 'Minterest',
      source: 'ventures_logos/25minterest.png',
      link: 'https://minterest.com/',
    },
    {
      title: "Royale Finance",
      token: "ROYA",
      alt: "ROYA",
      source: "ventures_logos/08royale.png",
      link: "https://royale.finance/"
    },
     
    
    {
      title: "Aubit (FWT)",
      token: "(FWT)",
      alt: "Aubit (FWT)",
      source: "ventures_logos/11aubit.png",
      link: "https://aubit.io/"
    },
    {
      title: "Launchpool",
      token: "(LPOOL)",
      alt: "Launchpool (LPOOL)",
      source: "ventures_logos/12launchpool.png",
      link: "https://launchpool.xyz/"
    },
    {
      title: "Genshards",
      token: "Genshards",
      alt: "Genshards",
      source: "ventures_logos/13genshards.png",
      link: "https://www.genshards.com/"
    },   
    {
      title: "Ethernity",
      token: "(ERN)",
      alt: "Ethernity (ERN)",
      source: "ventures_logos/14ethernity.png",
      link: "https://ethernity.io/"
    },  
    {
      title: "Ethermon",
      token: "(EMONT)",
      alt: "Ethermon (EMONT)",
      source: "ventures_logos/15ethermon.png",
      link: "https://ethermon.io/"
    },
    {
      title: "Gamee",
      token: "(GAMEE)",
      alt: "Gamee (GAMEEE)",
      source: "ventures_logos/16gamee.png",
      link: " https://www.gamee.com/"
    },
    {
      title: "Nftify",
      token: "(nftify)",
      alt: "Nftify",
      source: "ventures_logos/17nftify.png",
      link: "https://nftify.network/"
    },
    {
      title: "Showcase",
      token: "(Showcase)",
      alt: "Showcase (SHO)",
      source: "ventures_logos/18showcase.png",
      link: "https://showcase.to/"
    },
    {
      title: "Wasder",
      token: "(WAS)",
      alt: "Wasder (WAS)",
      source: "ventures_logos/19wasder.png",
      link: "https://wasder.gg/"
    },
    
    {
      title: 'Faraland',
      source: 'faraland.png',
      link: 'https://faraland.io/',
    },
  
    {
      title: 'Equifi',
      source: 'ventures_logos/24equifi.png',
      link: 'https://eqifi.com/',
    },

    {
      title: 'Manifold',
      source: 'ventures_logos/manifold.png',
      link: 'https://www.manifoldfinance.com/',
    },
    {
      title: 'UnoRe',
      source: 'ventures_logos/27unore.png',
      link: 'https://unore.io/',
    },
    {
      title: 'Gains Associates',
      source: 'ventures_logos/28gains.png',
      link: 'https://www.gains-associates.com/',
    },
    {
      title: 'Bacon DAO',
      source: 'ventures_logos/28bacondao.png',
      link: 'https://bacondao.com/',
    },
    {
      title: 'BTC Proxy',
      source: 'ventures_logos/29btcproxy.png',
      link: 'https://btcpx.io/',
    },
    {
      title: 'Sator',
      source: 'ventures_logos/30sator.png',
      link: 'https://www.sator.io/',
    },

  
    
   

  ] 
  return (
    <div className="">
      <div>
          <img 
          src="ventures.png"
          className="ventures-logo w-96 mx-auto mt-60 mb-40 "
        />

        
           <div>
          <div className= "mx-auto  max-w-2xl lg:max-w-4xl 2xl:max-w-6xl xl:max-w-5xl grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4 gap-x-0">
          {investments.map((investment) => (
         
              <a target="_blank" className="flex flex-grow-0 items-center  h-28 my-auto flex-col justify-center w-10/12  justify-self-center" href={investment.link}>
                 <img                  className=" align-self-start max-h-20"
                  src={investment.source}
                  alt={investment.alt}
                />
           
              </a>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}
