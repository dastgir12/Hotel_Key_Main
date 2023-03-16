import axios from "axios";

export const getUserByToken = async (token) => {
	try {
		const { data, status } = await axios.get(
			"https://test.hotelkey.pk/api/user-profile",
			{
				headers: {
					"api-key": "d6dcc1bf-1189-4713-acc4-bf1da722475d",
					token: token,
				},
			}
		);
		if (status === 200) {
			return data;
		}
	} catch (e) {
		console.log(e.response.data.message);
		return false;
	}
};
