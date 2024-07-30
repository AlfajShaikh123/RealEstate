import {
   
    Button,
    
} from "@material-tailwind/react";
function ServiceCard() {
    return (<>

        <div className="bg-gray-200 p-5 mt-5">
            <p className="text-center  font-bold text-xl">What We Do ? </p>
            <div className="flex w-[50%] md:flex-row flex-col  m-auto gap-3 mt-5">
                <div className="bg-white rounded-xl p-5 space-y-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/1441/1441311.png" alt="" className="h-10 m-auto" />
                    <p className="text-center font-bold">Buy A New Home</p>
                    <p className="text-center text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam laudantium tenetur impedit laboriosam unde eveniet beatae dolore at aperiam!</p>
                    <div className="flex justify-center mt-5">
                        <Button color="red" >Learn More</Button>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-5 space-y-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/1441/1441333.png" alt="" className="h-10 m-auto" />
                    <p className="text-center font-bold">Rent A New Home</p>
                    <p className="text-center text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam laudantium tenetur impedit laboriosam unde eveniet beatae dolore at aperiam!</p>
                    <div className="flex justify-center mt-5">
                        <Button color="red" >Learn More</Button>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-5 space-y-5">
                    <img src="https://cdn-icons-png.flaticon.com/256/1441/1441334.png" alt="" className="h-10 m-auto" />
                    <p className="text-center font-bold">Sale A New Home</p>
                    <p className="text-center text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam laudantium tenetur impedit laboriosam unde eveniet beatae dolore at aperiam!</p>
                    <div className="flex justify-center mt-5">
                        <Button color="red" >Learn More</Button>
                    </div>
                </div>

            </div>
        </div>
    </>)
}
export default ServiceCard