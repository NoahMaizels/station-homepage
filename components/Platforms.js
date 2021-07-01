const platforms = [
  { name: 'Hegic', image: 'platform-hegic.png' },
  { name: 'Opyn', image: 'platform-opyn.png' },
  { name: 'Auctus', image: 'platform-auctus.png' },
  { name: 'Hedget', image: 'platform-hedget.png' },
  { name: 'Opium', image: 'platform-opium.png' },
  { name: 'Premia', image: 'platform-premia.png' }
]

export default function Platforms() {
  return (
    <div className="relative bg-gray-300 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="max-w-2xl font-gilroy mx-auto font-extrabold text-secondary tracking-tight text-5xl">
          Station Finance is the 1inch of decentralized derivatives platforms.
        </p>
        <p className="mt-5 font-open-sans text-lg max-w-prose mx-auto font-bold text-gray-500">
          We ensure best pricing for decentralized derivatives from a variety of DeFi options
          platforms.
        </p>
        <div className="mt-12">
          <div className="mx-auto sm:max-w-xl lg:max-w-4xl grid grid-cols-1  lg:gap-y-8 lg:gap-x-0 md:gap-y-6 gap-y-8  md:gap-x-0 sm:gap-x-0 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <div key={platform.name} className="">
                <div className="mx-auto flex flex-col justify-between py-10 bg-gray-50 rounded-lg w-64 h-56">
                  <img
                    className="mx-auto pb-6"
                    width="90"
                    alt={platform.name}
                    src={platform.image}
                  />
                  <p className="font-gilroy justify-self-end text-secondary font-extrabold text-2xl">
                    {platform.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-20 font-open-sans text-lg max-w-prose mx-auto font-bold text-gray-500">
            With further integrations in the pipeline.
          </p>
        </div>
      </div>
    </div>
  )
}
