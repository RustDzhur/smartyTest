import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchDetailsNews } from '../../components/Api/ApiFetchNews';
import {Wrapper} from './DetailsNews.styles'
import { Comments } from '../../components/Comments/Comments';
export const DetailNews = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    
    useEffect (() => {
        fetchDetailsNews(id).then(res => setDetails(res))
    }, [id])
    console.log(details)
    const date = new Date();
    return (
        <Wrapper>
            <h1>{details.title}</h1>
            <a href={details.url} target={'_blank'} rel='noreferrer'>{details.url}</a>
            <p>Date of publication: {date.toLocaleString(details.time)}</p>
            <p>Author: {details.by}</p>
            <p>How many comments: {details.descendants}</p>
            <Comments details={details}/>
        </Wrapper>
    )
}