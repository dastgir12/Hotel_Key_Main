import React from "react";
import { DatePicker } from "antd";
const BookingSection = (props) => {
	const { RangePicker } = DatePicker;
	return (
		<>
			<div className="flex flex-col border-2 p-4 border-blue-400 justify-center items-center w-[80vw] sm:w-[50vw] lg:w-[40vw] rounded-[35px] shadow-xl">
				{/* Price Section */}
				<div className="flex justify-between w-full">
					<div className="text-lg font-semibold">
						Rs.{props.price}/<span className="font-normal">night</span>
					</div>
					<div className="text-orange-500 font-semibold ">Contact Host</div>
				</div>
				{/* Date Section */}
				<div className="mt-3 ">
					<div className="text-center font-semibold text-lg">
						Check In/Out Date
					</div>
					<div className="mt-2">
						<RangePicker style={{ padding: "10px" }} />
					</div>
				</div>
				{/* Person Section */}
				<div className="mt-1 ">
					<div className="text-center font-semibold text-lg p-2">Persons</div>
					<div className="flex flex-col w-60  gap-y-2">
						<input
							className="p-2 border rounded-lg"
							type="number"
							placeholder="Enter Adults"
						/>
						<input
							className="p-2 border rounded-lg"
							type="number"
							placeholder="Enter Children"
						/>
					</div>
				</div>
				{/* Button */}
				<div className="mt-3">
					<div className="px-3 py-2 bg-red-500 text-white text-xl font-semibold cursor-pointer rounded-3xl">
						Reserve
					</div>
				</div>
			</div>
		</>
	);
};

export default BookingSection;
