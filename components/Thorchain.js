import Image from 'next/image';
import thor01 from 'public/thor01.png';
import thor02 from 'public/thor02.png';

const items = [
  {
    name: 'thor01',
    image: thor01,
    text:
      "THORChain's cross-chain mechanism makes multi-chain payments and multi-chain derivative purchases a reality."
  },
  {
    name: 'thor02',
    image: thor02,
    text:
      'Access multiple DeFi derivatives platforms for depth of liquidity and optimal pricing with smart order routing.'
  }
];

export default function Thorchain() {
  return (
    <div className="px-5 relative bg-gray-200 pt-1 pb-16 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="mx-auto mt-16 pb-4 text-center max-w-sm text-4xl font-gilroy-bold text-secondary">
          THORChain's Cross‑chain Solution
        </h2>

        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase"></h2>

        <div className="mt-12">
          <div className="mx-auto max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-2 ">
            {items.map((item) => (
              <div key={item.name} className="pt-13">
                <div className="flow-root rounded-lg pb-8">
                  <div className="-mt-6">
                    <div>
                      <div className="bg-white items-center justify-center p-3 rounded-md shadow-lg">
                        <div className="px-14 lg:px-24">
                          <Image src={item.image} />
                        </div>
                        <p className="px-2 lg:px-10 sm:pb-14 pb-6">{item.text}</p>
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
  );
}
