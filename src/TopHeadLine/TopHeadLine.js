import React, { useEffect, useState } from 'react';
import News from '../components/News/News';

const TopHeadLine = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=78da3cbc0e3b412b989ee000f14df166';
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top Header : {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadLine;