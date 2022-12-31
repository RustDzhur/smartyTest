import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNewsById } from "../Api/ApiFetchNews";

export const Story = ({ id }) => {
	const [story, setStory] = useState([]);

	useEffect(() => {
        fetchNewsById(id).then(res => setStory(res));
		const interval = setInterval(() => {
			fetchNewsById(id).then(res => setStory(res));
		}, 60000);
        return clearInterval(interval)
	}, [id]);

	const date = new Date();
	return (
		<Link to={`/news/${id}`}>
			<li>
				{story.title} <br />
			</li>
			<b>Nick-name of Author: {story.by}</b>
			<br />
			<b>Rating {story.score}</b> <br />
			<b>Date of publication: {date.toLocaleString(story.time)}</b>
			<br />
		</Link>
	);
};
