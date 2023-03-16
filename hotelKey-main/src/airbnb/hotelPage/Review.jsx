import React from "react";
import { Rate, Avatar } from "antd";
const Review = ({ props }) => {
	return (
		<>
			<div className=" border-[1.5px] rounded-3xl shadow-xl border-gray-500 flex flex-col sm:w-[100vw] md:w-[40vw] lg:w-[20vw]  gap-3 p-4">
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, modi?
				</div>
				<Rate allowHalf disabled defaultValue={props} />
			</div>
		</>
	);
};

export default Review;
