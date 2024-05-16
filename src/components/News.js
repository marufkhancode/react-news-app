import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])

    // handlePrevClick = async () => {
    //     setState({ page: page - 1 })
    //     updateNews();
    // }

    // handleNextClick = async () => {
    //     setState({ page: page + 1 })
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <>
            <h2 className='text-center mt-2'>ReactNews - Top Headlines from {capitalizeFirstLetter(props.category)} Category</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element, index) => {
                            return <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) + "..." : ""} description={element.description ? element.description.slice(0, 88) + "..." : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} source={element.source} publishedAt={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className='container d-flex justify-content-between'>
                    <button disabled={page <= 1} className='btn btn-dark' onClick={handlePrevClick}>&larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className='btn btn-dark' onClick={handleNextClick}>Next &rarr;</button>
                </div> */}
        </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News