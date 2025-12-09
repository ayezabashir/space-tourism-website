import { useNavigate } from "react-router-dom"

const Home = () => {
  const nav = useNavigate();
  const handleNav=()=>{
    nav("/destination");
  }
  return (
    <div
      className='bg-[url(/src/assets/home/background-home-mobile.jpg)] sm:bg-[url(/src/assets/home/background-home-tablet.jpg)] lg:bg-[url(/src/assets/home/background-home-desktop.jpg)] bg-fixed bg-no-repeat bg-cover min-h-screen w-full'
      aria-label="Space travel introduction section"
      >
      <main className="container flex justify-center items-center lg:items-baseline-last max-w-1000">
        <section className="flex flex-col lg:flex-row lg:justify-between items-center text-lightblue w-full">
          <div className="mb-100 text-center lg:text-left">
            <h1 className="mb-20">
              So, you want to travel to
            </h1>
            <h2 className="text-3xl md:text-4xl">
              Space
            </h2>
            <p className="mt-30 text-sm leading-relaxed font-barlow max-w-540">
              Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-white hover:ring-70 ring-white/30 rounded-full w-144 h-144 md:w-272 md:h-272 text-lg md:text-2xl hover:text-lightblue cursor-pointer transition-all ease-in-out delay-75 font-bellefair text-darkblue"
            onClick={handleNav}
            >
              Explore
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home