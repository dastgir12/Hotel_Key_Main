import React from "react";
import Card from "../card/Card";
const CardWishList = ({ props }) => {
	const mappingCard = props.map((e, i) => {
		return <Card key={i} />;
	});
	return (
		<>
			<div className=" flex flex-wrap justify-center gap-8">{mappingCard}</div>
		</>
	);
};
export default CardWishList;
