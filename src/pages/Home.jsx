const Home = () => {
  return (
    <div
      className='bg-[url(/src/assets/home/background-home-mobile.jpg)] sm:bg-[url(/src/assets/home/background-home-tablet.jpg)] lg:bg-[url(/src/assets/home/background-home-desktop.jpg)] bg-fixed bg-no-repeat bg-cover min-h-screen w-full '>
      <main className="container">
        <section>
          <div>
            <h1>
              So, you want to travel to
            </h1>
            <h1>
              Space
            </h1>
            <p>
              Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div>
            <button>
              Explore
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home