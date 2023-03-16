import React, { useEffect, useState } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import axios from "axios";
import "@coreui/coreui/dist/css/coreui.min.css";
const CardCarsouel2 = ({ props }) => {
	const CaraImages = props.map((e, i) => {
		return (
			<CCarouselItem key={i}>
				<CImage
					style={{ borderRadius: "20px", height: "300px" }}
					src={e}
					alt="slide 1"
				/>
			</CCarouselItem>
		);
	});
	return (
		<>
			<CCarousel controls interval={false} indicators>
				{CaraImages}
			</CCarousel>
		</>
	);
};

export default CardCarsouel2;
