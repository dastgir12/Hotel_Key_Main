import React, { useEffect, useState } from "react";

const SingleHotelOffering = ({ props }) => {
	const { key, value, icon } = props;

	return (
		<>
			<div
				className={`flex border rounded-2xl px-2 py-2 justify-center items-center gap-x-2 ${
					value === "1" ? "" : ""
				}`}
			>
				{value === "1" ? (
					<span>
						<img
							className="w-[20px]"
							src="https://cdn-icons-png.flaticon.com/512/6785/6785304.png"
							alt=""
						/>
					</span>
				) : (
					<span>
						<img
							className="w-[20px]"
							src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
							alt=""
						/>
					</span>
				)}
				<div>
					<img
						className="w-[30px]"
						src="https://cdn-icons-png.flaticon.com/512/991/991943.png"
						alt=""
					/>
				</div>
				<div className="text-xl flex font-bold"> {key}</div>
			</div>
		</>
	);
};

export default SingleHotelOffering;
