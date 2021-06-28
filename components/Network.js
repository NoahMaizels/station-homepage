/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import substation from 'public/substation.jpg'
import balancer from 'public/balancer.jpg'

export default function Network() {
  return (
    <div id="howitworks" className="relative bg-gray-50 pt-16 pb-32 overflow-hidden ">
      <div className="relative">
        <div className="mx-auto lg:max-w-5xl max-w-xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense mb-20">
          <div className=" ">
            <div>
              <div className="mt-6">
                <h2 className="text-5xl font-extrabold font-gilroy text-secondary tracking-tight text-gray-900">
                  A Network of Substations
                </h2>
                <p className="mt-4 text-sm font-open-sans text-gray-500">
                  Users across networks interact via their chain’s SubStation. Asset swaps are
                  processed using THORChain cross-chain liquidity swaps. Station then sends
                  instructions to complete the transaction to the SubStation to the native chain for
                  the derivative being purchased.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 col-span-2">
            <div className="">
              <div className="">
                <Image quality={25} src={substation} />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto px-4 lg:max-w-5xl max-w-xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense flex flex-col-reverse">
          <div className="mt-12 sm:mt-16 lg:mt-0 col-span-2 pr-5">
            <div className="">
              <div className="">
                <Image src={balancer} />
              </div>
            </div>
          </div>

          <div className=" ">
            <div>
              <div className="mt-6">
                <h2 className="text-5xl font-extrabold font-gilroy tracking-tight text-secondary">
                  Balancer V2 liquidity
                </h2>
                <p className="mt-4 text-sm font-open-sans text-gray-500">
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
