export const apiHeader = {
	headers: {
		"api-key": "d6dcc1bf-1189-4713-acc4-bf1da722475d",
	},
};
export const apiKey = {
	"api-key": "d6dcc1bf-1189-4713-acc4-bf1da722475d",
};

export const userAuth = (token) => ({ headers: { ...apiKey, token: token } });
