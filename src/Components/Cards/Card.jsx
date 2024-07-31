const data = [
    {
        image: "src/assets/images/home.png",
        text1: "Residential",
        text2: "(55 Property)"
    },
    {
        image: "src/assets/images/skyline.png",
        text1: "Commercial",
        text2: "(88 Property)"
    },
    {
        image: "https://icon2.cleanpng.com/lnd/20240702/cor/a7c2tz30d.webp",
        text1: "Vaccation & Resort",
        text2: "(74 Property)"
    },
    {
        image: "src/assets/images/location-pin.png",
        text1: "The Land",
        text2: "(65 Property)"
    },
    {
        image: "src/assets/images/hook.png",
        text1: "New Consruction",
        text2: "(72 Property)"
    },
    ,
    {
        image: "src/assets/images/luxury-home.png",
        text1: "Luxury Estate",
        text2: "(49 Property)"
    },
    {
        image: "src/assets/images/eco-house.png",
        text1: "Eco Friendly",
        text2: "(53 Property)"
    },
    {
        image: "src/assets/images/historic-site.png",
        text1: "Historic Properties",
        text2: "(49 Property)"
    }
]

function Card() {
    return (<>
        <div className="  justify-center gap-4  grid md:grid-rows-2 md:grid-flow-col grid-rows-4 grid-flow-col ">
            {data.map(({ image, text1, text2 }, index) => (
                <div className="md:flex bg-gray-100  justify-center items-center md:gap-3   p-2 rounded-xl" key={index}>
                    <div className=" rounded-full bg-white border-2 md:p-3 p-5 ">
                        <img src={image} className="md:h-9 h-10 md:w-10 w-14 m-auto" alt="" />
                    </div>
                    <div className="">
                        <p className="text-xs font-bold text-center">{text1}</p>
                        <p className="text-[10px] text-gray-800 text-center ">{text2}</p>
                    </div>
                </div>
            ))}


        </div>
    </>)
}
export default Card