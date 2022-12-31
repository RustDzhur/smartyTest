import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewStories } from "../../redux/operations";
import { Story } from "./Story";
import { getIdxOfNews } from "../../redux/selectors";

export const StoriesContainer = () => {
	const dispatch = useDispatch();
	const { idx } = useSelector(getIdxOfNews);

	useEffect(() => {
		dispatch(fetchNewStories());
	}, [dispatch]);

	return (
		<>
			<ol>
				{idx.slice(0, 100).map(id => (
					<Story key={id} id={id}/>
				))}
			</ol>
		</>
	);
};
