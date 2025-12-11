import HeroComponent from "../components/HeroComponent"

const Home = () => {

  return (
    <div
      className='bg-[url(/src/assets/home/background-home-mobile.jpg)] sm:bg-[url(/src/assets/home/background-home-tablet.jpg)] lg:bg-[url(/src/assets/home/background-home-desktop.jpg)] bg-fixed bg-no-repeat bg-cover min-h-screen w-full'
      aria-label="Space travel introduction section"
      >
        <HeroComponent />      
    </div>
  )
}

export default Home