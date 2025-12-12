import React from 'react'
import HeroComponent from './HeroComponent'
import AllTech from './AllTech'

const TechHero = () => {
  return (
    <>
        <HeroComponent numb="03" heading=" Space launch 101">
            <AllTech />
        </HeroComponent>
    </>
  )
}

export default TechHero