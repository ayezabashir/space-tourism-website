import CrewHero from "../components/CrewHero"

const Crew = () => {
  return (
   <div className='bg-[url(/src/assets/crew/background-crew-mobile.jpg)] sm:bg-[url(/src/assets/crew/background-crew-tablet.jpg)] lg:bg-[url(/src/assets/crew/background-crew-desktop.jpg)] bg-fixed bg-no-repeat bg-cover min-h-screen w-full'
      aria-label='Space travel Crew' >
       <CrewHero />
    </div>
  )
}

export default Crew