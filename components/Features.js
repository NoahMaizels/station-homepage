export default function Features({features}) {
  return (
    <div className="py-32 px-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-8">
         <div className=" md:grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
          {features.map((feature) => (
            <div className="mb-14 " key={feature.name}>
          
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                  <img src={feature.icon} className="h-12 w-12" aria-hidden="true" />
                </div>
                <p className="mt-5 text-3xl leading-18 font-bold text-primary">{feature.name}</p>
        
              <div className="mt-2 text-sm text-white">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
