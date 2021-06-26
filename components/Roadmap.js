const roadmapItems = [
  {
    name: 'AUGUST',
    items: [
      'Station V1 single-chain Ethereum derivatives aggregator.',
      'Premia, Hegic, Opyn, Auctus, Hedget, Opium'
    ],
    order: 'order-1'
  },
  {
    name: 'OCTOBER',
    items: ['BSC Expansion.'],
    order: 'order-3'
  },
  {
    name: '',
    items: [
      'Integrate SubStations onto the mainnets of Polygon, Polkadot, Solana, and Terra.',
      'Debut multi-chain front-end for Station V2.'
    ],
    order: 'order-6'
  },
  {
    name: 'SEPTEMBER',
    items: [
      'THORChain for Cross-Asset Purchases.',
      'Smart Order Routing via both Thorchain & Balancer v2.'
    ],
    order: 'order-2'
  },

  {
    name: 'NOVEMBER',
    items: [
      'Testnet SubStations on Polygon, Polkadot, Solana, Terra.',
      'Cross-chain purchases enabled for testnet SubStations.'
    ],
    order: 'order-4'
  },
  {
    name: 'DECEMBER',
    items: ['Station V2 Testnet'],
    order: 'order-5'
  }
]

const quarters = ['Q3', 'Q4', 'Q1']
const triangleCss = (month) => {
  let css = 'absolute '
  if (['AUGUST', 'OCTOBER', 'DECEMBER'].includes(month)) {
    console.log(month)
    css = css.concat('md:hidden')
  }
  if (month === '') {
    css = css.concat('sm:hidden')
  }
  if (month === 'SEPTEMBER') {
    css = css.concat('hidden')
  }
  if (month === 'NOVEMBER') {
    css = css.concat('hidden')
  }
  return css
}
export default function Roadmap() {
  return (
    <div className="bg-light md:px-10 px-4">
      <div className="mx-auto max-w-5xl bg-pyramid bg-center bg-top bg-contain bg-no-repeat">
        <div className="md:h-96 h-72"></div>
        <div className="md:h-44 h-0"></div>
        <div className="md:flex flex-row hidden mb-20 mx-auto">
          {quarters.map((quarter) => (
            <div key={quarter} className="mt-20 border-t-8 border-white h-2 w-full">
              <img
                alt="line"
                className="absolute -translate-y-5 transform"
                width="50"
                src="triangle.png"
              />
              <h2 className="absolute transform -translate-y-24 translate-x-2 text-primary font-gilroy text-5xl font-extrabold">
                {quarter}
                <span className="font-thin">{quarter === 'Q1' ? ' 2022' : ''}</span>
              </h2>
            </div>
          ))}
        </div>

        <div className="md:mx-auto ml-20 sm:grid flex flex-col md:max-w-5xl max-w-lg md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-3">
          {roadmapItems.map((month) => (
            <div
              className={`
              ${month.order}
              ${['AUGUST', 'SEPTEMBER'].includes(month.name) ? 'md-pt:0 sm:pt-20 pt-0' : ''}
              ${
                ['AUGUST', 'OCTOBER', 'DECEMBER'].includes(month.name)
                  ? 'border-l-8 md:border-l-0 border-white'
                  : ''
              }  
              ${
                ['SEPTEMBER', 'NOVEMBER', ''].includes(month.name)
                  ? 'border-l-8 sm:border-l-0 border-white'
                  : ''
              }
              ${month.name === 'AUGUST' ? 'pt-16 ' : ''}
              mx-auto w-full md:pr-8 md:ml-0 md:pl-0 pl-8 md:pt-0 pb-6`}
              key={month.name}>
              <h2
                className={`${
                  month.name === '' ? 'hidden' : ''
                } md:hidden absolute transform -translate-y-1 -translate-x-28 text-primary font-gilroy text-4xl font-extrabold`}>
                {month.name === 'AUGUST'
                  ? 'Q3'
                  : month.name === 'OCTOBER'
                  ? 'Q4'
                  : month.name === ''
                  ? 'Q1'
                  : month.name === 'DECEMBER'
                  ? 'Q1'
                  : ''}
                <p className="font-thin text-3xl mt-2">{month.name === '' ? ' 2022' : ''}</p>
              </h2>
              <img
                alt="line"
                className={`
                ${triangleCss(month.name)}
                -translate-y-1 -translate-x-14 -rotate-90 transform`}
                width="50"
                src="triangle.png"
              />
              <div className="flex flex-col justify-start bg-dark rounded-lg ">
                <p
                  className={`${
                    month.name ? 'pt-5' : 'pt-12'
                  } text-primary tracking-widest font-gilroy text-left pl-8 font-thin text-lg`}>
                  {month.name}
                </p>
                <ul className="list-disc pl-10 pr-8 pb-16 pt-3">
                  {month.items.map((month_item) => (
                    <li className="text-left text-gray-200 pb-5" key={month_item}>
                      {month_item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
