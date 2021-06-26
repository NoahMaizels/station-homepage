/* This example requires Tailwind CSS v2.0+ */
import { SparklesIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import substation from 'public/substation.png'
import balancer from 'public/balancer.png'

export default function Network() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden ">
      <div className="relative">
        <div className="mx-auto lg:max-w-5xl max-w-xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense mb-20">
          <div className=" ">
            <div>
              <div className="mt-6">
                <h2 className="text-4xl font-extrabold font-gilroy text-secondary tracking-tight text-gray-900">
                  A Network of Substations
                </h2>
                <p className="mt-4 text-md font-open-sans text-gray-500">
                Users across networks interact via their chain’s SubStation. Asset swaps are processed using THORChain cross-chain liquidity swaps. Station then sends instructions to complete the transaction to the SubStation to the native chain for the derivative being purchased.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 col-span-2">
            <div className="">
              <div className="">
                <Image 
                    src={substation}
                  
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mx-auto px-4 lg:max-w-5xl max-w-xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense flex flex-col-reverse">
        <div className="mt-12 sm:mt-16 lg:mt-0 col-span-2">
            <div className="">
              <div className="">
                <Image 
                    src={substation}
                  
                />
              </div>
            </div>
          </div>
          
          <div className=" ">
            <div>
              <div className="mt-6">
                <h2 className="text-4xl font-extrabold font-gilroy tracking-tight text-secondary">
                  Stay on top of customer support
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada
                  faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis
                  sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}
