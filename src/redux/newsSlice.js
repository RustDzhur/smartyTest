import { createSlice } from "@reduxjs/toolkit";
import {  fetchNewStories } from "./operations";

export const newsSlice = createSlice({
	name: "news",
	initialState: {
		listNews: {
			idx: [],
			isLoading: null,
			error: null,
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchNewStories.pending, (state, action) => {
				state.listNews.isLoading = true;
				state.listNews.error = null;
			})
			.addCase(fetchNewStories.fulfilled, (state, action) => {
				state.listNews.idx = action.payload;
				state.listNews.isLoading = false;
				state.listNews.error = null;
			})
			.addCase(fetchNewStories.rejected, (state, action) => {
				state.listNews.isLoading = false;
				state.listNews.error = action.payload;
			})
	},
});
