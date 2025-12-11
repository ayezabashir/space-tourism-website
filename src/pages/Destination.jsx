import DestinationHero from "../components/DestinationHero"

const Destination = () => {
  return (
    <div className='bg-[url(/src/assets/destination/background-destination-mobile.jpg)] sm:bg-[url(/src/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/src/assets/destination/background-destination-desktop.jpg)] bg-fixed bg-no-repeat bg-cover min-h-screen w-full'
      aria-label='Space travel destinations' >
        <DestinationHero />
    </div>
  )
}

export default Destination