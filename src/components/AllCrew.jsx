import { useState } from "react";
import data from "/src/data/data.json";
import Content from "./Content";
const AllCrew = () => {
    const [currCrew, setCurrentCrew] = useState(0);
    const crews = data.crew;
    const crew = crews.find((crew) => crew.id === currCrew)
    return (
        <section className="flex flex-col xl:flex-row xl:h-600 justify-between gap-20 items-center">
            <div className="flex flex-col justify-between items-center xl:items-start xl:py-100 xl:w-1/2 h-full">
                <Content mainhead={crew.role} subhead={crew.name} desc={crew.bio} />
                <div className="flex gap-20 cursor-pointer">
                    {
                        crews.map((item, index) =>
                            <p
                                onClick={() => setCurrentCrew(index)}
                                key={index}
                                className={`w-15 h-15 rounded-full bg-gray-400 
                                    ${currCrew === index ? "bg-white" : "bg-gray-400"}
                                    `}
                            ></p>
                        )
                    }
                </div>
            </div>
            <div className="relative h-full flex justify-center xl:w-1/2">
                <picture>
                    <img className="w-full h-full" src={crew.images.png} alt={crew.name} />
                </picture>
                <div className="absolute bottom-0 left-0 w-full h-100 bg-linear-to-t md:bg-linear-0 xl:bg-linear-to-t from-darkblue to-transparent "></div>
            </div>
        </section>
    )
}

export default AllCrew