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
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-5xl">
        <p className="mt-2 max-w-2xl font-gilroy mx-auto font-extrabold text-secondary tracking-tight text-5xl">
          Station Finance is the 1inch of decentralized derivatives platforms.
        </p>
        <p className="mt-5 font-open-sans text-sm max-w-prose mx-auto text-gray-500">
          We ensure best pricing for decentralized derivatives from a variety of DeFi options
          platforms. With further integrations planned.
        </p>
        <div className="mt-12">
          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <div key={platform.name} className=" ">
                <div className="mx-auto flex flex-col justify-between py-16 bg-gray-50 rounded-lg  md:w-72 md:h-72 w-64 h-64">
                  <img
                    className="mx-auto pb-6"
                    width="120"
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
          <p className="mt-20 italic max-w-prose mx-auto text-sm text-gray-500">
            With further integrations in the pipeline.
          </p>
        </div>
      </div>
    </div>
  )
}
