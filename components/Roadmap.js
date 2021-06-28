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
    order: 'order-3 md:order-2'
  },
  {
    name: '',
    items: [
      'Integrate SubStations onto the mainnets of Polygon, Polkadot, Solana, and Terra.',
      'Debut multi-chain front-end for Station V2.'
    ],
    order: 'order-6 md:row-start-1 md:col-start-3 sm:row-start-4 sm:col-start-1'
  },
  {
    name: 'SEPTEMBER',
    items: [
      'THORChain for Cross-Asset Purchases.',
      'Smart Order Routing via both Thorchain & Balancer v2.'
    ],
    order: 'order-2 md:order-4'
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
    order: 'order-5 md:row-start-3 md:col-start-2'
  }
]

const quarters = ['Q3', 'Q4', 'Q1']
const triangleCss = (month) => {
  let css = 'absolute '
  if (['AUGUST', 'OCTOBER'].includes(month)) {
    css = css.concat('md:hidden')
  }
  if (month === 'DECEMBER') css = css.concat('hidden')
  if (month === '') {
    css = css.concat('md:hidden')
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
    <div id="roadmap" className="bg-light pt-24 pb-36 sm:px-10 px-4">
      <div className="mx-auto max-w-5xl">
        <h1 className="sm:text-left text-center pb-5 text-gray-200 text-6xl font-gilroy font-extrabold">
          Roadmap
        </h1>
      </div>
      <div className="mx-auto max-w-5xl bg-pyramid bg-right bg-top bg-contain bg-no-repeat">
        <div className="sm:h-72 h-64"></div>
        <div className="md:h-36"></div>
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

        <div className="md:mx-auto ml-16 sm:grid flex flex-col md:max-w-5xl max-w-lg md:grid-cols-3 md:grid-rows-3 sm:grid-cols-2 sm:grid-rows-4 grid-cols-1 grid-rows-3">
          {roadmapItems.map((month) => (
            <div
              className={`
              ${month.order}
              ${['AUGUST', 'SEPTEMBER'].includes(month.name) ? 'md-pt:0 sm:pt-20 pt-0' : ''}
              ${
                ['AUGUST', 'OCTOBER', 'DECEMBER', ''].includes(month.name)
                  ? 'border-l-8 md:border-l-0 border-white'
                  : ''
              }  
              ${
                ['SEPTEMBER', 'NOVEMBER'].includes(month.name)
                  ? 'border-l-8 sm:border-l-0 border-white'
                  : ''
              }
              ${month.name === 'AUGUST' ? 'pt-16 ' : ''}
              mx-auto h-full w-full md:pr-8 md:ml-0 md:pl-0 pl-8 md:pt-0  pb-6 `}
              key={month.name}>
              <h2
                className={`${
                  month.name === 'DECEMBER'
                    ? 'hidden sm:flex'
                    : month.name === ''
                    ? 'md:hidden flex'
                    : ''
                } md:hidden absolute transform -translate-y-1 -translate-x-28 text-primary font-gilroy text-4xl font-extrabold`}>
                {month.name === 'AUGUST'
                  ? 'Q3'
                  : month.name === 'OCTOBER'
                  ? 'Q4'
                  : month.name === ''
                  ? 'Q1'
                  : ''}
                <p
                  className={`${
                    month.name === '' ? 'flex md:hidden' : ''
                  } transform -translate-x-10 translate-y-10 font-thin text-3xl mt-2`}>
                  {month.name === '' ? ' 2022' : ''}
                </p>
              </h2>
              <img
                alt="line"
                className={`
                ${triangleCss(month.name)}
                -translate-y-1 -translate-x-14 -rotate-90 transform`}
                width="50"
                src="triangle.png"
              />
              <div className="flex h-full flex-col justify-start bg-dark pt-6git a rounded-lg ">
                <p
                  className={`text-primary tracking-widest font-gilroy text-left pl-8 pt-8 font-thin text-lg`}>
                  {month.name}
                </p>
                <ul className="list-disc pl-10 pr-8 pb-16 pt-3 h-full">
                  {month.items.map((month_item) => (
                    <li
                      className="text-left text-gray-200 pb-5 text-md font-open-sans"
                      key={month_item}>
                      {month_item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          /* .bg-pyramid {
            background-size: 360px auto;
          }
          @media (min-width: 640px) {
            .bg-pyramid {
              background-size: 640px auto;
            }
          } */
        `}
      </style>
    </div>
  )
}
