import Image from 'next/image'

const platforms = [
  { name: 'Hegic', image: '/platform-hegic.webp' },
  { name: 'Opyn', image: '/platform-opyn.webp' },
  { name: 'Auctus', image: '/platform-auctus.webp' },
  { name: 'Hedget', image: '/platform-hedget.webp' },
  { name: 'Opium', image: '/platform-opium.webp' },
  { name: 'Premia', image: '/platform-premia.webp' }
]

export default function Platforms() {
  return (
    <div className="relative bg-platforms py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-4xl">
        <p className="max-w-4xl font-gilroy mx-auto font-extrabold text-secondary tracking-tight text-4xl">
          Station Finance is the 1inch of decentralized derivatives platforms.
        </p>
        <p className="mt-8  font-open-sans text-base max-w-prose mx-auto text-gray-700">
          We ensure best pricing for decentralized derivatives from a variety of DeFi options
          platforms.
        </p>
        <div className="mt-20">
          <div className="mx-auto sm:max-w-xl lg:max-w-4xl grid grid-cols-1  lg:gap-y-8 lg:gap-x-0 md:gap-y-6 gap-y-12  md:gap-x-0 sm:gap-x-0 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <div key={platform.name} className="">
                <div className="mx-auto justify-between py-10 bg-gray-50 rounded-lg w-64 h-56">
                  <Image
                    className="mx-auto pb-6"
                    priority
                    width={platform.name === 'Auctus' || platform.name === 'Hegic' ? '115' : '90'}
                    height={
                      platform.name === 'Auctus' ? '78' : platform.name === 'Hegic' ? '115' : '80'
                    }
                    alt={platform.name}
                    src={platform.image}
                  />
                  <p className="font-gilroy justify-self-end text-secondary font-extrabold text-xl">
                    {platform.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-20 font-open-sans text-base max-w-prose mx-auto text-gray-700">
            With further integrations in the pipeline.
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .bg-platforms {
            background-color: #ebecf0;
          }
        `}
      </style>
    </div>
  )
}
