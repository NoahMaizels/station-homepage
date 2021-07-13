import Image from 'next/image'
import challengeImg01 from '/public/challenge-image-01.webp'
import challengeImg02 from '/public/challenge-image-02.webp'
import challengeImg03 from '/public/challenge-image-03.webp'
import challengeImg04 from '/public/challenge-image-04.webp'

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
    <div className="py-16 sm:py-24 lg:py-32 bg-secondary">
      <div className="md:max-w-md max-w-xs mx-auto px-6 sm:px-6 lg:max-w-4xl lg:px-8">
        <h2 className="font-gilroy mb-14 mx-auto font-extrabold text-center text-4xl text-gray-200">
          Industry Challenges
        </h2>

        <dl className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6">
          {challenges.map((challenge) => (
            <div className="mx-auto text-center lg:text-left" key={challenge.name}>
              <dt>
                <p className="mt-5 text-xs leading-6 font-bold tracking-widest font-gilroy text-primary">{`CHALLENGE ${challenge.num}`}</p>
              </dt>
              <dt className="lg:h-20 mb-2 lg:pb-0 pb-3 justify-start">
                <p className="mt-3 text-xl mx-auto text-center lg:text-left leading-6 font-gilroy font-extrabold text-lightPurple">
                  {challenge.name}
                </p>
              </dt>
              {/* flex lg:text-left mx-auto text-center  pb-8 lg:pt-14 pt-0 h-20 w-20 lg:mb-6 mb-0  lg:mt-5 mt-0 rounded-md */}
              <div className="inline-block lg:mr-auto lg:ml-0  mx-auto h-20 w-20  lg:mb-0 mb-3  rounded-md">
                <Image priority width={80} height={80} src={challenge.image} />
              </div>
              <dd className="lg:mt-2 lg:text-left text-sm font-open-sans text-gray-50">
                {challenge.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
