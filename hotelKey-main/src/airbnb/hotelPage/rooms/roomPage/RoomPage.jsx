import React from "react";
import HotelCarasoul from "../../HotelCarasoul";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiHeader } from "../../../../services/authHeader";
import { useState } from "react";
import HotelDetails from "../../HotelDetails";
import HotelsOfferingList from "../../HotelsOfferingList";
import BookingSection from "../../BookingSection";
import HotelMap from "../../../maps/HotelMap";
const RoomPage = () => {
	const { id } = useParams();
	const [room, setroom] = useState([]);
	const [images, setimages] = useState([]);
	const [hotel, sethotel] = useState([]);
	const getRoom = async () => {
		try {
			const { data, status } = await axios.get(
				`https://test.hotelkey.pk/api/get-room/${btoa(id)}`,
				apiHeader
			);
			if (status === 200) {
				setroom(data.room);
				sethotel(data.data);
				setimages(data.image);
			}
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		getRoom();
	}, []);

	return (
		<>
			<div className="flex flex-col justify-center items-center mt-9 ">
				{/* Carasoul */}
				<div className="flex justify-center border-2 border-black ">
					<HotelCarasoul props={images} />
				</div>
				{/* Room Name */}
				<div className="py-3 text-3xl font-semibold tracking-wide">
					{room && room.title},{" "}
					<span className="font-normal text-lg">
						{/* {hotel.length !== 0 ? hotel.province.toUpperCase() : <></>} */}
					</span>
				</div>
				<div className="w-full flex mt-6 flex-col px-2 justify-center items-center">
					<div className="w-full">
						<HotelDetails
							bed={room.no_beds}
							room={room.no_rooms}
							bathroom={1}
							guest={room.no_guest}
						/>
					</div>
				</div>
				{/* Amenities */}
				<div className="justify-center items-center">
					<div className="p-4 flex justify-center font-semibold text-3xl ">
						Amenities
					</div>
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
				<div className="mt-20  w-full flex justify-center flex-col items-center">
					<div className="text-3xl p-3 font-bold">Booking Details</div>
					<BookingSection price={room.total_amount} />
				</div>
				{/* Map Section */}
				<div className="text-3xl font-bold p-4">Hotel Location</div>
				<HotelMap lat={hotel.latitude} lon={hotel.longitude} />
			</div>
		</>
	);
};

export default RoomPage;
