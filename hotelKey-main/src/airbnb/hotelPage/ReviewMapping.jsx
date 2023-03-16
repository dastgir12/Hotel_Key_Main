import React from "react";
import Review from "./Review";
const ReviewMapping = () => {
	const mappingReviews = [3.2, 2.5, 4, 5].map((e, i) => {
		return <Review key={i} props={e} />;
	});
	return (
		<div className="flex flex-wrap justify-center items-center gap-3">
			{mappingReviews}
		</div>
	);
};
export default ReviewMapping;
