import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const data = [
    {
        image: "https://jeanneoliver.com/wp-content/uploads/2014/03/myhomeapril82014-9_zps9cfb9293.jpg",
        heading: "Buildings gains into housing stocks and how to Trade the sector",
        date: "20 june 2024",
        name: "Sam Mehta",
        description: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel animi doloremque libero, fugit in nihil nobis. Non sapiente dicta facilis!"
    },
    {
        image: "https://jeanneoliver.com/wp-content/uploads/2014/03/myhomeapril82014-9_zps9cfb9293.jpg",
        heading: "Buildings gains into housing stocks and how to Trade the sector",
        date: "20 june 2024",
        name: "Sam Mehta",
        description: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel animi doloremque libero, fugit in nihil nobis. Non sapiente dicta facilis!"
    },
    {
        image: "https://jeanneoliver.com/wp-content/uploads/2014/03/myhomeapril82014-9_zps9cfb9293.jpg",
        heading: "Buildings gains into housing stocks and how to Trade the sector",
        date: "20 june 2024",
        name: "Sam Mehta",
        description: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel animi doloremque libero, fugit in nihil nobis. Non sapiente dicta facilis!"
    }
]

function BlogCards() {
    return (<>
        <div className="mt-10 mb-5 ">
            <p className="text-center text-2xl font-bold">Latest Blog post</p>
        </div>
        <div className="flex justify-center md:flex-row  flex-col items-center gap-10 mb-10  ">

            {
                data.map(({ image, heading, date, name, description }, index) => (
                    <Card className="mt-10 md:max-w-[20rem] max-h-[30rem] space-y-3 shadow-xl transform transition-transform duration-300  md:hover:scale-105">
                        <CardHeader className=" h-50">
                            <img
                                src={image}
                                alt="card-image"
                            />
                        </CardHeader>
                        <CardBody className="space-y-4">
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {heading}
                            </Typography>
                            <div className="flex justify-between">
                                <Typography className="bg-gray-200 p-1 text-sm">
                                    {date}
                                </Typography>
                                <Typography className="bg-gray-200 p-1 text-sm">
                                    {name}
                                </Typography>
                            </div>
                            <Typography>
                                {description}
                            </Typography>
                        </CardBody>

                    </Card>
                ))
            }

        </div>
    </>)
}
export default BlogCards