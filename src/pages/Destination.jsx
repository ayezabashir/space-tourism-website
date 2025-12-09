import { useState } from "react"
import data from "/src/data/data.json"

const Destination = () => {
  const [currDestination, setCurrDestination] = useState('Moon');
  const destinations = data.destinations;
  return (
    <div className='bg-[url(/src/assets/destination/background-destination-mobile.jpg)] sm:bg-[url(/src/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/src/assets/destination/background-destination-desktop.jpg)] bg-fixed bg-no-repeat bg-cover min-h-screen w-full'
      aria-label='Space travel destinations' >
      <div className='container'>
        <h1 className='text-white'><span className='text-gray-500 font-bold'>01</span> Pick your destination</h1>
        <main>
          <section className="flex justify-between items-baseline">
            <div>
              {
                destinations.filter(destination=>destination.name===currDestination).map((destination, index) => (
                  <img key={index} src={destination.images.png} />
                ))
              }
            </div>
            <div>
              <nav>
                <li onClick={()=>setCurrDestination("Moon")}>Moon</li>
                <li onClick={()=>setCurrDestination("Mars")}>Mars</li>
                <li onClick={()=>setCurrDestination("Europa")}>Europa</li>
                <li  onClick={()=>setCurrDestination("Titan")}>Titan</li>
              </nav>
              {
                console.log(currDestination)
              
              }
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Destination