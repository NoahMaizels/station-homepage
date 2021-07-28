const quarters = ['Q3', 'Q4', 'Q1']
const Q1 = () => (
  <>
    <li className="text-left text-gray-200 pb-2 text-xs font-open-sans">
      Integrate SubStations onto the mainnets of:
    </li>
    <ul>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-xs font-open-sans">Polygon</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-xs font-open-sans">Polkadot</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-xs font-open-sans">Solana</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-6 pl-5 text-xs font-open-sans">Terra</li>
    </ul>
    <li className="text-left text-gray-200 pb-2 text-xs font-open-sans">
      Debut multi-chain front-end for Station V2.
    </li>
  </>
)

const Q4 = () => (
  <>
    <li className="text-left text-gray-200 pb-2 text-xs font-open-sans">BSC integration.</li>
    <li className="text-left text-gray-200 pb-2 text-xs font-open-sans">
      Testnet SubStations on Polygon, Polkadot, Solana, Terra.
    </li>
    <li className="text-left text-gray-200 pb-2 text-xs font-open-sans">
      Cross-chain purchases enabled for testnet SubStations.
    </li>
  </>
)

const Q3 = () => (
  <>
    <li className="text-left text-gray-200 pb-2 text-xs font-open-sans">
      Station V1 single-chain integrates Ethereum derivatives platforms including:
    </li>
    <ul>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-xs font-open-sans">Premia</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-xs font-open-sans">Hegic</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-xs font-open-sans">Opyn</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-xs font-open-sans">Auctus</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-1 pl-5 text-xs font-open-sans">Hedget</li>
      <img
        className="absolute transform translate-x-1 translate-y-2"
        width={12}
        alt="check"
        src="checkmark.svg"></img>
      <li className="text-gray-200 pb-6 pl-5 text-xs font-open-sans">Opium</li>
    </ul>
    <li className="text-left text-gray-200 pb-5 text-xs font-open-sans">
      THORChain integration to enable Cross-Asset Purchases.
    </li>
    <li className="text-left text-gray-200 pb-5 text-xs font-open-sans">
      Smart Order Routing via both Thorchain & Balancer v2.
    </li>
  </>
)

export default function Roadmap() {
  return (
    <div id="roadmap" className="py-16 sm:py-24 pl-4 lg:py-32 bg-light">
      <div className="max-w-4xl mx-auto bg-pyramid bg-right bg-top bg-contain bg-no-repeat">
        {/* Horizontal heading */}
        <h1 className=" md:pl-5 pl-0 max-w-4xl mx-auto md:text-left text-center text-gray-200 text-4xl font-gilroy font-extrabold">
          Roadmap
        </h1>
        <div className="md:h-20"></div>

        <div className="md:h-80 sm:h-64 h-44"></div>
        <div className="px-5">
          <div className="md:flex max-w-4xl mx-auto  flex-row hidden mb-10 mx-auto">
            {quarters.map((quarter) => (
              <div key={quarter} className="px-4 mt-20 border-t-4 border-white h-2 w-full">
                <img
                  alt="line"
                  className="absolute -translate-y-4 translate-x-0 transform"
                  width="40"
                  src="triangle.webp"
                />
                <h2 className="absolute transform -translate-y-24 translate-x-0 text-primary font-gilroy text-4xl font-extrabold">
                  {quarter}
                  <span className="font-extralight">{quarter === 'Q1' ? ' 2022' : ''}</span>
                </h2>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 gap-y-0 md:gap-y-10 md:max-w-4xl md:mx-auto max-w-sm mx-auto ">
            {quarters.map((quarter) => (
              <div
                className="px-4 roadmap-section border-l-4 md:border-l-0 border-white ml-2 md:mx-auto h-full pb-12 max-w-sm md:pt-0 pt-16"
                key={quarter}>
                <img
                  alt="line"
                  className={`-translate-y-5 md:hidden -translate-x-10 -rotate-90 transform`}
                  width="40"
                  src="triangle.webp"
                />
                <div className="pb-4 flex h-full flex-col justify-start bg-dark rounded-lg pt-6 ">
                  <p
                    className={`absolute transform md:-translate-y-6 md:-translate-x-32 -translate-y-20 translate-x-1 font-extrabold md:text-4xl text-3xl text-primary font-gilroy md:hidden`}>
                    {quarter}
                  </p>
                  <p
                    className={`${
                      quarter !== 'Q1' ? 'hidden' : ''
                    } absolute transform  md:-translate-x-40 -translate-y-20 translate-x-14 font-extralight md:text-4xl text-3xl  text-primary font-gilroy md:hidden`}>
                    2022
                  </p>
                  <ul className="list-disc pl-10 pr-8 pb-0 pt-3 h-full">
                    {quarter === 'Q3'
                      ? Q3()
                      : quarter === 'Q4'
                      ? Q4()
                      : quarter === 'Q1'
                      ? Q1()
                      : ''}
                  </ul>
                </div>
              </div>
            ))}
          </div>
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
