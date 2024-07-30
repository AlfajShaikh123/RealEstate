function Footer() {
    return (<>
        <div className="bg-black w-full  p-10">
            <div className=" md:flex  md:flex-row   justify-between w-full ">
                <div>
                    <p className="text-white text-sm">Specializes in providing high-class tour for those in need. Contact us</p>
                    <div className="flex text-sm mt-3 gap-1">
                        <img src="https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png" alt="" className="h-5" />
                        <p className="text-white">Lane No. 3, Balajinagar,Mahadev Nagar, Kharadi</p>
                    </div>
                    <div className="flex text-sm mt-3 gap-2">
                        <img src="https://pnghq.com/wp-content/uploads/pnghq.com-phone-icon-transparent-im-9.png" alt="" className="h-5" />
                        <p className="text-white">+91 9075326686</p>
                    </div>
                    <div className="flex text-sm mt-3 mb-6 gap-2">
                        <img src="https://images.vexels.com/content/140137/preview/email-round-icon-6a627f.png" alt="" className="h-5" />
                        <p className="text-white">realestate@gmail.com</p>
                    </div>
                </div>
                <div className="grid grid-rows-1 grid-flow-col md:gap-32">
                <div className="text-white text-sm space-y-3 cursor-pointer">
                    <p className="text-lg">Categories</p>
                    <p>Pricing plans</p>
                    <p>Our Services</p>
                    <p>About us</p>
                    <p>Contact us</p>
                </div>
                <div className="text-white text-sm space-y-3 cursor-pointer">
                    <p className="text-lg">Our Company</p>
                    <p>Property For Sale</p>
                    <p>Property For Rent</p>
                    <p>Property For Buy</p>
                    <p>Our Agents</p>
                </div>
                
                </div>
                <div className="text-white text-sm space-y-3 cursor-pointer mt-5">
                    <p className="text-lg">Newsletter</p>
                    <p>Your Weekly / Montly Dose of Knowledge and Inspiration</p>
                    <p className="flex gap-2 ">
                        <img src="https://images.vexels.com/content/140137/preview/email-round-icon-6a627f.png" alt="" className="h-5" />
                        <p className="text-white">Your Email address</p>
                    </p>

                </div>
                

            </div>
            <hr className="mt-5" />
            <div className="flex justify-between ">
                <p className="text-white text-sm mt-5">@ RealEstate All Rights Reserved</p>
                <p className="text-white flex mt-5 text-sm space-x-3  ">
                    <p>Terms of Services </p>
                    <p>Privacy Policy</p>
                    <p>Cookie policy</p>
                </p>
            </div>
        </div>



    </>)
}

export default Footer