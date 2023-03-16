import React from "react";
import ProfileMenu from "./ProfileMenu";
import CenterMenu from "./CenterMenu";
import { useNavigate } from "react-router-dom";
const DesktopNavbar = () => {
  const nav = useNavigate();
  return (
    <>
      <div className=" py-4 px-16 shadow-sm flex justify-between items-center">
        <div>
          <img
            onClick={() => nav("/")}
            className="cursor-pointer"
            width={50}
            src="https://hotelkey.pk/public/newfront/assets/svg/emprise-logo-white.png"
            alt=""
          />
        </div>
        {/* Center Buttons */}
        <CenterMenu />
        <div>
          <ProfileMenu />
        </div>
      </div>
    </>
  );
};

export default DesktopNavbar;
