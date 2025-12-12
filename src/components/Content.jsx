const Content = ({mainhead, subhead, desc}) => {
    return (
        <div className="mb-50 text-center xl:text-start">
            <h1 className="font-bellefair text-[#8d8f93] text-md sm:text-xl mb-5">{mainhead}</h1>
            <h2 className="font-bellefair text-xl sm:text-2xl">{subhead}</h2>
            <p className="leading-relaxed text-sm md:text-md my-20 text-lightblue">{desc}</p>
        </div>
    )
}

export default Content