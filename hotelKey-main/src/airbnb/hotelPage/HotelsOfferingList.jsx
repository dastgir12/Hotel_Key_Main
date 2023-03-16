import React from "react";
import SingleHotelOffering from "./SingleHotelOffering";
const HotelsOfferingList = (props) => {
	// const props = {
	// 	tv: "1",
	// 	door_lock: "1",
	// 	kitchen: "1",
	// 	parking: "0",
	// 	aircondition: "1",
	// 	camera: "0",
	// 	washing: "0",
	// 	wifi: "0",
	// };
	const icons = [
		{ name: "wifi", icon: "wifiIcon" },
		{ name: "kitchen", icon: "kitchenIcon" },
		{ name: "parking", icon: "Icon" },
		{ name: "tv", icon: "icon" },
		{ name: "door_lock", icon: "icon" },
		{ name: "aircondition", icon: "icon" },
		{ name: "camera", icon: "icon" },
		{ name: "washing", icon: "icon" },
	];
	const mykey = Object.keys(props);
	const arr = [];
	mykey.forEach((e) => {
		const newObj = { [e]: props[`${e}`] };
		arr.push(newObj);
	});
	const mappingFeatures = arr.map((e, i) => {
		const key = Object.keys(e)[0];
		const value = Object.values(e)[0];
		const { icon } = icons.find((e) => e.name === key);
		return <SingleHotelOffering key={i} props={{ key, value, icon }} />
	});
	
	return (
		<>
			<div className="flex gap-x-2 gap-y-5 justify-center items-center flex-wrap md:w-[60vw]">
				{mappingFeatures}
			</div>
		</>
	);
};
export default HotelsOfferingList;
