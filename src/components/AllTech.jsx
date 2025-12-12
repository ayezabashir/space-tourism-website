import { useState } from "react";
import data from "/src/data/data.json";
import Content from "./Content";

const AllTech = () => {
    const [currTech, setCurrTech] = useState(0);
    const techs = data.technology;
    const tech = techs.find((tech)=>tech.id===currTech);
    return (
        <section className="flex flex-col xl:flex-row xl:h-600 justify-between gap-20 items-center">
            <div>
                <div>
                    <p className="border border-white flex justify-center items-center h-50 w-50 rounded-full">{currTech+1}</p>
                </div>
                <Content mainhead="The Terminolofy" subhead={tech.name} desc={tech.description}  />
            </div>
            <div>

            </div>
        </section>
    )
}

export default AllTech