/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: 'James Rozelle',
    role: 'CEO',
    bio: 'Over a decade of experience in software architecture design and six years of blockchain development. James is a natural leader who spearheads the Station initiative.',
    imageUrl: '/james.webp',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Chase Jacobsen',
    role: 'CIO',
    bio: "With a decade of Enterprise IT management experience across multiple sectors, Chase brings strategic offerings to empower Station's technology.",
    imageUrl: '/chase.webp',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Camie Garibaldi',
    role: 'Brand Manager',
    bio: 'Camie brings five years of graphic design and two years of media marketing and streaming experience. She excels in audience engagement and breathing life into ideas.',
    imageUrl: '/camie.webp',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Alexander Rojas',
    role: 'Lead Developer',
    bio: 'Five years experience in systems languages specializing in automation and AI development in game theory. Four years experience developing Solidity smart contracts.',
    imageUrl: '/alex.webp',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Noah Maizels',
    role: 'Product Advisor',
    bio: 'Marketing and PR professional with years of industry experience specializing in crypto and technical marketing. Ex-Wanchain, currently consulting at Fomocraft. Skilled front-end developer.',
    imageUrl: '/noah.webp',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Joe Wong',
    role: 'Marketing Advisor',
    bio: 'Principal at Fomocraft. 20+ years of integrated marketing experience at multiple award-winning global agencies. Launch CMO for MANTRA DAO and Polkastarter. Advisor for MANTRA DAO, Royale, Launchpool and Finxflo.',
    imageUrl: '/joe.webp',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Nicholas Krapels',
    role: 'Strategy Advisor',
    bio: 'Principal of Fomocraft Ventures. Advisor to MANTRA DAO, Royale, Launchpool and Finxflo. Ex-Wanchain. Writer, educator, startup strategy and token economy expert.',
    imageUrl: '/nick.webp',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Jim Austin Joseph, Esq.',
    role: 'Advisor',
    bio: 'Licensed attorney. Crypto developer since 2014. Assisted ICO and STO token launches since 2017. Work featured in Techcrunch and CryptoCoinNews.',
    imageUrl: '/jim.webp',
    twitterUrl: '#',
    linkedinUrl: '#'
  }
]

export default function Example() {
  return (
    <div id="team" className="bg-dark">
      <div className="mx-auto py-16 sm:py-24 lg:py-32">
        <h2 className="px-8 text-4xl pb-16 sm:pb-24 lg:pb-32  text-center font-gilroy font-extrabold text-white tracking-tight">
          Meet the Team
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-4 lg:max-w-3xl sm:max-w-xl max-w-xs  mx-auto lg:grid-cols-6 sm:gap-y-8 gap-y-10 lg:gap-x-0">
          {people.map((person) => (
            <li
              className={`${
                person.name === 'Nicholas Krapels' ? 'lg:col-start-2 lg:col-end-4' : ''
              } px-4 col-span-2 self-center justify-self-center mx-auto`}
              key={person.name}>
              <div className="lg:px-6 px-8 pt-6 team-height team-gradient text-center rounded-lg xl:text-left">
                <div className="space-y-2 xl:space-y-4">
                  <img
                    className="p-0 mx-auto lg:h-26 lg:w-26 w-32 h-32 border-4 border-gray-200 bg-gray-100 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="font-medium text-base leading-6 space-y-1">
                    <h3 className="text-center text-secondary text-xl font-gilroy font-extrabold">
                      {person.name}
                    </h3>
                    <p className="text-center text-secondary font-gilroy font-thin text-xl">
                      {person.role}
                    </p>
                  </div>

                  <p className="text-gray-100 text-sm text-center">{person.bio}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .team-height {
          height: 29rem;
        }
        .team-gradient {
          background: rgb(64, 148, 214);
          background: linear-gradient(
            0deg,
            rgba(64, 148, 214, 1) 0%,
            rgba(27, 207, 175, 1) 35%,
            rgba(0, 249, 147, 1) 100%
          );
        }
      `}</style>
    </div>
  )
}
