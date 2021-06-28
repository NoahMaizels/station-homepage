 
const quarters = ['Q3', 'Q4', 'Q1']

const Q4 = () => (
  <>
    <li className="text-left text-gray-200 pb-2 text-base font-open-sans">
      Integrate SubStations onto the mainnets of:
    </li>
    <ul>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-base font-open-sans">Polygon</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-base font-open-sans">Polkadot</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-base font-open-sans">Solana</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-6 pl-5 text-base font-open-sans">Terra</li>
    </ul>
    <li className="text-left text-gray-200 pb-2 text-base font-open-sans">
      Debut multi-chain front-end for Station V2.
    </li>
  </>
)

const Q1 = () => (
  <>
    <li className="text-left text-gray-200 pb-2 text-base font-open-sans">BSC integration.</li>
    <li className="text-left text-gray-200 pb-2 text-base font-open-sans">
      Testnet SubStations on Polygon, Polkadot, Solana, Terra.
    </li>
    <li className="text-left text-gray-200 pb-2 text-base font-open-sans">
      Cross-chain purchases enabled for testnet SubStations.
    </li>
    <li className="text-left text-gray-200 pb-2 text-base font-open-sans">
      Station V2 native chain Testnet
    </li>
  </>
)

const Q3 = () => (
  <>
    <li className="text-left text-gray-200 pb-2 text-base font-open-sans">
      Station V1 single-chain integrates Ethereum derivatives platforms including:
    </li>
    <ul>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-base font-open-sans">Premia</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-base font-open-sans">Hegic</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-base font-open-sans">Opyn</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-base font-open-sans">Auctus</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-base font-open-sans">Hedget</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-6 pl-5 text-base font-open-sans">Opium</li>
    </ul>
    <li className="text-left text-gray-200 pb-5 text-base font-open-sans">
      THORChain integration to enable Cross-Asset Purchases.
    </li>
    <li className="text-left text-gray-200 pb-5 text-base font-open-sans">
      Smart Order Routing via both Thorchain & Balancer v2.
    </li>
  </>
)

export default function Roadmap() {
  return (
    <div id="roadmap" className="bg-light py-16 sm:py-24 lg:py-32 pb-36 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="sm:text-left text-center pb-5 text-gray-200 text-5xl font-gilroy font-extrabold">
          Roadmap
        </h1>
      </div>
      <div className="mx-auto max-w-5xl bg-pyramid bg-right bg-top bg-contain bg-no-repeat">
        <div className="sm:h-72 h-64"></div>
        <div className="md:h-36"></div>
        {/* Horizontal heading */}
        <div className="md:flex flex-row hidden mb-10 mx-auto">
          {quarters.map((quarter) => (
            <div key={quarter} className="mt-20 border-t-8 border-white h-2 w-full">
              <img
                alt="line"
                className="absolute -translate-y-5 translate-x-0 transform"
                width="50"
                src="triangle.png"
              />
              <h2 className="absolute transform -translate-y-24 translate-x-0 text-primary font-gilroy text-5xl font-extrabold">
                {quarter}
                <span className="font-extralight">{quarter === 'Q1' ? ' 2022' : ''}</span>
              </h2>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-3 gap-y-0 md:gap-y-10 md:max-w-5xl max-w-lg pr-4 md:w-full w-96 mx-auto ">
          {quarters.map((quarter) => (
            <div
              className={`roadmap-section border-l-8 md:border-l-0 border-white md:mx-auto ml-2 pl-8 h-full pb-10 max-w-md md:pr-8 md:ml-0 md:pl-0 md:pt-0 pt-10`}
              key={quarter}>
              <img
                alt="line"
                className={`-translate-y-4 md:hidden -translate-x-14 -rotate-90 transform`}
                width="50"
                src="triangle.png"
              />
              <div className="flex h-full flex-col justify-start bg-dark rounded-lg pt-6  ">
                <p
                  className={`absolute transform md:-translate-y-6 md:-translate-x-32 -translate-y-20 translate-x-1 font-extrabold md:text-5xl text-4xl text-primary font-gilroy md:hidden`}>
                  {quarter}
                </p>
                <p
                  className={`${
                    quarter !== 'Q1' ? 'hidden' : ''
                  } absolute transform  md:-translate-x-40 -translate-y-20 translate-x-14 font-extralight md:text-5xl text-4xl  text-primary font-gilroy md:hidden`}>
                  2022
                </p>
                <ul className="list-disc pl-10 pr-8 pb-16 pt-3 h-full">
                  {quarter === 'Q3' ? Q3() : quarter === 'Q4' ? Q4() : quarter === 'Q1' ? Q1() : ''}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .roadmap-section {
            min-width: 180px;
          }
        `}
      </style>
    </div>
  )
}
