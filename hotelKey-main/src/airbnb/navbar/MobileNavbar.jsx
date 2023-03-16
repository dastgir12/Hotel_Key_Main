import React, { useState } from "react";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import PopUpForm from "../popupForm/PopUpForm";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postHotels } from "../../redux/slices/hotelSlice";
import { apiHeader } from "../../services/authHeader";
const MobileNavbar = () => {
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
				dispatch(postHotels(data.data));
				setIsModalOpen(false);
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<div className="mt-4 px-2 ">
				<div
					onClick={() => setIsModalOpen(true)}
					className="py-2 px-3 cursor-pointer flex justify-between shadow-lg rounded-full"
				>
					<div className="flex items-center space-x-4">
						<SearchOutlined style={{ fontSize: "25px" }} />
						<div className="">
							<h2 className="font-bold">Anywhere</h2>
							<span className="text-gray-500">Any week - Add guests</span>
						</div>
					</div>
					<div className="flex justify-center items-center rounded-full border p-3">
						<FilterOutlined style={{ fontSize: "25px" }} />
					</div>
				</div>
			</div>
			<Modal
				style={{
					top: 50,
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
	);
};

export default MobileNavbar;
