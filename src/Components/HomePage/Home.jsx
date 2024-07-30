
import Banner from "../banner/banner"
import BlogCards from "../Cards/BlogCards"
import Card from "../Cards/Card"
import ClientCard from "../Cards/clientCard"
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
       <ClientCard/>
       <BlogCards/>
    </>)
}

export default Home