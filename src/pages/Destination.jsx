import { useState } from "react"
import data from "/src/data/data.json"

const Destination = () => {
  const [currDestination, setCurrDestination] = useState('Moon');
  const destinations = data.destinations;
  const selectedDestination = destinations.find(destination=>destination.name===currDestination);
  return (
    <div className='bg-[url(/src/assets/destination/background-destination-mobile.jpg)] sm:bg-[url(/src/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/src/assets/destination/background-destination-desktop.jpg)] bg-fixed bg-no-repeat bg-cover min-h-screen w-full'
      aria-label='Space travel destinations' >
      <div className='container'>
        <h1 className='text-white'><span className='text-gray-500 font-bold'>01</span> Pick your destination</h1>
        <main>
          <section className="flex justify-between items-baseline">
            <div>
              <img src={selectedDestination.images.png} alt={selectedDestination.name} />
            </div>
            <div>
              <nav className="flex ">
                <li className="list-none mx-5" onClick={()=>setCurrDestination("Moon")}>Moon</li>
                <li className="list-none mx-5" onClick={()=>setCurrDestination("Mars")}>Mars</li>
                <li className="list-none mx-5" onClick={()=>setCurrDestination("Europa")}>Europa</li>
                <li className="list-none mx-5"  onClick={()=>setCurrDestination("Titan")}>Titan</li>
              </nav>
              <div>
                <h2>{selectedDestination.name}</h2>
                <p>{selectedDestination.description}</p>
                <div>
                  <div>
                  <p className="uppercase">avg. distance</p>
                  <p>{selectedDestination.distance}</p>
                </div>
                <div>
                  <p className="uppercase">est. travel time</p>
                  <p>{selectedDestination.travel}</p>
                </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Destination