/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: 'James Rozelle',
    role: 'CEO',
    bio: 'Over a decade of experience in software architecture design and six years of blockchain development. James is a natural leader who spearheads the Station initiative.',
    imageUrl: 'james.png',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Chase Jacobsen',
    role: 'CIO',
    bio: "With a decade of Enterprise IT management experience across multiple sectors, Chase brings strategic offerings to empower Station's technology.",
    imageUrl: 'chase.jpg',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Camie Garibaldi',
    role: 'Brand Manager',
    bio: 'Camie brings five years of graphic design and two years of media marketing and streaming experience. She excels in audience engagement and breathing life into ideas.',
    imageUrl: 'camie.png',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Alexander Rojas',
    role: 'Lead Developer',
    bio: 'Five years experience in systems languages specializing in automation and AI development in game theory. Four years experience developing Solidity smart contracts.',
    imageUrl: 'alex.png',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Noah Maizels',
    role: 'Product Advisor',
    bio: 'Marketing and PR professional with years of industry experience specializing in crypto and technical marketing. Ex-Wanchain, currently consulting at Fomocraft. Skilled front-end developer.',
    imageUrl: 'noah.png',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Joe Wong',
    role: 'Marketing Advisor',
    bio: 'Principal at Fomocraft. 20+ years of integrated marketing experience at multiple award-winning global agencies. Launch CMO for MANTRA DAO and Polkastarter. Advisor for MANTRA DAO, Royale, Launchpool and Finxflo.',
    imageUrl: 'joe.png',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    name: 'Nicholas Krapels',
    role: 'Strategy Advisor',
    bio: 'Principal of Fomocraft Ventures. Advisor to FinNexus, MANTRA DAO, Royale, Launchpool and Finxflo. Ex-Wanchain. Writer, educator, startup strategy and token economy expert.',
    imageUrl: 'nick.png',
    twitterUrl: '#',
    linkedinUrl: '#'
  }
]

export default function Example() {
  return (
    <div id="team" className="bg-dark">
      <div className="mx-auto py-24   md:px-10 px-5 lg:px-16 max-w-7xl">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-5xl text-center font-extrabold text-white tracking-tight   pb-16">
              Meet the Team
            </h2>
          </div>
          <ul className="space-y-12 sm:grid md:grid-cols-2 lg:max-w-5xl md:max-w-3xl  mx-auto sm:space-y-0 lg:grid-cols-3 gap-y-12">
            {people.map((person) => (
              <div className="px-5 max-w-sm mx-auto" key={person.name}>
                <li className="py-10 px-10 h-full team-gradient text-center rounded-lg xl:text-left">
                  <div className="space-y-2 xl:space-y-4">
                    <img
                      className="mx-auto h-40 border-4 border-gray-50 w-40 rounded-full"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-center text-secondary text-2xl font-gilroy font-extrabold">
                        {person.name}
                      </h3>
                      <p className="text-center text-secondary font-gilroy font-thin text-2xl">
                        {person.role}
                      </p>
                    </div>

                    <p className="text-gray-200 text-sm text-center">{person.bio}</p>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{`
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
