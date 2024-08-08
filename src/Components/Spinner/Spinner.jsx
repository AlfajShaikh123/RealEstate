import React from 'react';
import BounceLoader from "react-spinners/BounceLoader";
function Spinner() {
    return (<><div className="flex justify-center items-center h-screen fixed top-0 right-0 left-0 bottom-0 bg-blue-gray-200 bg-opacity-20">
        <BounceLoader size={150} color={"#123abc"} loading={true} />
    </div></>)
}

export default Spinner