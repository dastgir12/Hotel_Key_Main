import React from "react";
const Images = () => {
	const arr = [1, 2, 3, 4];
	const images = arr.map((e) => (
		<div className=" border-2">
			<img
				className="w-[200px] h-[140px]"
				src="https://picsum.photos/200/200"
				alt=""
			/>
		</div>
	));
	return (
		<div>
			<div className="flex flex-wrap  justify-center items-center gap-2 border-2 border-black">
				{images}
			</div>
		</div>
	);
};
export default Images;
