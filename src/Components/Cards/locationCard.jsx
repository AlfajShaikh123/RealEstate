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
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    };
    return (<>
        <div className=" mt-5 p-5 bg-gray-100 flex items-center justify-center ">
            <div className="relative w-full max-w-2xl mx-auto ">
                <div className="flex items-center space-x-4 mb-4">
                <i class="fa fa-chevron-left bg-gray-300 p-2 rounded-full hover:bg-gray-400" aria-hidden="true"  onClick={handlePrevClick}></i>
                    
                    <div className="flex space-x-4 overflow-hidden">
                        {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
                            <div key={index} className="bg-white  rounded-xl shadow-md">
                                <img src={card.image} alt="" className="rounded-xl " />
                            </div>
                        ))}
                    </div>

                    <i class="fa fa-chevron-right bg-gray-300 p-2 rounded-full hover:bg-gray-400" aria-hidden="true" onClick={handleNextClick}></i>
                    
                </div>

            </div>
        </div>
        )

    </>)
}

export default LocationCard