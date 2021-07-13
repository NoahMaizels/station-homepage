import Image from 'next/image'
import solutionImg01 from 'public/solution-image-01.webp'
import solutionImg02 from 'public/solution-image-02.webp'
import solutionImg03 from 'public/solution-image-03.webp'
import solutionImg04 from 'public/solution-image-04.webp'

const solutions = [
  {
    name: 'Aggregation',
    description:
      'Aggregate real time price estimates from each platform so users can make informed choices and ﬁnd the best prices.',
    image: solutionImg01,
    num: 1
  },
  {
    name: 'Positive Feedback Mechanism',
    description:
      'Better and simpler access for new users increases trade volume. More trades lead to higher TVL. More rewards encourage more participation from liquidity providers.',
    image: solutionImg02,
    num: 2
  },
  {
    name: 'Cross‑chain Payment Solution',
    description:
      'Our THORChain integration allows for payment with a growing list of many native (not wrapped) assets. Our Balancer v2 integration solves for disparate payment tokens For Ethereum DeFi options platforms.',
    image: solutionImg03,
    num: 3
  },
  {
    name: 'Multi‑chain Smart Order Routing',
    description:
      'Station seeks to satisfy the increasing demand for on-chain derivatives by integrating existing and future DeFi derivatives platforms on any chain.',
    image: solutionImg04,
    num: 4
  }
]

export default function Solutions() {
  return (
    <div className="pb-16 sm:pb-24 lg:pb-32 bg-secondary">
      <div className="md:max-w-md max-w-xs mx-auto px-6 sm:px-6 lg:max-w-4xl lg:px-8">
        <h2 className="font-gilroy mb-14 mx-auto font-extrabold text-center text-4xl text-gray-200">
          Station&apos;s Solutions
        </h2>

        <dl className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6">
          {solutions.map((solution) => (
            <div className="mx-auto text-center lg:text-left" key={solution.name}>
              <dt>
                <p className="mt-5 text-xs leading-6 font-bold tracking-widest font-gilroy text-primary">{`CHALLENGE ${solution.num}`}</p>
              </dt>
              <dt className="lg:h-14 mb-2 lg:pb-0 pb-3 justify-start">
                <p className="mt-3 text-xl mx-auto text-center lg:text-left leading-6 font-gilroy font-extrabold text-lightPurple">
                  {solution.name}
                </p>
              </dt>
              {/* flex lg:text-left mx-auto text-center  pb-8 lg:pt-14 pt-0 h-20 w-20 lg:mb-6 mb-0  lg:mt-5 mt-0 rounded-md */}
              <div className="inline-block lg:mr-auto lg:ml-0  mx-auto h-20 w-20  lg:mb-0 mb-3  rounded-md">
                <Image priority width={80} src={solution.image} />
              </div>
              <dd className="lg:mt-2 lg:text-left text-sm font-open-sans text-gray-50">
                {solution.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
