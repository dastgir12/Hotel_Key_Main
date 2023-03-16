import React from "react";
import CardCarsouel2 from "../../card/CardCarsouel2";
import { Link } from "react-router-dom";
const RoomCard = ({ props }) => {
 const { no_rooms, total_amount, id, title, room_images, no_beds } = props;
 return (
  <>
   <div className="flex flex-col rounded-3xl hover:border hover:border-gray-500 pt-2 shadow-xl w-[300px] px-2">
    {/* Image Slider */}
    <div>
     <CardCarsouel2 props={room_images} />
    </div>
    <Link to={`/room/${id}`} style={{ textDecoration: "none" }}>
     <div className="flex justify-between no-underline items-center mt-2">
      {/* Room Title */}
      <div className="text-base text-black font-semibold ">{title}</div>
      <div className="flex items-center  w-14">
       <div>
        <img
         src="https://www.shutterstock.com/image-vector/black-star-vector-icon-600w-221796499.jpg"
         alt="image"
        />
       </div>
       <div className="text-black">4.76</div>
      </div>
     </div>
     {/* Hotel Name */}
     <div className="text-gray-400">Beds {no_beds}</div>
     <div className="text-gray-400">Feb 2-7</div>
     <div className="text-black">
      No of Rooms: <span className="font-bold text-black">{no_rooms}</span>
     </div>
    </Link>
    <div className=" flex  justify-between">
     <p>
      {/* Hotel Price */}
      <span className="text-base font-semibold">Rs.{total_amount}</span>
      /night
     </p>
     {/* <div className="mr-3">
						<WishListIcon />
					</div> */}
    </div>
   </div>
  </>
 );
};

export default RoomCard;
