
import Banner from "../banner/banner"
import Card from "../Cards/Card"
import LocationCard from "../Cards/locationCard"
import RecommendedCard from "../Cards/recommendedCard"
import ServiceCard from "../Cards/servicesCards"

function Home() {
    return (<>
        <Banner />
       <Card/>
       <RecommendedCard/>
       <ServiceCard/>
       <LocationCard/>
    </>)
}

export default Home