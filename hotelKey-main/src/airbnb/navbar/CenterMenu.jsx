import React, { useState } from "react";
import { Modal, Button } from "antd";
import PopUpForm from "../popupForm/PopUpForm";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postHotels } from "../../redux/slices/hotelSlice";
import { apiHeader } from "../../services/authHeader";
const CenterMenu = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatch = useDispatch();
	///// Handling States by Passing Props
	const [city, setcity] = useState();
	const [dateRange, setdateRange] = useState();
	const [persons, setpersons] = useState(1);
	////// Modal Click Handler
	const modalClickHandler = async () => {
		console.log(dateRange, city);
		if (!dateRange && !city) {
			console.log("error");
			return;
		}
		const formData = new FormData();
		formData.append("city", city);
		formData.append("daterange", dateRange);
		formData.append("adult", persons);
		try {
			const { data, status } = await axios.post(
				"https://test.hotelkey.pk/api/search",
				formData,
				apiHeader
			);
			if (status === 200) {
				console.log(data);
				dispatch(postHotels(data.data));
				setIsModalOpen(false);
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<div
				onClick={() => setIsModalOpen(true)}
				className="rounded-full flex justify-center cursor-pointer items-center space-x-3 px-2 py-2 shadow-sm hover:shadow-md border"
			>
				<div className="border-r-2 text-sm px-3 font-semibold ">Anywhere</div>
				<div className="border-r-2 text-sm px-3 font-semibold">Any week</div>
				<div className="font-light">Add guests</div>
				<div className="flex items-center space-x-4 p-2 rounded-full bg-[#010e48]">
					<SearchOutlined style={{ fontSize: "13px", color: "white" }} />
				</div>
			</div>
			<Modal
				style={{
					top: 100,
				}}
				// footer={null}
				width={"90vw"}
				title="Search Hotels"
				open={isModalOpen}
				onCancel={() => setIsModalOpen(false)}
				footer={[
					<Button key="back" danger onClick={() => setIsModalOpen(false)}>
						Back
					</Button>,
					<Button
						className="bg-green-500 hover:bg-green-300"
						key="link"
						onClick={modalClickHandler}
					>
						Get Hotels
					</Button>,
				]}
			>
				<PopUpForm props={{ setcity, setdateRange, setpersons, persons }} />
			</Modal>
		</>

		// </Dropdown>
	);
};

export default CenterMenu;
