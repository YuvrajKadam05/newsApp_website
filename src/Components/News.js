import React from 'react'
import { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News({ country, category, apiKey, pageSize, setProgress }) {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [loading, setLoading] = useState(false)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const update = async () => {
        setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let jsonData = await data.json()
        setProgress(30)
        console.log(jsonData)
        setArticles(jsonData.articles)
        setProgress(70)
        setTotalResults(jsonData.totalResults)
        setProgress(100)
        setLoading(false)
    }

    useEffect(() => {
        update();
        document.title = `${capitalizeFirstLetter(category)} - NewsMonkey`
        // eslint-disable-next-line 
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`
        setPage(page + 1)
        let data = await fetch(url)
        let jsonData = await data.json()
        console.log(jsonData)
        setArticles(articles.concat(jsonData.articles))
        setTotalResults(jsonData.totalResults)
    };

    return (
        <div className='container my-3'>
            <h1 className='text-center' style={{ marginTop: '95px', marginBottom: '35px' }}>News - Monkey Top {capitalizeFirstLetter(category)} Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((elm) => {
                            return <div className="col-md-4" key={elm.url}>
                                <NewsItem title={elm.title} description={elm.description} imageUrl={elm.urlToImage}
                                    newsUrl={elm.url} author={elm.author} date={elm.publishedAt} source={elm.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}










// dbe57b028aeb41e285a226a94865f7a7 my api key
// 501d66c29f6840bd8005319a288dd345 vikalp api key
// dbe57b028aeb41e285a226a94865f7a7 Harry api key