import { Carousel } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    ButtonGroup, Button, Input, Card,
    CardHeader,
    CardBody,
    CardFooter,
    Checkbox,
    Typography,
    Navbar,
    MobileNav,
    Textarea,
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

function StarIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-yellow-700"
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
            />
        </svg>
    );
}


const images = [
    {
        image: "https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000"
    },
    {
        image: "https://media.cnn.com/api/v1/images/stellar/prod/171109145517-06-cozy-hotels-redefining-luxury.jpg?q=w_3000,h_1688,x_0,y_0,c_fill"
    }, {
        image: "https://cdn.prod.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp"
    }
]
const subImages = [
    { image: "https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4=" },
    { image: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" },
    { image: "https://images.squarespace-cdn.com/content/v1/56dfd5cc9f7266ed7f04b64d/1585743751085-N2317B7K3I2YBZHPHENO/image-asset.jpeg" }
]

const feactures = [
    { feature: "Bedrooms", count: 2 },
    { feature: "Bathrooms", count: 2 },
    { feature: "Parking", count: 2 },
    { feature: "Lifts", count: 2 },
    { feature: "Pet friendly" },
    { feature: "1300 SqFt" },
    { feature: "Balconies", count: 2 }

]

const reviews = [
    {
        profile: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
        name: "Abhijeet das",
        date: "June 12, 2024",
        start: 4,
        decription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque atque quasi at unde obcaecati voluptatum placeat aperiam minus animi suscipit."
    },
    {
        profile: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
        name: "Abhijeet das",
        date: "June 12, 2024",
        start: 4,
        decription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque atque quasi at unde obcaecati voluptatum placeat aperiam minus animi suscipit."
    },
    {
        profile: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
        name: "Abhijeet das",
        date: "June 12, 2024",
        start: 4,
        decription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque atque quasi at unde obcaecati voluptatum placeat aperiam minus animi suscipit."
    }



]

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
        price: "80000",
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
        price: "50000",
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
        price: "6000",
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
        price: "15000",
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
        price: "35000",
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
        price: "14000",
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
        price: "24000",
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
const cards = [
    { image: "src/assets/images/pune.JPG" },
    { image: "src/assets/images/mumbai.JPG" },
    { image: "src/assets/images/pune.JPG" },
    { image: "src/assets/images/mumbai.JPG" },
    { image: "src/assets/images/pune.JPG" },
    { image: "src/assets/images/mumbai.JPG" },
    { image: "src/assets/images/pune.JPG" },
    { image: "src/assets/images/mumbai.JPG" },
    { image: "src/assets/images/pune.JPG" },
    { image: "src/assets/images/mumbai.JPG" },
    { image: "src/assets/images/pune.JPG" },
    { image: "src/assets/images/mumbai.JPG" },
];

const property_Details = [
    {
        p_id: "AVT10005",
        price: 32000,
        security_deposite: 40000,
        year_built: 2022 - 12 - 11,
        property_type: "House Apartment",
        furnishing: "SemiFurnished",
        property_status: "For rent",
        bedroom: 2,
        bathroom: 2,
        balcony: 2,
        parking: 2
    }
]
function ProductDetails() {

    const [value, setValue] = useState([0, 40000]);
    const [dvalue, setdValue] = useState([0, 40000]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 8 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 8 ? 0 : prevIndex + 1));
    };


    const handlePrevClick1 = () => {
        setCurrentIndex1((prevIndex) => (prevIndex === 0 ? cards.length - 4 : prevIndex - 1));
    };

    const handleNextClick1 = () => {
        setCurrentIndex1((prevIndex) => (prevIndex === cards.length - 4 ? 0 : prevIndex + 1));
    };
    // const [openNav, setOpenNav] = React.useState(false);

    // React.useEffect(() => {
    //     window.addEventListener(
    //         "resize",
    //         () => window.innerWidth >= 960 && setOpenNav(false),
    //     );
    // }, []);
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

        <div className={`bg-gray-50 flex flex-col space-y-4 p-10 `} >
            <p className="text-black">Search</p>
            <ButtonGroup variant="outlined">
                <Button className="hover:bg-red-800 hover:text-white">For rent </Button>
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
    return (
        <div className="bg-gray-400 ">


            <Carousel
                className="rounded-xl"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}


                    </div>
                )}
            >
                {images.map(({ image }, index) => (
                    <img src={image} alt="" srcset="" className="w-full h-[500px]" />
                ))}



            </Carousel>

            <div>
                <div className="flex justify-center gap-7 p-5 ">
                    {subImages.map(({ image }, index) => (
                        <img src={image} alt="" className="h-40 rounded-xl" />
                    ))}
                </div>

                <div className="flex m-10">
                    <div>
                        {/* FOR RENT */}
                        <div className="bg-white m-5 shadow-2xl rounded-2xl">
                            <div className=" flex justify-between p-10">
                                <div className="space-y-2">
                                    <Button color="red" className="w-25 h-10 ">FOR RENT</Button>
                                    <h1 className="font-bold text-2xl mt-5">Pranjpe Blue Ridge</h1>
                                    <p className="text-sm text-gray-500">Wanawadi pune Maharastra</p>
                                </div>
                                <div className="flex flex-col items-end">
                                    <p className="text-red-800 font-bold text-2xl  "><i class="fa fa-inr me-2" aria-hidden="true"></i>32000</p>
                                    <p className="text-gray-500 text-sm">See other charges</p>
                                    <div className="flex gap-5 mt-2 cursor-pointer">
                                        <p><img src="https://t4.ftcdn.net/jpg/05/34/59/33/360_F_534593362_nkbfsQgq1ebwFrPEWgUecre3JvScKtU7.jpg" className="h-5" alt="" /></p>
                                        <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEBO24nmNppmWgywH6Tbnin07ZmRgqWBt6Q&s" className="h-5" alt="" /></p>
                                    </div>
                                </div>
                            </div>
                            <hr className="bg-black h-1" />

                            <div className="p-10">
                                <p className="text-gray-700">FEATURES</p>
                                <div className="flex gap-5 mt-5">
                                    {
                                        feactures.map(({ feature, count }, index) => (
                                            <div className="flex border-e-2 border-black gap-2 pe-2 font-bold text-sm">
                                                <p>{count}</p>
                                                <p>{feature}</p>

                                            </div>

                                        ))
                                    }
                                </div>

                                <div>
                                    <p className="mt-5 font-bold">Description</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam voluptatem accusantium quam ut molestiae accusamus esse deserunt iusto delectus.</p>
                                </div>

                            </div>
                        </div>

                        {/* Video */}
                        <div className="bg-white m-5 shadow-2xl rounded-2xl">
                            <div className="p-10">
                                <p className="text-2xl font-bold">Video</p>
                                <video className=" h-[400px] rounded-lg mt-2 " controls autoPlay muted>
                                    <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        {/* Properties details */}

                        <div className="bg-white m-5 p-5 shadow-2xl rounded-2xl">
                            <p className="font-bold text-xl">Property Details</p>
                            <div>
                                {
                                    property_Details.map((item, index) => (
                                        <div className="grid grid-cols-2 gap-4 p-5 ">
                                            <div className="flex gap-2">
                                                <p className="text-gray-700">Property id : </p><p className="font-bold ms-20">{item.p_id}</p>
                                            </div>
                                            <div className="flex gap-3 ">
                                                <p className="text-gray-700">price: </p><p className="font-bold ms-10">{item.price}</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <p className="text-gray-700">Security Deposite: </p><p className="font-bold ms-8">{item.security_deposite}</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <p className="text-gray-700">Year built : </p><p className="font-bold ms-1">{item.year_built}</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <p className="text-gray-700">Property Type : </p><p className="font-bold ms-14">{item.property_type}</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <p className="text-gray-700">Furnishing : </p><p className="font-bold ">{item.furnishing}</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <p className="text-gray-700">Property Status : </p><p className="font-bold ms-12">{item.property_status}</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <p className="text-gray-700">Bedrooms : </p><p className="font-bold ms-1">{item.bedroom}</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <p className="text-gray-700">Bathrooms : </p><p className="font-bold ms-20">{item.bathroom}</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <p className="text-gray-700">Balconies : </p><p className="font-bold ms-2">{item.balcony}</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <p className="text-gray-700">Parkings : </p><p className="font-bold ms-24">{item.parking}</p>
                                            </div>



                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Amenities and Features */}
                        <div className="bg-white m-5 p-5 shadow-2xl rounded-2xl">
                            <p className="font-bold text-xl">Amenities and Features</p>
                            <div>
                                {
                                    property_Details.map((item, index) => (
                                        <div className="grid grid-cols-2 gap-4 p-5 ">
                                            <div className="flex gap-2">
                                                <p className="text-gray-700"><i class="fa fa-wifi" aria-hidden="true"></i></p><p className="font-bold ms-10">Internet / Wifi Connectivity</p>
                                            </div>
                                            <div className="flex gap-3 ">
                                                <p className="text-gray-700"><img src="src\assets\images\games.png" alt="" className="h-6" /></p><p className="font-bold ms-10">Indoor Games Room</p>
                                            </div>

                                            <div className="flex gap-3">
                                                <p className="text-gray-700"><img src="src\assets\images\grill.png" alt="" className="h-6" /></p><p className="font-bold ms-8">Barbeque pit</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <p className="text-gray-700"><img src="src\assets\images\park.png" alt="" className="h-6" /></p><p className="font-bold ms-10">Park</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <p className="text-gray-700"><img src="src\assets\images\tennis.png" alt="" className="h-6" /></p><p className="font-bold ms-8">Outdoor Tennis Court</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <p className="text-gray-700"><img src="src\assets\images\parked-car.png" alt="" className="h-6" /></p><p className="font-bold ms-10 ">Visitors Parking</p>
                                            </div>

                                            <div className="flex gap-3">
                                                <p className="text-gray-700"><img src="src\assets\images\theatre.png" alt="" className="h-6" /></p><p className="font-bold ms-8">Mini Cinema Theatre</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <p className="text-gray-700"><img src="src\assets\images\swimmer.png" className="h-6" alt="" /></p><p className="font-bold ms-10">Infinity pool</p>
                                            </div>




                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white m-5 p-5 shadow-2xl rounded-2xl">
                            <p className="font-bold text-xl">Map</p>
                            <div className="flex flex-col space-y-4 justify-center items-center">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711154514!2d73.78056548298485!3d18.524598599524676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1722924680286!5m2!1sen!2sin" width="600" height="450" ></iframe>
                            </div>
                        </div>

                        {/* What Nearby */}
                        <div className="
                         bg-white shadow-2xl p-5 m-5 rounded-2xl">
                            <p className="font-bold text-xl mb-5">What's Nearby</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia vero voluptates dolor iusto placeat cumque saepe perspiciatis eum aut!</p>
                            <div className="grid grid-cols-2 gap-4 mt-5">
                                <p>School : <span className="ms-[70px] font-bold">0.7 km</span></p>
                                <p>University : <span className="ms-12 font-bold">1.3 km</span></p>
                                <p>Glocery center : <span className="ms-4 font-bold">0.6 km</span></p>
                                <p>Market : <span className="ms-[70px] font-bold">1.5 km</span></p>
                                <p>Hospital : <span className="ms-16 font-bold">0.4 km</span></p>
                                <p>Metro Station : <span className="ms-6 font-bold">1.10 km</span></p>
                                <p>Gym, Welness : <span className="ms-4 font-bold">2.5 km</span></p>


                            </div>
                        </div>

                        {/* Guest Review */}
                        <div className="bg-white m-5 p-5 shadow-2xl rounded-2xl" >
                            <div className="flex justify-between items-center">
                                <p className="font-bold text-xl mb-5">Guest Reviews</p>
                                <Button variant="outlined" color="red">View All Reviews</Button>
                            </div>

                            <div>
                                {reviews.map((item, index) => (
                                    <div className="space-y-5 mb-10">
                                        <div className="flex gap-5 ">
                                            <div><img src={item.profile} className="h-14 rounded-full w-14" alt="" /></div>

                                            <div className="">
                                                <p className="font-bold">{item.name}</p>
                                                <p className="text-xs text-gray-600">{item.date}</p>
                                                <p className="flex">{Array(item.start).fill().map((_, i) => (<StarIcon />))}</p>
                                                <p className="mt-4 text-sm">{item.decription}</p>
                                            </div>

                                        </div>
                                        <hr className="h-[2px]  bg-black" />
                                    </div>


                                ))}

                                <div className="space-y-3 p-5">
                                    <p className="font-bold">Leave A Comment</p>
                                    <div className="flex gap-5 ">
                                        <div className="w-full">
                                            <p className="mb-2">Name</p>
                                            <Input label="Your Name" className="" />
                                        </div>
                                        <div className="w-full">
                                            <p className="mb-2">Email</p>
                                            <Input label="Your Email" />
                                        </div>

                                    </div>
                                    <Checkbox label="Save Your name,email for the next time review" />;
                                    <p>Review</p>
                                    <Textarea label="Your Message" />
                                    <Button color="red">Post Comment</Button>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div>
                        {/* Profile */}
                        <div className="bg-white mb-5 p-10 w-full space-y-4 shadow-2xl rounded-2xl ">
                            <div className=" flex  gap-2 space-x-2 ">
                                <div>
                                    <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" className="h-14 rounded-full w-14" />
                                </div>
                                <div className="text-xs flex flex-col gap-1">
                                    <p className="text-[15px] font-bold">Anil Pore</p>
                                    <p className="text-[10px] text-gray-700">+91 9045784652</p>
                                    <p className="text-[12px] text-gray-700">anilpores@gmail.com</p>
                                </div>
                            </div>

                            <div className="space-y-3">

                                <Input color="purple" label="Full Name" />
                                <Input color="purple" label="Phone Number" type="number" />
                                <Input color="purple" label="Email Address" />
                                <Textarea size="lg" label="Message" color="purple" />
                            </div>
                            <div className="flex justify-center">
                                <Button color="red" className="">Send Message</Button>
                            </div>

                        </div>

                        {/* Navbar */}
                        <div className=" rounded-2xl w-full bg-white m-auto">
                            <Navbar className="p-5 z-20    px-4 py-2 lg:px-8 lg:py-4 shadow-2xl rounded-2xl">
                                <div className="">

                                    <div className=" gap-4">
                                        <div className="mr-4 lg:block">{navList}</div>

                                        {/* <IconButton
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
                                    </IconButton> */}
                                    </div>
                                </div>
                                {/* <MobileNav open={openNav} className="z-30 bg-white">
                                {navList}
                            </MobileNav> */}
                            </Navbar>
                        </div>
                    </div>

                </div>

                {/* Previously used Properties */}
                <div className="m-5 mb-10 pb-5 ">


                    <div className="md:flex items-center  space-x-4 mb-4 hidden  p-5 m-10  shadow-2xl bg-white rounded-2xl">

                        <i class="fa fa-chevron-left bg-gray-300 p-5 rounded-full hover:bg-gray-400" aria-hidden="true" onClick={handlePrevClick}></i>

                        <div className="md:flex space-x-4 overflow-hidden b ">
                            {data.slice(currentIndex, currentIndex + 4).map((item, index) => (
                                <div key={index} className=" ">
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
                                </div>
                            ))}
                        </div>



                        <i class="fa fa-chevron-right bg-gray-300 p-5 rounded-full hover:bg-gray-400 " aria-hidden="true" onClick={handleNextClick}></i>

                    </div>



                </div>
            </div>

        </div>

    )
}
export default ProductDetails