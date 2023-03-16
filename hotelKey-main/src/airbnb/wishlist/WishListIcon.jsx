import React, { useState } from "react";
import { HeartOutlined, DeleteFilled, HeartFilled } from "@ant-design/icons";
import { message } from "antd";
import { useSelector } from "react-redux";
import { myUser } from "../../redux/slices/userSlice";
const WishListIcon = ({ props }) => {
	const user = useSelector((s) => s.user.user);
	const [messageApi, contextHolder] = message.useMessage();
	const [checkWish, setcheckWish] = useState(false);

	const toggleList = () => {
		if (!user) {
			messageApi.open({
				type: "warning",
				content: "Please Login First",
				duration: 3,
			});
			return;
		}
		if (!checkWish) {
			setcheckWish(true);
			messageApi.open({
				type: "success",
				content: "Hotel added to Wish List",
				duration: 3,
			});
			return;
		}
		if (checkWish) {
			setcheckWish(false);
			messageApi.open({
				type: "success",
				content: "Hotel Removed From Wish List",
				duration: 3,
				icon: <DeleteFilled style={{ color: "red" }} />,
			});
			return;
		}
	};
	return (
		<>
			{contextHolder}
			<div onClick={toggleList} className="cursor-pointer">
				{checkWish ? (
					<HeartFilled style={{ color: "red", fontSize: "20px" }} />
				) : (
					<HeartOutlined style={{ color: "red", fontSize: "20px" }} />
				)}
			</div>
		</>
	);
};

export default WishListIcon;
