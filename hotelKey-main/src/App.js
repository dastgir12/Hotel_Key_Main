import Navbar from "./airbnb/navbar/Navbar";
import Home from "./airbnb/Home";
import Register from "./airbnb/forms/Register";
import WishListPage from "./airbnb/wishlist/WishListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./airbnb/forms/Login";
import HotelPage from "./airbnb/hotelPage/HotelPage";
import RoomPage from "./airbnb/hotelPage/rooms/roomPage/RoomPage";
import DashBoardPage from "./airbnb/dashboard/DashBoardPage";
import DashBoard from "./airbnb/dashboard/DashBoard";
import HotelAdd from "./airbnb/dashboard/hotel/HotelAdd";
import HotelList from "./airbnb/dashboard/hotel/HotelList";
import ResidenceAdd from "./airbnb/dashboard/residenceadd/ResidenceAdd";
import RoomAdd from "./airbnb/dashboard/Room/RoomAdd";
import ResidenceList from "./airbnb/dashboard/residencelist/ResidenceList";
import RoomList from "./airbnb/dashboard/Room/RoomList";
import MobileBottomNavbar from "./airbnb/navbar/MobileBottomNavbar";
function App() {
 return (
  <>
   <BrowserRouter>
    <Navbar />
    <div className="sm:hidden">
     <MobileBottomNavbar />
    </div>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/signup" element={<Register />} />
     <Route path="/login" element={<Login />} />
     <Route path="/wishlist" element={<WishListPage />} />
     <Route path="/hotel/:id" element={<HotelPage />} />
     <Route path="/room/:id" element={<RoomPage />} />
     <Route path="/dashboard" element={<DashBoardPage />}>
      <Route index element={<DashBoard />} />
      <Route path="/dashboard/hoteladd" element={<HotelAdd />} />
      <Route path="/dashboard/roomadd" element={<RoomAdd />} />
      <Route path="/dashboard/hotellist" element={<HotelList />} />
      <Route path="/dashboard/roomlist" element={<RoomList />} />
      <Route path="/dashboard/addresidence" element={<ResidenceAdd />} />
      <Route path="/dashboard/residencelist" element={<ResidenceList />} />
     </Route>
    </Routes>
   </BrowserRouter>
  </>
 );
}

export default App;
