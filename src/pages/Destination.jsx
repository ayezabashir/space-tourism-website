import { useState } from "react"
import data from "/src/data/data.json"

const Destination = () => {
  const [currDestination, setCurrDestination] = useState('Moon');
  const destinations = data.destinations;
  const selectedDestination = destinations.find(destination => destination.name === currDestination);
  return (
    <div className='bg-[url(/src/assets/destination/background-destination-mobile.jpg)] sm:bg-[url(/src/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/src/assets/destination/background-destination-desktop.jpg)] bg-fixed bg-no-repeat bg-cover min-h-screen w-full'
      aria-label='Space travel destinations' >
      <main className='container'>
        <div className="max-w-1100 mx-auto my-100">
          <h1 className='text-white mb-100'><span className='text-gray-500 font-bold'>01</span> Pick your destination</h1>
          <section className="flex flex-col lg:flex-row justify-between items-center">
            <div className="p-20 flex justify-start">
              <img className="w-200 sm:w-400 lg:w-500" src={selectedDestination.images.png} alt={selectedDestination.name} />
            </div>
            <div className="mt-50 lg:mt-0 text-center lg:text-start max-w-460">
              <nav className="flex justify-between px-20 items-center mb-30 gap-10 font-barlow font-light text-lightblue">
                <li className={`list-none mx-5 cursor-pointer ${currDestination === "Moon" ? "underline underline-offset-8 text-white" : "text-lightblue"}`} onClick={() => setCurrDestination("Moon")}>Moon</li>
                <li className={`list-none mx-5 cursor-pointer ${currDestination === "Mars" ? "underline underline-offset-8 text-white" : "text-lightblue"}`} onClick={() => setCurrDestination("Mars")}>Mars</li>
                <li className={`list-none mx-5 cursor-pointer ${currDestination === "Europa" ? "underline underline-offset-8 text-white" : "text-lightblue"}`} onClick={() => setCurrDestination("Europa")}>Europa</li>
                <li className={`list-none mx-5 cursor-pointer ${currDestination === "Titan" ? "underline underline-offset-8 text-white" : "text-lightblue"}`} onClick={() => setCurrDestination("Titan")}>Titan</li>
              </nav>
              <div>
                <h2 className="text-3xl">{selectedDestination.name}</h2>
                <p className="text-sm text-lightblue font-light leading-relaxed my-20 max-w-430">{selectedDestination.description}</p>
                <div className="my-40 flex flex-col gap-20 sm:justify-between lg:justify-start lg:gap-50 sm:flex-row pt-40 border-t border-gray-400">
                  <div>
                    <h2 className="text-xs text-lightblue tracking-wide">avg. distance</h2>
                    <p className="font-bellefair text-lg uppercase">{selectedDestination.distance}</p>
                  </div>
                  <div>
                    <h2 className="text-xs text-lightblue tracking-wide">est. travel time</h2>
                    <p className="font-bellefair text-lg uppercase">{selectedDestination.travel}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Destination