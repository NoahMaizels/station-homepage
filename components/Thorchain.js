import Image from 'next/image'
import thor01 from 'public/thor01.webp'
import thor02 from 'public/thor02.webp'

const items = [
  {
    name: 'thor01',
    image: thor01,
    text: "THORChain's cross-chain mechanism makes multi-chain payments and multi-chain derivative purchases a reality."
  },
  {
    name: 'thor02',
    image: thor02,
    text: 'Access multiple DeFi derivatives platforms for depth of liquidity and optimal pricing with smart order routing.'
  }
]

export default function Thorchain() {
  return (
    <div id="overview" className="relative bg-gray-200 py-16 sm:py-24 lg:py-32 px-5 ">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-4xl">
        <h2 className="tracking-tight mx-auto pb-10 text-center max-w-md text-4xl font-extrabold font-gilroy text-secondary">
          THORChain&apos;s Cross‑chain Solution
        </h2>

        <div className="mt-12">
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-2 ">
            {items.map((item) => (
              <div key={item.name} className="h-full pt-13">
                <div className="flow-root rounded-lg pb-8">
                  <div className="-mt-6">
                    <div>
                      <div className="bg-gray-50 items-center justify-center p-3 rounded-lg">
                        <div className="mx-auto w-36 pt-10 pb-5">
                          <Image width={144} height={144} src={item.image} />
                        </div>
                        <p className="px-2 lg:px-10 sm:pb-14 text-xs text-gray-700 font-open-sans pb-6">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
