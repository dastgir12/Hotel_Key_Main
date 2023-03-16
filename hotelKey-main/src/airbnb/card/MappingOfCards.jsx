import React, { useEffect } from "react";
import Card from "./Card";
import { apiHeader } from "../../services/authHeader";
import { postHotels } from "../../redux/slices/hotelSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const MappingOfCards = () => {
 const hotels = useSelector((s) => s.hotels.hotels);
 const dispatch = useDispatch();
 const getHotels = async () => {
  const { data, status } = await axios.get("https://test.hotelkey.pk/api/get-list", apiHeader);
  if (status === 200) {
   console.log(data.data);
   dispatch(postHotels(data.data));
  }
 };
 useEffect(() => {
  getHotels();
 }, []);
 const Mapping = () => {
  if (hotels.length > 0) {
   const cards = hotels.map((e, i) => <Card key={i} props={e} />);
   return cards;
  }
 };

 return (
  <>
   <div className="flex flex-wrap mt-6 gap-8 justify-center ">
    <Mapping />
   </div>
  </>
 );
};

export default MappingOfCards;
