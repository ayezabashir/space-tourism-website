import HomeHero from "../components/HomeHero"
import PageWrapper from "../components/PageWrapper"

const Home = () => {

  return (
    <PageWrapper>
      <div
        className='bg-[url(/assets/home/background-home-mobile.jpg)] sm:bg-[url(/assets/home/background-home-tablet.jpg)] lg:bg-[url(/assets/home/background-home-desktop.jpg)] bg-fixed bg-no-repeat bg-cover min-h-screen w-full'
        aria-label="Space travel introduction section"
      >
        <HomeHero />
      </div>
    </PageWrapper>
  )
}

export default Home