
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Button,
    Tooltip,
} from "@material-tailwind/react";

const data = [
    {
        image: "https://media.istockphoto.com/id/1456467039/photo/beautiful-living-room-and-kitchen-in-new-luxury-home-with-white-cabinets-wood-beams-pendant.jpg?s=612x612&w=0&k=20&c=x_ZXg6o_H6Bsww7Vr8126nXnNJULmYKABuXS3sc8qqE=",
        price: "70000",
        text: "The Willows of plain view",
        location: "Pushpanagari Apratment, Kothrud",
        bed: 2,
        bath: 2,
        park: 1,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s',
        name: "Ajit kumar",
        activity: "1"
    },
    {
        image: "https://as1.ftcdn.net/v2/jpg/01/05/79/66/1000_F_105796682_5dzQ4WF2FPdq3WqLqGXem1WPefJu2XRy.jpg",
        price: "65000",
        text: "1 BHK SKYi Songbirds",
        location: "Opposite Symbiosis College, Pune airport",
        bed: 2,
        bath: 1,
        park: 1,
        picture: 'https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw',
        name: "Vishal Pandit",
        activity: "5"
    },
    {
        image: "https://as1.ftcdn.net/v2/jpg/01/05/79/66/1000_F_105796682_5dzQ4WF2FPdq3WqLqGXem1WPefJu2XRy.jpg",
        price: "65000",
        text: "1 BHK SKYi Songbirds",
        location: "Opposite Symbiosis College, Pune airport",
        bed: 2,
        bath: 1,
        park: 1,
        picture: 'https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw',
        name: "Vishal Pandit",
        activity: "5"
    },
    {
        image: "https://as1.ftcdn.net/v2/jpg/01/05/79/66/1000_F_105796682_5dzQ4WF2FPdq3WqLqGXem1WPefJu2XRy.jpg",
        price: "65000",
        text: "1 BHK SKYi Songbirds",
        location: "Opposite Symbiosis College, Pune airport",
        bed: 2,
        bath: 1,
        park: 1,
        picture: 'https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw',
        name: "Vishal Pandit",
        activity: "5"
    },
    {
        image: "https://as1.ftcdn.net/v2/jpg/01/05/79/66/1000_F_105796682_5dzQ4WF2FPdq3WqLqGXem1WPefJu2XRy.jpg",
        price: "65000",
        text: "1 BHK SKYi Songbirds",
        location: "Opposite Symbiosis College, Pune airport",
        bed: 2,
        bath: 1,
        park: 1,
        picture: 'https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw',
        name: "Vishal Pandit",
        activity: "5"
    },
    {
        image: "https://as1.ftcdn.net/v2/jpg/01/05/79/66/1000_F_105796682_5dzQ4WF2FPdq3WqLqGXem1WPefJu2XRy.jpg",
        price: "65000",
        text: "1 BHK SKYi Songbirds",
        location: "Opposite Symbiosis College, Pune airport",
        bed: 2,
        bath: 1,
        park: 1,
        picture: 'https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw',
        name: "Vishal Pandit",
        activity: "5"
    },
    {
        image: "https://as1.ftcdn.net/v2/jpg/01/05/79/66/1000_F_105796682_5dzQ4WF2FPdq3WqLqGXem1WPefJu2XRy.jpg",
        price: "65000",
        text: "1 BHK SKYi Songbirds",
        location: "Opposite Symbiosis College, Pune airport",
        bed: 2,
        bath: 1,
        park: 1,
        picture: 'https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw',
        name: "Vishal Pandit",
        activity: "5"
    },
    {
        image: "https://as1.ftcdn.net/v2/jpg/01/05/79/66/1000_F_105796682_5dzQ4WF2FPdq3WqLqGXem1WPefJu2XRy.jpg",
        price: "65000",
        text: "1 BHK SKYi Songbirds",
        location: "Opposite Symbiosis College, Pune airport",
        bed: 2,
        bath: 1,
        park: 1,
        picture: 'https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw',
        name: "Vishal Pandit",
        activity: "5"
    },,
    {
        image: "https://as1.ftcdn.net/v2/jpg/01/05/79/66/1000_F_105796682_5dzQ4WF2FPdq3WqLqGXem1WPefJu2XRy.jpg",
        price: "65000",
        text: "1 BHK SKYi Songbirds",
        location: "Opposite Symbiosis College, Pune airport",
        bed: 2,
        bath: 1,
        park: 1,
        picture: 'https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw',
        name: "Vishal Pandit",
        activity: "5"
    }
]
function RecommendedCard() {

    return (
        <>
        <div className="flex justify-center gap-3 mt-7 cursor-pointer">
            <div className="bg-gray-500 p-3 rounded-full text-center hover:bg-red-900">View All</div>
            <div className="bg-gray-500 p-3 rounded-full text-center hover:bg-red-900">Apartment</div>
            <div className="bg-gray-500 p-3 rounded-full text-center hover:bg-red-900">Villa</div>
            <div className="bg-gray-500 p-3 rounded-full text-center hover:bg-red-900">Studio</div>
            <div className="bg-gray-500 p-3 rounded-full text-center hover:bg-red-900">Home</div>
        </div>
        <div className="flex justify-center flex-wrap mt-5 mb-5 gap-2 md:grid md:grid-rows-3 md:grid-flow-col ">
            {data.map(({ image, price, text, location, bed, bath, park, picture, activity, name }, index) => (
                <Card className="max-w-[20rem] max-h-[30rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src={image}
                            alt="ui/ux review check"
                        />
                    </CardHeader>
                    <CardBody className="">
                        <Typography variant="h5" color="blue-gray" className="text-red-900">
                            <i class="fa fa-inr" aria-hidden="true"></i>  {price} Per month
                        </Typography>
                        <Typography variant="lead" color="black" className="mt-3 font-normal">
                            {text}
                        </Typography>
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            <div className="flex items-center gap-2">
                                <img src="src\assets\images\maps-and-flags.png" alt="" className="h-5" />
                                <p className="text-xs">{location}</p>
                            </div>

                        </Typography>
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            <div className="flex items-center gap-5 ">
                                <div className="text-sm font-bold"> {bed} <i class="fa fa-bed text-red-800" aria-hidden="true" ></i></div>
                                <div className="text-sm font-bold"> {bath} <i class="fa fa-bath text-red-800" aria-hidden="true"></i></div>
                                <div className="text-sm font-bold"> {bath} <i class="fa fa-car text-red-800" aria-hidden="true"></i></div>
                                <div className="text-sm"> <i class="fa fa-paw text-red-800" aria-hidden="true"></i></div>

                            </div>


                        </Typography>
                    </CardBody>
                    <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center ">
                            <Tooltip content={name}>
                                <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="natali craig"
                                    src={picture}
                                    className="border-2 border-white hover:z-10"
                                />
                            </Tooltip>

                        </div>
                        <Typography className="font-normal">{activity} Days ago</Typography>
                    </CardFooter>
                </Card>
            ))}



        </div>
        <div className="flex justify-center">
        <Button color="red" >View All Properties</Button>
        </div>
       
        </>
    );

}

export default RecommendedCard