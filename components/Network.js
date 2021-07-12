/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import substation from 'public/substation.webp'
import balancer from 'public/balancer.webp'

export default function Network() {
  return (
    <div
      id="howitworks"
      className="relative bg-gray-50 py-16 sm:py-24 lg:py-32 overflow-hidden px-8">
      <div className="relative">
        <div className="mx-auto lg:max-w-5xl max-w-xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense mb-16 sm:mb-24 lg:mb-32">
          <div className="px-4">
            <h2 className="text-5xl font-extrabold font-gilroy text-secondary tracking-tight text-gray-900">
              A Network of SubStations
            </h2>
            <p className="mt-4 text-base font-open-sans text-gray-700">
              Users across networks interact via their chain’s SubStation. Asset swaps are processed
              using THORChain cross-chain liquidity swaps. Station then sends instructions to
              complete the transaction to the SubStation to the native chain for the derivative
              being purchased.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-0 px-6 lg:ml-6 col-span-2">
            <Image width={568} height={547} src={substation} />
          </div>
        </div>

        <div className="mx-auto lg:px-8 lg:max-w-5xl max-w-xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense flex flex-col-reverse">
          <div className="mt-12 lg:mr-10 px-6 sm:mt-16 lg:mt-0  col-span-2">
            <Image width={552} height={379} src={balancer} />
          </div>

          <div className=" ">
            <div>
              <div className="mt-6">
                <h2 className="text-5xl font-extrabold font-gilroy tracking-tight text-secondary">
                  Balancer V2 Liquidity
                </h2>
                <p className="mt-4 text-base font-open-sans text-gray-700">
                  Our Balancer V2 framework ensures that our Ethereum users can access the full
                  functionality of cross-asset and cross-chain purchasing. As an official Balancer
                  V2 launch partner, Station developers were given early access to their
                  groundbreaking V2 platform for advanced liquidity management — meaning our
                  Ethereum SubStation is already fully integrated into the Balancer Pool ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
