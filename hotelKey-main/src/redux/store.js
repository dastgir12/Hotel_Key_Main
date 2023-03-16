import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/userSlice";
import hotelReducer from "./slices/hotelSlice";

const reducer = combineReducers({
	user: loginReducer,
	hotels: hotelReducer,
});
// Store
export const store = configureStore({
	reducer,
});
