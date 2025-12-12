import HeroComponent from "./HeroComponent"
import AllDestinations from "./AllDestinations"
const DestinationHero = () => {
  return (
     <>
      <HeroComponent numb="01" heading=" Pick your destination">
         <AllDestinations />
      </HeroComponent>
     </>
  )
}

export default DestinationHero