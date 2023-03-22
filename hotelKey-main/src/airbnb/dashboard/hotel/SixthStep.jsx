import React from "react";
import CircularJSON from "circular-json";

import HotelMap from "../../maps/HotelMap";
// import CircularJSON from "circular-json";
import axios from 'axios';
import { useCookies } from "react-cookie";
const SixthStep = ({ props }) => {
  const {current, setCurrent, formValues } = props;
   const [cookies] = useCookies(["user"]);
   const token = cookies.user;
  //  const url = "https://test.hotelkey.pk/api/my-residencies";
   const headers = {
     "Content-Type": "application/json",
     "api-key": "d6dcc1bf-1189-4713-acc4-bf1da722475d",
     token: `${token}`,
   };

     const handleSubmit = () => {
    console.log(formValues);
    formValues.lat = 37.7749;
    formValues.lon = -122.4194;
    const data = CircularJSON.stringify(formValues);
    axios.post('https://test.hotelkey.pk/api/add-hotel', data , {headers})
    // console.log(headers)
      .then((response) => {
        // console.log(headers);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

 
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
    <button className="bg-green-400 w-24 px-3 py-2 rounded-2xl text-white" type="submit" onClick={handleSubmit}>
     Upload
    </button>
   </div>
  </>
 );
};

export default SixthStep;
