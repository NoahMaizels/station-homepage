import Image from 'next/image';
import thor01 from 'public/thor01.png'
import thor02 from 'public/thor02.png'

/* This example requires Tailwind CSS v2.0+ */
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/outline'

  const items = [
    { name: 'thor01', image: thor01, text: "THORChain's cross-chain mechanism makes multi-chain payments and multi-chain derivative purchases a reality."},
    { name: 'thor02', image: thor02, text: "Access multiple DeFi derivatives platforms for depth of liquidity and optimal pricing with smart order routing." },
  ]
  
  
export default function Thorchain(){

    return(
        <div className="relative bg-gray-200 pt-1 pb-16 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 className="mx-auto mt-16 pb-4 text-center max-w-sm text-4xl font-gilroy-bold text-secondary">THORChain's Cross‑chain Solution</h2>

        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase"></h2>
        
        <div className="mt-12">
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-2 ">
            {items.map((item) => (
              <div key={item.name} className="pt-6">
                <div className="flow-root rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                        <div className="bg-white items-center justify-center p-3 rounded-md shadow-lg">
                            <div className="px-20 ">
                                <Image 
                                    src={item.image}
                                />  
                            </div>
                            <p className="px-8 pb-14">{item.text}</p>
                            
                             
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
    //      <div className="bg-gray-200">

    //     <h1 className="text-center">THORChain's Cross-chain Solution</h1>
    //     <div className="mx-auto">
    //         <div className="flex mx-auto w-4xl">
    //             <div className="w-96">
    //                 <div>
    //                 <Image 
    //                     src={thor01}
    //                 />
    //                 </div>
    //                 <p>THORChain's cross-chain mechanism makes multi-chain payments and multi-chain derivative purchases a reality.</p>
    //             </div>

    //             <div className="w-72">
    //                 <div>
    //                 <Image 
    //                     src={thor02}
    //                 />                </div>
    //                 <p>Access multiple DeFi derivatives platforms for depth of liquidity and optimal pricing with smart order routing.</p>
    //             </div>
    //         </div>
    //     </div>
        
    // </div>
    )
 }