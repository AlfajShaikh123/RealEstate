import { useState, useRef } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Radio,
    Select, Option,
    Input,
    Checkbox,
    Textarea,
    Button,
} from "@material-tailwind/react";

function Properties() {
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (<>
        <div className="flex">
            <div className="mt-16 bg-gray-50  p-5 flex w-[250px] shadow-xl">
                <ul className="space-y-10 cursor-pointer">
                    <li className="flex items-center gap-2 hover:bg-pink-50 p-2">  <img src="https://static-00.iconduck.com/assets.00/dashboard-icon-2048x2048-smbjyr2w.png" alt="" className="h-5" />Dashboard</li>
                    <li className="flex items-center gap-2 hover:bg-pink-50 p-2"><img src="https://cdn-icons-png.flaticon.com/512/951/951867.png" alt="" className="h-5" /> My Properties</li>
                    <li className="flex items-center  gap-2 hover:bg-pink-50 p-2"><i class="fa fa-file-text" aria-hidden="true"></i>My Invoices</li>
                    <li className="flex items-center  gap-2 hover:bg-pink-50 p-2"><i class="fa fa-heart" aria-hidden="true"></i>My Favourites</li>
                    <li className="flex items-center  gap-2 hover:bg-pink-50 p-2"><img src="https://cdn-icons-png.freepik.com/256/707/707675.png?semt=ais_hybrid" alt="" className="h-5" />Reviews</li>
                    <li className="flex items-center  gap-2 hover:bg-pink-50 p-2"><i class="fa fa-user" aria-hidden="true"></i>My Profile</li>
                    <li className="flex items-center  gap-2 hover:bg-pink-50 p-2"><i class="fa fa-plus-circle" aria-hidden="true"></i>Add Properties</li>
                    <li className="flex items-center  gap-2 hover:bg-pink-50 p-2"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</li>
                </ul>


            </div>
            <div className="flex flex-col w-full m-10">
                <div className="mt-20  border-1 border-black rounded-xl shadow-xl ">
                    <div className="bg-pink-200 p-4 rounded-t-xl ">
                        <p className="font-bold">Property Gallary</p>
                    </div>
                    <div className="space-y-5">
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                        {profileImage && <img src={profileImage} alt="Profile" className="h-24 w-24 mt-4 m-auto" />}
                        <Button color="red" className="mt-20 w-50 m-auto " fullWidth type="button" onClick={handleButtonClick}>
                            Choose Image
                        </Button>
                        <p className="text-center text-sm p-5 ">Drag image here to upload</p>
                    </div>


                </div>
                {/* Property Basic Information */}
                <div className="mt-20  border-1 border-black rounded-xl shadow-xl ">
                    <div className="bg-pink-200 p-4 rounded-t-xl ">
                        <p className="font-bold">Property Basic Information</p>
                    </div>
                    <div className="space-y-3 p-5">
                        <div>
                            <p className="mb-2">Property Title</p>
                            <Input size="lg" label="Property Title" />
                        </div>



                        <div className="flex gap-2">
                            <div className="w-full">
                                <p className="mb-2">Status</p>
                                <Select label="Status">
                                    <Option>Sell</Option>
                                    <Option>Rent</Option>

                                </Select>
                            </div>
                            <div className="w-full">
                                <p className="mb-2">Type</p>
                                <Select label="Type">
                                    <Option>Apartment</Option>
                                    <Option>House</Option>
                                    <Option>Independent House</Option>
                                    <Option>Independent Floor</Option>
                                    <Option>Office</Option>
                                </Select>
                            </div>

                        </div>


                        <div>
                            <div className="flex gap-2 ">
                                <div className="flex flex-col w-full">
                                    <p>Price</p>
                                    <div className="relative flex w-full max-w-[25rem] mt-2">
                                        <div>

                                        </div>
                                        <Input
                                            type="number"
                                            label="000"

                                            className="pr-20"
                                            containerProps={{
                                                className: "min-w-0",
                                            }}
                                        />
                                        <p
                                            size="sm"

                                            className="!absolute p-1 right-1 top-1 rounded"
                                        >
                                            INR
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p>Area</p>
                                    <div className="relative flex w-full max-w-[24rem] mt-2">

                                        <Input
                                            type="number"
                                            label="000"

                                            className="pr-20"
                                            containerProps={{
                                                className: "min-w-0",
                                            }}
                                        />
                                        <p
                                            size="sm"

                                            className="!absolute p-1 right-1 top-1 rounded"
                                        >
                                            Sq.ft
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="mb-2 ">Rooms</p>
                                    <Select className="">
                                        <Option>1</Option>
                                        <Option>2</Option>
                                        <Option>3</Option>
                                        <Option>4</Option>
                                        <Option>More than 4</Option>
                                    </Select>
                                </div>

                            </div>
                        </div>



                    </div>


                </div>

                {/* Property Location*/}

                <div className="mt-20  border-1 border-black rounded-xl shadow-xl ">
                    <div className="bg-pink-200 p-4 rounded-t-xl ">
                        <p className="font-bold">Property Location</p>
                    </div>
                    <div className=" gap-5 p-5 grid grid-rows-2 grid-flow-col">

                        <div>
                            <p className="mb-2">Address</p>
                            <Input size="lg" label="Address" />
                        </div>

                        <div>
                            <p className="mb-2">City name</p>
                            <Input size="lg" label="City Name" />
                        </div>
                        <div>
                            <p className="mb-2">State</p>
                            <Input size="lg" label="State" />
                        </div>
                        <div>
                            <p className="mb-2">Zip Code</p>
                            <Input size="lg" label="Zip Code" type="number" placeholder="0000" />
                        </div>




                    </div>


                </div>

                {/* Property Information */}
                <div className="mt-20  border-1 border-black rounded-xl shadow-xl  ">
                    <div className="bg-pink-200 p-4 rounded-t-xl ">
                        <p className="font-bold">Property Information</p>
                    </div>
                    <div className="p-4">

                        <p className="mb-2">Message</p>
                        <Textarea label="Message" />
                        <div className="flex gap-5">
                            <div className="w-full">
                                <p className="mb-2">Building Age </p>

                                <Select label="Select Version" className="">
                                    <Option>0-1 Year</Option>
                                    <Option>0-5 Year</Option>
                                    <Option>0-10 Year</Option>
                                    <Option>0-20 Year</Option>
                                    <Option>0-50 Year</Option>
                                </Select>
                            </div>
                            <div className="w-full">
                                <p className="mb-2">Bedrooms</p>
                                <Select label="Select Version" className="">
                                    <Option>1</Option>
                                    <Option>2</Option>
                                    <Option>3</Option>
                                    <Option>4</Option>
                                    <Option>5</Option>
                                </Select>
                            </div>
                            <div className="w-full">
                                <p className="mb-2">Bathrooms</p>
                                <Select label="Select Version" className="">
                                    <Option>1</Option>
                                    <Option>2</Option>
                                    <Option>3</Option>
                                    <Option>4</Option>
                                    <Option>5</Option>
                                </Select>
                            </div>

                        </div>


                        <div className="mt-4">
                            <p>Other Features (Optional)</p>
                            <div className="flex gap-6">
                                <Checkbox label="Air Conditioning" />;
                                <Checkbox label="Swimming Pool" />;
                                <Checkbox label="Landary Rooms" />;
                                <Checkbox label="Central Heating" />;
                                <Checkbox label="Gym" />;
                                <Checkbox label="Window Covering" />;

                            </div>
                        </div>

                    </div>



                </div>
                {/* Property Contact Details */}
                <div className="mt-20  border-1 border-black rounded-xl shadow-xl ">
                    <div className="bg-pink-200 p-4 rounded-t-xl ">
                        <p className="font-bold">Property Location</p>
                    </div>
                    <div className=" gap-5 p-5 grid grid-rows grid-flow-col">

                        <div>
                            <p className="mb-2">Full name</p>
                            <Input size="lg" label="Name" />
                        </div>
                        <div>
                            <p className="mb-2">Email Address</p>
                            <Input size="lg" label="Email Address" type="email" />
                        </div>
                        <div>
                            <p className="mb-2">Phone Number</p>
                            <Input size="lg" label="Phone Number" type="number" />
                        </div>





                    </div>


                </div>
                <Button color="red" className="mt-10">Submit Property</Button>
            </div>


        </div>


    </>)
}

export default Properties