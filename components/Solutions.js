import Image from 'next/image'
import solutionImg01 from 'public/solution-image-01.png'
import solutionImg02 from 'public/solution-image-02.png'
import solutionImg03 from 'public/solution-image-03.png'
import solutionImg04 from 'public/solution-image-04.png'

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
    <div className="py-12 bg-secondary">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="font-gilroy my-14 mx-auto font-bold text-center text-4xl text-gray-200">
          Our Solutions
        </h2>

        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
          {solutions.map((solution) => (
            <div className="align-middle" key={solution.name}>
              <dt>
                <p className="mt-5 text-xs leading-6 font-thin tracking-wider font-gilroy text-primary">{`SOLUTION ${solution.num}`}</p>
              </dt>
              <dt className="flex flex-col  h-16 justify-start">
                <p className="mt-3 text-2xl leading-6 w-56 font-medium font-gilroy text-lightPurple">
                  {solution.name}
                </p>
              </dt>
              <div className="flex items-center pb-8 pt-14 justify-center h-20 w-20 mb-6  mt-0 rounded-md">
                <Image src={solution.image} />
              </div>
              <dd className="mt-2 text-base font-open-sans text-gray-200">
                {solution.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
