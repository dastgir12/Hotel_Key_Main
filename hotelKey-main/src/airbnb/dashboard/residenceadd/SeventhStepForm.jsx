import React from "react";
import HotelMap from "../../maps/HotelMap";
const SeventhStepForm = ({ props }) => {
 const { current, setCurrent } = props;
 return (
  <>
   <div className="flex flex-col justify-center items-center">
    <h1>Select Location</h1>
    <input
     className="p-3 mt-6  border-2  w-72 placeholder:text-center sm:w-96"
     type="text"
     placeholder="Enter Location"
    />
   </div>
   <div className="grid place-items-center my-14">
    <div className="grid place-items-center w-[60vw] ">
     <HotelMap lat="33.738045" lon="73.084488" />
    </div>
   </div>
   <div className="flex gap-2 justify-center items-center ">
    <button
     onClick={() => setCurrent(current - 1)}
     className="bg-green-400 w-24 px-3 py-2 rounded-2xl text-white"
    >
     Back
    </button>
    <button className="bg-green-400 w-24 px-3 py-2 rounded-2xl text-white" type="submit">
     Upload
    </button>
   </div>
  </>
 );
};

export default SeventhStepForm;
