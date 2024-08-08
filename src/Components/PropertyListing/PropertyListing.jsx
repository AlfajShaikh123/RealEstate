import {
    ButtonGroup, Button, Input, Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Navbar,
    MobileNav,
    IconButton,
    Radio, Tooltip, Avatar,
    Select, Option
} from "@material-tailwind/react";

import { Link } from 'react-router-dom';
import Slider from '@mui/material/Slider';


import React, { useState } from 'react';
import { styled } from '@mui/system';


const TailwindStyledSlider = styled(Slider)`
  & .MuiSlider-thumb {
    @apply bg-blue-500;
  }
  & .MuiSlider-rail {
    @apply bg-gray-200;
  }
  & .MuiSlider-track {
    @apply bg-blue-500;
  }
`;
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
    }, ,
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
function PropertyListing() {
    const [value, setValue] = useState([0, 40000]);
    const [dvalue, setdValue] = useState([0, 40000]);
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const handleChange = (event, newValue) => {
        if (newValue && newValue.length === 2) {
            setValue(newValue);
        }
    };
    const handleDChange = (event, newValue) => {
        if (newValue && newValue.length === 2) {
            setdValue(newValue);
        }
    };
    const navList = (

        <div className={`bg-gray-100 flex flex-col space-y-4 p-10 `} >
            <p className="text-black">Search</p>
            <ButtonGroup variant="outlined">
                <Button className="hover:bg-red-800  hover:text-white">For rent </Button>
                <Button className="hover:bg-red-800 hover:text-white">For Sale</Button>

            </ButtonGroup>
            <div>
                <p className="mb-2 text-black">Keyword</p>
                <Input size="lg" label="Search Keyword" />
            </div>
            <div>
                <p className="mb-2 text-black">Location</p>
                <Input size="lg" label="Search Location" />
            </div>
            <div className="w-full">
                <p className="mb-2 text-black">Type</p>
                <Select label="Type">
                    <Option>Apartment</Option>
                    <Option>House</Option>
                    <Option>Independent House</Option>
                    <Option>Independent Floor</Option>
                    <Option>Office</Option>
                </Select>
            </div>
            <div className="w-full">
                <p className="mb-2 text-black ">Rooms</p>
                <Select className="">
                    <Option>1</Option>
                    <Option>2</Option>
                    <Option>3</Option>
                    <Option>4</Option>
                    <Option>More than 4</Option>
                </Select>
            </div>
            <div className="w-full">
                <p className="mb-2 text-black">Bedrooms</p>
                <Select label="Select Version" className="">
                    <Option>1</Option>
                    <Option>2</Option>
                    <Option>3</Option>
                    <Option>4</Option>
                    <Option>5</Option>
                </Select>
            </div>
            <div className="w-full">
                <p className="mb-2 text-black">Bathrooms</p>
                <Select label="Select Version" className="">
                    <Option>1</Option>
                    <Option>2</Option>
                    <Option>3</Option>
                    <Option>4</Option>
                    <Option>5</Option>
                </Select>
            </div>
            <div className="text-black">
                <p className=" mb-2 text-black">Price Range</p>
                <TailwindStyledSlider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={40000}
                    className="w-full"
                />
                <div className="flex justify-between ">
                    <span><i class="fa fa-inr" aria-hidden="true"></i>{value[0]}</span>
                    <span><i class="fa fa-inr" aria-hidden="true"></i>{value[1]}</span>
                </div>
            </div>

            <div className="">
                <p className="mb-2 text-black">Price-- Range</p>
                <TailwindStyledSlider
                    value={dvalue}
                    onChange={handleDChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={40000}
                    className="w-full"
                />
                <div className="flex justify-between text-black ">
                    <span><i class="fa fa-inr " aria-hidden="true" className=""></i>{dvalue[0]}</span>
                    <span><i class="fa fa-inr " aria-hidden="true" className=""></i>{dvalue[0]}</span>
                </div>
            </div>
            <Button color="red" className="">Find Properties</Button>
        </div>


    );


    return (<>
        <div className="mt-14">
            <div className="flex justify-between p-5">
                <p className="text-xl font-bold ">Property Listing</p>
                <div className="flex items-center space-x-2">
                    <img src="https://static-00.iconduck.com/assets.00/dashboard-icon-2048x2048-smbjyr2w.png" className="h-5" alt="" />
                    <Select label="Sort by (Default)">
                        <Option>Sort by (Default)</Option>
                        <Option>Newest</Option>
                        <Option>Oldest</Option>

                    </Select>

                </div>
            </div>
            <div className="md:flex">
                <Navbar className="p-5 z-20  w-50 rounded-none px-4 py-2 lg:px-8 lg:py-4">
                    <div className="bg-gray-100">

                        <div className=" gap-4">
                            <div className="mr-4 hidden lg:block">{navList}</div>

                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>
                        </div>
                    </div>
                    <MobileNav open={openNav} className="z-30 bg-gray-100 ">
                        {navList}
                    </MobileNav>
                </Navbar>
                {/* Cards */}

                <div className="m-auto">

                    <div className="flex justify-center flex-wrap mt-10 mb-5 gap-10 md:grid md:grid-rows-3 md:grid-flow-col p-3  ">
                        {data.map((item, index) => (
                            <Link to={{ pathname: "/productdetails", state: { item } }} key={index} >
                                <Card className="md:max-w-[20rem] max-h-[30rem] overflow-hidden transform transition-transform duration-300 md:hover:scale-105 cursor-pointer">
                                    <CardHeader
                                        floated={false}
                                        shadow={false}
                                        color="transparent"
                                        className="m-0 rounded-none"
                                    >
                                        <img
                                            src={item.image}
                                            alt="ui/ux review check"
                                        />
                                    </CardHeader>
                                    <CardBody className="">
                                        <Typography variant="h5" color="blue-gray" className="text-red-900">
                                            <i class="fa fa-inr" aria-hidden="true"></i>  {item.price} Per month
                                        </Typography>
                                        <Typography variant="lead" color="black" className="mt-3 font-normal">
                                            {item.text}
                                        </Typography>
                                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                                            <div className="flex items-center gap-2">
                                                <img src="src\assets\images\maps-and-flags.png" alt="" className="h-5" />
                                                <p className="text-xs">{item.location}</p>
                                            </div>

                                        </Typography>
                                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                                            <div className="flex items-center gap-5 ">
                                                <div className="text-sm font-bold"> {item.bed} <i class="fa fa-bed text-red-800" aria-hidden="true" ></i></div>
                                                <div className="text-sm font-bold"> {item.bath} <i class="fa fa-bath text-red-800" aria-hidden="true"></i></div>
                                                <div className="text-sm font-bold"> {item.bath} <i class="fa fa-car text-red-800" aria-hidden="true"></i></div>
                                                <div className="text-sm"> <i class="fa fa-paw text-red-800" aria-hidden="true"></i></div>

                                            </div>


                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="flex items-center justify-between">
                                        <div className="flex items-center ">
                                            <Tooltip content={item.name}>
                                                <Avatar
                                                    size="sm"
                                                    variant="circular"
                                                    alt="natali craig"
                                                    src={item.picture}
                                                    className="border-2 border-white hover:z-10"
                                                />
                                            </Tooltip>

                                        </div>
                                        <Typography className="font-normal">{item.activity} Days ago</Typography>
                                    </CardFooter>
                                </Card>
                            </Link>

                        ))}



                    </div>
                    <div className="flex space-x-3 m-5 cursor-pointer">
                        <div className="bg-gray-400 p-2 rounded-xl pl-4  pr-4 hover:bg-red-700">1</div>
                        <div className="bg-gray-400 p-2 rounded-xl pl-4  pr-4 hover:bg-red-700" >2</div>
                        <div className="bg-gray-400 p-2 rounded-xl pl-4  pr-4 hover:bg-red-700">3</div>
                        <div className="bg-gray-400 p-2 rounded-xl pl-4  pr-4 hover:bg-red-700"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
                    </div>
                </div>



            </div>

        </div>
    </>)
}
export default PropertyListing