/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const challenges = [
  {
    name: 'Lack of Competition',
    description:
      'Individual platforms sell proprietary options with little competition. Users have nowhere to compare prices, creating market ineﬃciency and stifling innovation.',
    icon: GlobeAltIcon
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
  {
    name: 'New',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
]

export default function Challenges() {
  return (
    <div className="py-12 bg-secondary">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="font-gilroy mx-auto font-bold text-center text-3xl text-gray-200">Industry Challenges</h2>

        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
          {challenges.map((challenge) => (
            <div key={challenge.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <challenge.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{challenge.name}</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">{challenge.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}