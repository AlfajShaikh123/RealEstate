import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select, Option
} from "@material-tailwind/react";

import { useState } from "react";

function LoginRegister() {
    const [status, setStatus] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [Loginemail, setLoginEmail] = useState("");
    const [Loginpassword, setLoginPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [errors, setErrors] = useState({});

    const handleLoginClicked = () => {
        setStatus(true);
    };

    const handleRegisterClicked = () => {
        setStatus(false);
    };

    const validateLogin = () => {
        const errors = {};
        if (!Loginemail) {
            errors.Loginemail = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(Loginemail)) {
            errors.Loginemail = "Email is invalid";
        }
        if (!Loginpassword) {
            errors.Loginpassword = "Password is required";
        } else if (Loginpassword.length < 6) {
            errors.Loginpassword = "Password must be at least 6 characters";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (validateLogin()) {
            // Perform login
            console.log("Login successful");
        }
    };

    const validateRegister = () => {
        const errors = {};
        if (!email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
        }
        if (!mobile) {
            errors.mobile = "Mobile number is required";
        } else if(mobile.length<=10){
            errors.mobile = "Check mobile degits";
        }
        if (!password) {
            errors.password = "Password is required";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }
        if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (validateRegister()) {
            // Perform registration
            console.log("Registration successful");
        }
    };

    return (
        <div className="bg-gray-100 p-5 rounded-xl h-[50%]">
            <div className="flex justify-between">
                <Button
                    color="red"
                    variant="outlined"
                    className="hover:bg-red-900 hover:text-white"
                    onClick={handleLoginClicked}
                >
                    Login
                </Button>
                <Button
                    color="red"
                    variant="outlined"
                    className="hover:bg-red-900 hover:text-white"
                    onClick={handleRegisterClicked}
                >
                    Register
                </Button>
            </div>
            <div>
                {status ? (
                    <Card color="transparent" shadow={false} className="mt-5">
                        <div className="overflow-auto">
                            <form className="" onSubmit={handleLoginSubmit}>
                                <div className="mb-1 flex flex-col gap-6">
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Enter Your Email Address
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="name@mail.com"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        value={Loginemail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                    />
                                    {errors.Loginemail && <p className="text-red-500">{errors.Loginemail}</p>}
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Enter Your Password
                                    </Typography>
                                    <Input
                                        type="password"
                                        size="lg"
                                        placeholder="********"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        value={Loginpassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                    />
                                    {errors.Loginpassword && <p className="text-red-500">{errors.Loginpassword}</p>}
                                </div>

                                <Button color="red" className="mt-6" fullWidth type="submit">
                                    Login
                                </Button>
                                <Typography className="">
                                    <p className="text-right mt-2">Forgot password?</p>
                                </Typography>
                                <Typography className="space-y-5 mt-5">
                                    <Button
                                        size="lg"
                                        variant="outlined"
                                        color="blue-gray"
                                        className="flex items-center gap-3 mt-5 m-auto"
                                    >
                                        <img src="https://docs.material-tailwind.com/icons/google.svg" alt="google" className="h-6 w-6" />
                                        Sign up with Google
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outlined"
                                        color="blue-gray"
                                        className="flex items-center gap-3 mt-5 m-auto"
                                    >
                                        <img src="src/assets/images/facebook.png" alt="facebook" className="h-6 w-6" />
                                        Sign up with Facebook
                                    </Button>
                                </Typography>
                                <Typography color="gray" className="mt-4 text-center font-normal space-x-3 text-sm">
                                    Don't have an account?
                                    <a href="#" className="font-medium text-red-900 ms-1">
                                        Register Now
                                    </a>
                                </Typography>
                            </form>
                        </div>
                    </Card>
                ) : (
                    <Card color="transparent" shadow={false} className="mt-5">
                        <div className="overflow-auto h-[500px]">
                            <form className="" onSubmit={handleRegisterSubmit}>
                                <div className="mb-1 flex flex-col gap-6">
                                    <Typography>
                                        <div className="mt-5">
                                            <Select variant="static" label="Owner / Buyer">
                                                <Option>All</Option>
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
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Enter Mobile number
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="123-456-7890"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                    />
                                    {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}
                                    
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Enter Your Password
                                    </Typography>
                                    <Input
                                        type="password"
                                        size="lg"
                                        placeholder="********"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Confirm Password
                                    </Typography>
                                    <Input
                                        type="password"
                                        size="lg"
                                        placeholder="********"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                                    <Checkbox
                                        label={
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="flex items-center font-normal"
                                            >
                                                By creating an account you agree to our <span className="font-bold text-red-900">Terms & Conditions</span> and <span className="font-bold text-red-900">Policy</span>
                                            </Typography>
                                        }
                                        containerProps={{ className: "-ml-2.5" }}
                                    />
                                </div>
                                <Button color="red" className="mt-6" fullWidth type="submit">
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
                    </Card>
                )}
            </div>
        </div>
    );
}

export default LoginRegister;
