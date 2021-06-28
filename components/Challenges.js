import Image from 'next/image'
import challengeImg01 from 'public/challenge-image-01.png'
import challengeImg02 from 'public/challenge-image-02.png'
import challengeImg03 from 'public/challenge-image-03.png'
import challengeImg04 from 'public/challenge-image-04.png'

const challenges = [
  {
    name: 'Lack of Competition',
    description:
      'Individual platforms sell proprietary options with little competition. Users have nowhere to compare prices, creating market ineﬃciency and stiﬂing innovation.',
    image: challengeImg01,
    num: 1
  },
  {
    name: 'Broken Flywheel Discourages Liquidity Growth',
    description:
      'Single platforms cannot attract enough liquidity to service large demand. Persistent low derivatives volume does not create the ﬂywheel eﬀect necessary to encourage liquidity providers.',
    image: challengeImg02,
    num: 2
  },
  {
    name: 'Payment Limitations',
    description:
      'Users overpaid $2b for DeFi derivatives in 2020 due to marketplace distortions and limited cross-chain payment options, often which are awkwardly bridged and wrapped crypto assets.',
    image: challengeImg03,
    num: 3
  },
  {
    name: 'Fragmentation Across Blockchains',
    description:
      'DeFi is meant to be cross-chain. As it expands across multiple blockchain ecosystems (Solana, Polkadot, Matic, BSC, etc.), a single interface is necessary to aggregate liquidity and data visualization.',
    image: challengeImg04,
    num: 4
  }
]

export default function Challenges() {
  return (
    <div className="py-12 bg-secondary mt-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="font-gilroy my-14 mx-auto font-bold text-center text-5xl text-gray-200">
          Industry Challenges
        </h2>

        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
          {challenges.map((challenge) => (
            <div className="" key={challenge.name}>
              <dt>
                <p className="mt-5 text-xs leading-6 font-thin tracking-wider font-gilroy text-primary">{`CHALLENGE ${challenge.num}`}</p>
              </dt>
              <dt className="flex flex-col  h-16 justify-start">
                <p className="mt-3 text-2xl leading-6 w-72 font-gilroy font-medium text-lightPurple">
                  {challenge.name}
                </p>
              </dt>
              <div className="flex items-center pb-8 pt-14 justify-center h-20 w-20 mb-6  mt-5 rounded-md">
                <Image src={challenge.image} />
              </div>
              <dd className="mt-2 text-base font-open-sans text-gray-200">
                {challenge.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
