import React from "react";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
	UserAddOutlined,
	SettingOutlined,
	UserOutlined,
	MenuOutlined,
	LogoutOutlined,
	LoginOutlined,
	HeartOutlined,
} from "@ant-design/icons";
const ProfileMenu = () => {
	const dispatch = useDispatch();
	const user = useSelector((s) => s.user.user);
	const userAuth = useSelector((s) => s.user.auth);
	const nav = useNavigate();
	const [cookies, setCookie, removeToken] = useCookies(["user"]);
	const noUserItems = [
		{
			key: "/signup",
			label: (
				<div className="font-medium flex items-center gap-x-2 text-base">
					<UserAddOutlined />
					Sign Up
				</div>
			),
		},
		{
			key: "/login",
			label: (
				<div className="font-medium flex items-center gap-x-2 text-base">
					<LoginOutlined />
					Log In
				</div>
			),
		},
	];
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
	const itemsUser = () => {
		if (!user) {
			return noUserItems;
		} else return UserItems;
	};
	const logOut = async () => {
		console.log("Logout User");
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
			<Dropdown
				trigger={["click"]}
				menu={{
					items: itemsUser(),
					onClick: (e) => {
						if (e.key === "logout") {
							logOut();
							return;
						}
						nav(e.key);
					},
				}}
			>
				<div className="rounded-full flex gap-x-3 px-3 cursor-pointer hover:shadow-md py-2  justify-center between items-center border">
					<MenuOutlined />
					<div className="flex bg-slate-600 p-2 rounded-full ">
						<UserOutlined style={{ color: "white" }} />
					</div>
				</div>
			</Dropdown>
		</>
	);
};

export default ProfileMenu;
