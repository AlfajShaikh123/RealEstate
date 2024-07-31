import { Carousel, IconButton } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import {

    Button,

} from "@material-tailwind/react";
function LocationCard() {
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 4 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 4 ? 0 : prevIndex + 1));
    };


    const handlePrevClick1 = () => {
        setCurrentIndex1((prevIndex) => (prevIndex === 0 ? cards.length - 4 : prevIndex - 1));
    };

    const handleNextClick1 = () => {
        setCurrentIndex1((prevIndex) => (prevIndex === cards.length - 4 ? 0 : prevIndex + 1));
    };
    return (<>
        <div className=" mt-5 p-5   flex items-center justify-center ">
            <div className="relative  md:max-w-6xl mx-auto flex justify-center ">
                <div className="md:flex items-center space-x-4 mb-4 hidden">
                    <i class="fa fa-chevron-left bg-gray-300 p-2 rounded-full hover:bg-gray-400" aria-hidden="true" onClick={handlePrevClick}></i>

                    <div className="md:flex space-x-4 overflow-hidden ">
                        {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
                            <div key={index} className="bg-white  rounded-xl shadow-md ">
                                <img src={card.image} alt="" className="rounded-xl h-60 w-[1000px]  " />
                            </div>
                        ))}
                    </div>



                    <i class="fa fa-chevron-right bg-gray-300 p-2 rounded-full hover:bg-gray-400 " aria-hidden="true" onClick={handleNextClick}></i>

                </div>

                <div className="flex flex-row items-center space-x-4 mb-4 md:hidden ">
                    <i class="fa fa-chevron-left bg-gray-300 p-2 rounded-full hover:bg-gray-400" aria-hidden="true" onClick={handlePrevClick1}></i>

                    <div className="flex space-x-4 overflow-hidden   ">
                        {cards.slice(currentIndex1, currentIndex1 + 1).map((card, index) => (
                            <div key={index} className="bg-white  rounded-xl shadow-md">
                                <img src={card.image} alt="" className="rounded-xl h-60  " />
                            </div>
                        ))}
                    </div>



                    <i class="fa fa-chevron-right bg-gray-300 p-2 rounded-full hover:bg-gray-400 " aria-hidden="true" onClick={handleNextClick1}></i>

                </div>

            </div>
        </div>


    </>)
}

export default LocationCard