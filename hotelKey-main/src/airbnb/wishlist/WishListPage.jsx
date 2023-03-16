import React from "react";
import EmptyWishList from "./EmptyWishList";
import CardWishList from "./CardWishList";
const WishListPage = () => {
	const arr = [];
	const WishListRender = () => {
		if (arr.length === 0) {
			return <EmptyWishList />;
		}
		return <CardWishList props={arr} />;
	};
	return (
		<>
			<div className="mt-9 flex justify-center items-center flex-col gap-y-11">
				<div className="text-3xl font-semibold">WishList</div>
				<WishListRender />
			</div>
		</>
	);
};

export default WishListPage;
