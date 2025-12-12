import { useState } from "react";
import data from "/src/data/data.json";
import Content from "./Content";

const AllTech = () => {
    const [currTech, setCurrTech] = useState(0);
    const techs = data.technology;
    const tech = techs.find((tech) => tech.id === currTech);
    return (
        <section className="flex flex-col-reverse xl:flex-row xl:h-600 justify-between gap-50 xl:gap-20 items-center">
            <div className="xl:w-3/5 flex flex-col items-center xl:items-start xl:flex-row gap-30">
                <div className="flex xl:flex-col gap-20">
                    {
                        techs.map((item, index) =>
                            <p
                                key={index}
                                className={`border border-white flex justify-center items-center h-50 w-50 rounded-full
                                    ${currTech === item.id ? "bg-white text-darkblue" : "bg-transparent"}
                                    `}
                                onClick={() => setCurrTech(item.id)}
                            >
                                {item.id + 1}
                            </p>
                        )
                    }
                </div>
                <Content mainhead="The Terminology" subhead={tech.name} desc={tech.description} />
            </div>
            <div className="w-full xl:w-2/5">
                <picture>
                    <source
                        media="(max-width: 1279px)"
                        srcSet={tech.images.landscape}
                    />
                    <img className="xl:absolute w-full xl:w-min right-0 top-0 transform xl:translate-y-[30%]" src={tech.images.portrait} alt="" />
                </picture>
            </div>
        </section>
    )
}

export default AllTech