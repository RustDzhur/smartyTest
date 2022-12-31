import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://hacker-news.firebaseio.com/v0";

export const fetchNewStories = createAsyncThunk(
	"news/fetchNews",
	async (_, thunAPI) => {
		try {
			const response = await axios
				.get("/newstories.json")
				.then(({ data }) => data);
			return response;
		} catch (error) {
			return thunAPI.rejectWithValue(error.message);
		}
	}
);
