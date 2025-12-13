import PageWrapper from '../components/PageWrapper'
import TechHero from '../components/TechHero'

const Technology = () => {
  return (
    <PageWrapper>
      <div className='bg-[url(/src/assets/technology/background-technology-mobile.jpg)] sm:bg-[url(/src/assets/technology/background-technology-tablet.jpg)] lg:bg-[url(/src/assets/technology/background-technology-desktop.jpg)] bg-fixed bg-no-repeat bg-cover min-h-screen w-full'
        aria-label='Space travel technology' >
        <TechHero />
      </div>
    </PageWrapper>
  )
}

export default Technology