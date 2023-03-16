import React from "react";

const HotelDetails = (props) => {
	return (
		<div className="flex flex-row justify-around sm:justify-center sm:gap-x-20 lg:gap-x-32 items-center gap-x-4  w-full">
			<div className="flex flex-col justify-center items-center m-1">
				<div className="w-[40px]">
					<img
						src="https://cdn-icons-png.flaticon.com/512/991/991943.png"
						alt="image"
					/>
				</div>
				<div className="font-semibold p-1">Bed {props.bed}</div>
			</div>

			<div className="flex flex-col justify-center items-center m-1">
				<div className="w-[40px]">
					<img
						src="https://cdn-icons-png.flaticon.com/512/1275/1275508.png"
						alt="image"
					/>
				</div>
				<div className="font-semibold p-1">Bath {props.bathroom}</div>
				{/* <div className="">2</div> */}
			</div>

			<div className="flex flex-col justify-center items-center m-1">
				<div className="w-[40px]">
					<img
						src="https://cdn-icons-png.flaticon.com/512/2400/2400622.png"
						alt="image"
					/>
				</div>
				<div className="font-semibold p-1">Room {props.room}</div>
				{/* <div className="">5</div> */}
			</div>

			<div className="flex flex-col justify-center items-center m-1">
				<div className="w-[40px]">
					<img
						src="https://cdn-icons-png.flaticon.com/512/694/694642.png"
						alt="image"
					/>
				</div>
				<div className="font-semibold p-1">Persons {props.guest}</div>
				{/* <div className="">4</div> */}
			</div>
		</div>
	);
};

export default HotelDetails;
