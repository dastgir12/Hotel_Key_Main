import React, { useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { useCookies } from "react-cookie";
import { getUserByToken } from "../../services/getUserByToken";
import { useDispatch } from "react-redux";
import { savelogin } from "../../redux/slices/userSlice";
const Navbar = () => {
	const dispatch = useDispatch();
	const [cookies, setCookie, removeToken] = useCookies(["user"]);
	const dispatchUser = async () => {
		if (cookies.user) {
			const user = await getUserByToken(cookies.user);

			if (user) {
				dispatch(savelogin(user));
			}
		}
	};
	useEffect(() => {
		dispatchUser();
	}, []);

	return (
		<>
			<div className="hidden sm:block">
				<DesktopNavbar />
			</div>
			<div className="sm:hidden">
				<MobileNavbar />
			</div>
		</>
	);
};

export default Navbar;
