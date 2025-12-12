const HeroComponent = ({children}) => {
    return <main className='container'>
        <div className="max-w-1100 mx-auto my-100">
            <h1 className='text-white mb-100'><span className='text-gray-500 font-bold'>01</span> Pick your destination</h1>
            {
                children
            }
        </div>
    </main>
}

export default HeroComponent