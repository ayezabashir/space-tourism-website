import { useState } from "react";
import data from "/src/data/data.json";
const AllCrew = () => {
    const [currCrew, setCurrentCrew] = useState(1);
    const crews = data.crew;
    const crew = crews.find((crew) => crew.id === currCrew)
    return (
        <section className="flex flex-col lg:flex-row justify-between items-center">
            <div>
                <div>
                    <h1>{crew.role}</h1>
                    <h2>{crew.name}</h2>
                    <p>{crew.bio}</p>
                </div>
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
            <div>
                <picture>
                    <img className="" src={crew.images.png} alt={crew.name} />
                </picture>
            </div>
        </section>
    )
}

export default AllCrew