import { useNavigate } from "react-router-dom"
import Button from "../components/Button";

const HomeHero = () => {
    const nav = useNavigate();
    const handleNav = () => {
        nav("/destination");
    }
    return (
        <main className="container flex justify-center items-center lg:items-baseline-last max-w-1100">
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
                    <Button onClick={handleNav}>
                        Explore
                    </Button>
                </div>
            </section>
        </main>
    )
}

export default HomeHero