import Link from 'components/Link'


const projects = [
  {
    name: 'MANTRA DAO',
    imageUrl:
'our_work1.png',
    url: 'https://mantradao.com/',
  },
  {
    name: 'Launchpool',
    imageUrl:
'our_work2.png',
    url: 'https://launchpool.xyz/',
  }, {
    name: 'Royale.Finance',
    imageUrl:
'our_work3.png',
    url: 'https://royale.finance/',
  },
]
export default function OurWork() {
  return (
    <div className="">
      <h3 className="text-4xl font-black inconsolata text-center text-white">See our work.</h3>
      <div className="mx-auto lg:max-w-5xl md:max-w-3xl py-24">
        <div className="">
          <ul className="grid justify-items-center sm:grid-cols-2  lg:grid-cols-3 md:grid-cols-2 ">
            {projects.map((project) => (
               <a target="_blank" href={project.url} className="overflow-hidden">
               <li key={project.name} className="mb-10 mx-auto border-2 border-gray-500  rounded-2xl flex flex-col justify-end block bg-center bg-cover h-44 w-80 lg:w-80 lg:h-48 sm:w-72 text-left"
               style={{backgroundImage: `url(${project.imageUrl})`}}
                >
  
                <div className="p-4 font-medium text-2xl leading-6 space-y-1">
                  <h3 className="text-white">{project.name}</h3>
                </div>              
              </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
