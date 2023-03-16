//usereducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	hotels: [],
};

export const hotelSlice = createSlice({
	name: "hotel",
	initialState,
	reducers: {
		postHotels: (state, { payload }) => {
			state.hotels = payload;
		},
	},
});
export const { postHotels } = hotelSlice.actions;
export default hotelSlice.reducer;
