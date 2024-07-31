import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";


function Banner() {
    return (<>
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <div className=" object-cover object-center  w-full">
                <img
                    src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg"
                    alt="Sample"
                    className="rounded-lg shadow-lg h-[800px] w-full "
                />
                <div className="absolute inset-0 flex flex-col items-center  bg-black bg-opacity-50 p-4 mt-16 h-[735px] space-y-5">
                    <h1 className="text-white text-5xl mb-4 md:mt-28 mt-5 text-center font-bold ">Find the perfect place <br />   to call home</h1>
                    <p className="text-white text-center text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Ab totam officia odit, dolore in labore voluptate ea ducimus quis consectetur.</p>
                    <div className="flex space-x-4 ">
                        <Button className="bg-white text-black hover:bg-red-900 rounded-full">Rent</Button>
                        <Button className="bg-white text-black hover:bg-red-900 rounded-full">Buy</Button>
                        <Button className="bg-white text-black hover:bg-red-900 rounded-full">Sell</Button>
                    </div>
                    <div className="bg-white p-7 rounded-2xl mb-4">
                        <div className="flex gap-2 md:flex-row flex-col">
                            <div className="flex gap-6 md:flex-row flex-col  ">
                                <Input variant="static" label="KEYWORD" placeholder="search keyword" className="border-r-4" />

                                <Input variant="static" label="LOCATION" placeholder="search Location" className="border-r-4" />

                                <Select variant="static" label="Type">
                                    <Option Selected>All</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                            </div>

                            <Button variant="outlined" className="flex items-center gap-3 border-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                    />
                                </svg>
                                Advanced
                            </Button>
                            <Button variant="filled" className="bg-red-900 ">Find Property</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="bg-gray-300 p-10  mb-5 md:flex md:justify-center grid  gap-10 grid-rows-2 grid-flow-col  ">
            <div className="flex gap-3 items-center">
                <p className="md:text-4xl text-2xl text-red-800">300+</p>
                <p className="font-bold md:text-xl">Happy <br /> clients</p>
            </div>
            <div className="flex gap-3 items-center">
                <p className="md:text-4xl text-2xl text-red-800">1K+</p>
                <p className="font-bold md:text-xl">Property <br />  Ready</p>
            </div>
            <div className="flex gap-3 items-center" >
                <p className="md:text-4xl text-2xl text-red-800">80+</p>
                <p className="font-bold md:text-xl">Completed  <br />  Agents</p>
            </div>
            <div className="flex gap-3 items-center">
                <p className="md:text-4xl text-2xl text-red-800">60%</p>
                <p className="font-bold md:text-xl">Yearly  <br />  Growth</p>
            </div>
        </div>
    </>)
}
export default Banner