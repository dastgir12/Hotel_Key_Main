import React from "react";
import { SearchOutlined, HeartOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileProfileMenu from "./MobileProfileMenu";
const MobileBottomNavbar = () => {
 const user = useSelector((e) => e.user.user);
 console.log(user);
 // const UserLogRender = () => {
 // 	if (user) {
 // 		return (

 // 		);
 // 	}
 // };
 return (
  <div className="flex items-center fixed bottom-0 justify-center w-full border-2 py-2  bg-white border-t border-gray-200 gap-x-8">
   <Link to={"/"} style={{ color: "rgb(55,66,83)", textDecoration: "none" }}>
    <div className="flex flex-col items-center gap-1">
     <div>
      <SearchOutlined style={{ fontSize: "25px" }} />
     </div>
     <div className="text-xs text-[rgb(55,66,83)]">Explore</div>
    </div>
   </Link>
   <Link to={"/wishlist"} style={{ color: "rgb(55,66,83)", textDecoration: "none" }}>
    <div className="flex flex-col items-center gap-1">
     <div>
      <HeartOutlined style={{ fontSize: "25px" }} />
     </div>
     <div className="text-xs">WishList</div>
    </div>
   </Link>
   {user ? (
    <MobileProfileMenu />
   ) : (
    <Link to={"/login"} style={{ color: "rgb(55,66,83)", textDecoration: "none" }}>
     <div className="flex flex-col focus:bg-red-400 gap-1 items-center">
      <div>
       <UserOutlined style={{ fontSize: "25px" }} />
      </div>
      <div className="text-xs">Login</div>
     </div>
    </Link>
   )}
  </div>
 );
};

export default MobileBottomNavbar;
