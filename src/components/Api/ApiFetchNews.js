import axios from "axios";

axios.defaults.baseURL = "https://hacker-news.firebaseio.com/v0";

export const fetchNewsById = async id => {
	try {
		const response = await axios
			.get(`/item/${id}.json`)
			.then(({ data }) => data);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const fetchDetailsNews = async id => {
	try {
		const response = await axios.get(`/item/${id}.json`).then(({ data }) => data);
		return response;
	} catch (error) {
		console.log(error)
	}
};

export const fetctComments = async id => {
	try {
		const response = await axios.get(`/item/${id}.json`).then(({ data }) => data);
		return response;
	} catch (error) {
		console.log(error)
	}
};