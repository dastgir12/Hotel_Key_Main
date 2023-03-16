import React from "react";
import {
	HeartOutlined,
	LogoutOutlined,
	UserOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { logout } from "../../redux/slices/userSlice";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
const MobileProfileMenu = () => {
	const dispatch = useDispatch();
	const userAuth = useSelector((s) => s.user.auth);
	const nav = useNavigate();
	const [cookies, setCookie, removeToken] = useCookies(["user"]);
	const UserItems = [
		{
			key: "/dashboard",
			label: (
				<div className="font-medium flex items-center gap-x-2 text-base">
					<SettingOutlined />
					Dashboard
				</div>
			),
		},
		{
			key: "/wishlist",
			label: (
				<div className="font-medium flex items-center gap-x-2 text-base">
					<HeartOutlined />
					WishList
				</div>
			),
		},
		{
			key: "logout",
			label: (
				<div className="font-medium flex items-center gap-x-2 text-base">
					<LogoutOutlined />
					Logout
				</div>
			),
		},
	];
	const logOut = async () => {
		console.log("Logout User");
		console.log(userAuth);
		const { data, status } = await axios.post(
			"https://test.hotelkey.pk/api/user-logout",
			{},
			{
				headers: userAuth,
			}
		);
		if (status === 200) {
			removeToken(["user"]);
			dispatch(logout());
		}
	};

	return (
		<>
			<div>
				<div>
					<Dropdown
						trigger={["click"]}
						placement="top"
						menu={{
							items: UserItems,
							onClick: (e) => {
								if (e.key === "logout") {
									logOut();
									return;
								}
								nav(e.key);
							},
						}}
					>
						<div className="flex flex-col focus:bg-red-400 cursor-pointer gap-1 items-center">
							<div>
								<UserOutlined style={{ fontSize: "25px" }} />
							</div>
							<div className="text-xs">Profile</div>
						</div>
					</Dropdown>
				</div>
			</div>
		</>
	);
};

export default MobileProfileMenu;
