import { useEffect, useState } from "react";
import { fetctComments } from "../Api/ApiFetchNews";

export const Comments = ({ details }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		if (details.kids) {
			details.kids.map(kid => fetctComments(kid).then(res => setComments(res)));
		}
	}, [details.kids]);

	return (
		<ol>
			<li>{comments.text}</li>
		</ol>
	);
};
