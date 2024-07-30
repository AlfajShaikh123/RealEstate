import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
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

const data = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s",
        name: "Kirti Agarwal ",
        posittion: "Project Manager",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, delectus modi repudiandae facilis fugit nesciunt laborum asperiores unde dignissimos dicta!",
        star: 5
    }, {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s",
        name: "Kirti Agarwal ",
        posittion: "Project Manager",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, delectus modi repudiandae facilis fugit nesciunt laborum asperiores unde dignissimos dicta!",
        star: 5
    }

]
function ClientCard() {
    return (
        <div className="bg-gray-200 p-5">
            <p className="text-center text-2xl font-bold p-2">What Our Client Says</p>
            <div className="flex justify-center md:flex-row flex-col items-center  m-auto  ">
                {data.map(({ image, name, posittion, description, star }, index) => (
                    <Card color="transparent" shadow={false} className="w-full max-w-[26rem] rounded-xl border border-black p-2 m-5 shadow-xl">
                        <CardHeader
                            color="transparent"
                            floated={false}
                            shadow={false}
                            className="mx-0 flex items-center gap-4 pt-0 pb-8"
                        >
                            <Avatar
                                size="lg"
                                variant="circular"
                                src={image}
                                alt="tania andrew"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <Typography variant="h5" color="blue-gray">
                                        {name}
                                    </Typography>


                                </div>
                                <Typography color="blue-gray">{posittion}</Typography>
                            </div>
                        </CardHeader>
                        <CardBody className="mb-6 p-0">
                            <Typography>
                                {description}
                            </Typography>
                        </CardBody>
                        <CardBody className="mb-6 p-0">
                            <Typography>
                                <div className="5 flex items-center gap-0">
                                    {Array(star).fill().map((_, i) => (
                                        <StarIcon />
                                    ))}
                                </div>
                            </Typography>
                        </CardBody>
                    </Card>
                ))}


            </div>
            <div className="flex justify-center gap-5">
                <i class="fa fa-chevron-left bg-gray-300 p-3 rounded-full hover:bg-red-700" aria-hidden="true"></i>
                <i class="fa fa-chevron-right bg-gray-300 p-3 rounded-full hover:bg-red-700 " aria-hidden="true"></i>
            </div>

        </div>

    );

}
export default ClientCard