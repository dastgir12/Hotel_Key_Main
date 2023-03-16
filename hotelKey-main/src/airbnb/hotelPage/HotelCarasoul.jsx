import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
const HotelCarasoul = ({ props }) => {
	const CaraImages = props.map((e, i) => {
		return (
			<CCarouselItem key={i}>
				<CImage
					style={{ width: "100vw", height: "300px" }}
					src={e}
					alt="slide 1"
				/>
			</CCarouselItem>
		);
	});
	return (
		<>
			<CCarousel
				className="w-[100vw] sm:w-[60vw]"
				controls
				interval={false}
				indicators
			>
				{CaraImages}
			</CCarousel>
		</>
	);
};

export default HotelCarasoul;
