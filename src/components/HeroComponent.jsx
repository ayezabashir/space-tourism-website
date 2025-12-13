const HeroComponent = ({ numb,heading,children }) => {
    return (
    <main className='container content'>
        <div className="section">
            <h1 className='text-white '><span className='text-gray-500 font-bold'>{numb}</span>{heading}</h1>
            {
                children
            }
        </div>
    </main>
    )
}

export default HeroComponent