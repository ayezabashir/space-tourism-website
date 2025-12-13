import CrewHero from "../components/CrewHero"
import PageWrapper from "../components/PageWrapper"

const Crew = () => {
  return (
    <PageWrapper>
      <div className='bg-[url(/src/assets/crew/background-crew-mobile.jpg)] sm:bg-[url(/src/assets/crew/background-crew-tablet.jpg)] lg:bg-[url(/src/assets/crew/background-crew-desktop.jpg)] bg-fixed bg-no-repeat bg-cover min-h-screen w-full'
        aria-label='Space travel Crew' >
        <CrewHero />
      </div>
    </PageWrapper>
  )
}

export default Crew