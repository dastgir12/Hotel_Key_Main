import React from "react";
import { useParams } from "react-router-dom";
import HotelCarasoul from "./HotelCarasoul";
import HotelDetails from "./HotelDetails";
import HotelsOfferingList from "./HotelsOfferingList";
import ReviewMapping from "./ReviewMapping";
import BookingSection from "./BookingSection";
import HotelMap from "../maps/HotelMap";
import { useEffect } from "react";
import axios from "axios";
import { apiHeader } from "../../services/authHeader";
import { useState } from "react";
import RoomCard from "./rooms/RoomCard";
const HotelPage = () => {
 const [hotel, sethotel] = useState([]);
 const [rooms, setrooms] = useState([]);
 const [images, setimages] = useState([]);
 // Getting Id of Hotel/Room
 const { id } = useParams();
 const hotelCredentials = id.split("-");

 /// Conditionally Making Api of Hotel/Residence
 const apiUrl = () => {
  if (hotelCredentials[1] === "1") {
   return `https://test.hotelkey.pk/api/get-hotel/${btoa(hotelCredentials[0])}`;
  } else {
   return `https://test.hotelkey.pk/api/get-residence/${btoa(hotelCredentials[0])}`;
  }
 };
 /// Rendering Rooms
 const MappingRoom = () => {
  if (rooms.length > 0) {
   return rooms.map((e, i) => <RoomCard key={i} props={e} />);
  }
 };

 /// Calling Api
 const getHotel = async () => {
  try {
   const { data, status } = await axios.get(apiUrl(), apiHeader);

   if (status === 200) {
    sethotel(data.data);
    setimages(data.image);
    if (data.room) {
     setrooms(data.room);
    }
   }
  } catch (e) {
   console.log(e);
  }
 };
 useEffect(() => {
  getHotel();
 }, []);

 return (
  <>
   <div className="flex flex-col justify-center items-center mt-9 ">
    {/* Carasoul */}
    <div className="flex justify-center border-2 border-black ">
     <HotelCarasoul props={images} />
    </div>
    {/* Hotel Name */}
    <div className="py-3 text-3xl font-semibold tracking-wide">
     {hotel.name},{" "}
     <span className="font-normal text-lg">
      {hotel.length !== 0 ? hotel.province.toUpperCase() : <></>}
     </span>
    </div>
    {/* Details */}
    <div className="w-full flex mt-6 flex-col px-2 justify-center items-center">
     <div className="w-full">
      <HotelDetails
       bed={hotel.bed}
       room={hotel.room}
       bathroom={hotel.bathroom}
       guest={hotel.guest}
      />
     </div>
    </div>
    {/* Amenities */}
    <div className="justify-center items-center">
     <div className="p-4 flex justify-center font-semibold text-3xl ">Amenities</div>
     <div>
      <HotelsOfferingList
       tv={hotel.tv}
       door_lock={hotel.door_lock}
       kitchen={hotel.kitchen}
       parking={hotel.parking}
       aircondition={hotel.aircondition}
       camera={hotel.camera}
       washing={hotel.washing}
       wifi={hotel.wifi}
      />
     </div>
    </div>
    {/* Hotel Rooms Card */}
    {hotelCredentials[1] === "1" ? (
     <div className="text-3xl p-10 font-semibold text-center">Hotel Rooms</div>
    ) : (
     <></>
    )}

    <div className="flex gap-8 justify-center items-center flex-wrap">
     <MappingRoom />
    </div>
    {/* Booking Section */}
    <div className="mt-20  w-full flex justify-center flex-col items-center">
     {rooms.length === 0 ? (
      <>
       <div className="text-3xl p-3 font-bold">Booking Details</div>
       <BookingSection price={hotel.price} />
      </>
     ) : (
      <></>
     )}
    </div>
    {/* Map Section */}
    <div className="text-3xl font-bold p-4">Hotel Location</div>
    <HotelMap lat={hotel.latitude} lon={hotel.longitude} />
    {/* Reviews Section */}
    <div className="mt-10">
     <div className="text-3xl grid place-items-center font-bold">Reviews</div>
     <div className="p-4">
      <ReviewMapping />
     </div>
    </div>

    <div className="mt-9"></div>
   </div>
  </>
 );
};

export default HotelPage;
