import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    ListItemPrefix,
    Select, Option
} from "@material-tailwind/react";


import { useState } from "react";
function LoginRegister() {
    const [status, setStatus] = useState(true)

    const handleLoginCliked = () => {
        setStatus(true)
    }
    const handleRegsiterCliked = () => {
        setStatus(false)
    }
    return (<>

        <div className="bg-gray-100 p-5 rounded-xl h-[50%]  ">
            <div className="flex justify-between">
                <Button color="red" variant="outlined" className="hover:bg-red-900 hover:text-white" onClick={handleLoginCliked} >Login</Button>
                <Button color="red" variant="outlined" className="hover:bg-red-900 hover:text-white" onClick={handleRegsiterCliked}>Register</Button>
            </div>
            <div>
                {/* Login Form */}
                <div className="">
                    {status === true ?
                        <Card color="transparent" shadow={false} className="mt-5">
                            <div className="overflow-auto">
                                <form className="  ">
                                    <div className="mb-1 flex flex-col gap-6">

                                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                                            Enter Your Email Address
                                        </Typography>
                                        <Input
                                            size="lg"
                                            placeholder="name@mail.com"
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                                            Enter Your Password
                                        </Typography>
                                        <Input
                                            type="password"
                                            size="lg"
                                            placeholder="********"
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </div>

                                    <Button color="red" className="mt-6" fullWidth>
                                        Login
                                    </Button>
                                    <Typography className="">

                                        <p className="text-right mt-2">Forgot password ?</p>

                                    </Typography>
                                    <Typography className="space-y-5 mt-5">
                                        <Button
                                            size="lg"
                                            variant="outlined"
                                            color="blue-gray"
                                            className="flex items-center gap-3 mt-5 m-auto"
                                        >
                                            <div>

                                            </div>
                                            <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6 " />
                                            Sign up with Google
                                        </Button>
                                        <Button
                                            size="lg"
                                            variant="outlined"
                                            color="blue-gray"
                                            className="flex items-center gap-3 mt-5 m-auto"
                                        >
                                            <img src="src\assets\images\facebook (2).png" alt="metamask" className="h-6 w-6" />
                                            Sign up with Facebook
                                        </Button>
                                    </Typography>
                                    <Typography color="gray" className="mt-4 text-center font-normal space-x-3 text-sm">
                                        Don't have an account?
                                        <a href="#" className="font-medium text-red-900 ms-1">
                                            Regsitor Now
                                        </a>
                                    </Typography>
                                </form>
                            </div>

                        </Card> : <Card color="transparent" shadow={false} className="mt-5">

                            <div className="overflow-auto  h-[500px]">
                                <form className="">
                                    <div className="mb-1 flex flex-col gap-6  ">
                                        <Typography>
                                            <div className="mt-5">


                                                <Select variant="static" label="Owner / Buyer">
                                                    <Option Selected>All</Option>
                                                    <Option>Material Tailwind React</Option>
                                                    <Option>Material Tailwind Vue</Option>
                                                    <Option>Material Tailwind Angular</Option>
                                                    <Option>Material Tailwind Svelte</Option>
                                                </Select>
                                            </div>
                                        </Typography>
                                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                                            Enter Your Email Address
                                        </Typography>
                                        <Input
                                            size="lg"
                                            placeholder="name@mail.com"
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                                            Enter Mobile number
                                        </Typography>
                                        <Input
                                            size="lg"
                                            placeholder="name@mail.com"
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                                            Enter Your Password
                                        </Typography>
                                        <Input
                                            type="password"
                                            size="lg"
                                            placeholder="********"
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                                            Confirm Password
                                        </Typography>
                                        <Input
                                            type="password"
                                            size="lg"
                                            placeholder="********"
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                        <Checkbox
                                            label={
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="flex items-center font-normal"
                                                >
                                                    <p> By Creating an account you agree to our <span className="font-bold text-red-900">Terms & Conditions  </span> and <span className="font-bold text-red-900">Policy</span>  </p>


                                                </Typography>
                                            }
                                            containerProps={{ className: "-ml-2.5" }}
                                        />
                                    </div>

                                    <Button color="red" className="mt-6" fullWidth>
                                        Register
                                    </Button>


                                    <Typography color="gray" className="mt-4 text-center font-normal space-x-3 text-sm">
                                        Already have an account?
                                        <a href="#" className="font-medium text-red-900 ms-1">
                                            Login here
                                        </a>
                                    </Typography>
                                </form>
                            </div>

                        </Card>}
                </div>

            </div>
        </div>
    </>)
}

export default LoginRegister