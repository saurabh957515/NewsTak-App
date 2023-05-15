import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsFeed`;
    updateNews();
  }, []);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1c9b12e7598146dbb6362bd4475cd15b&page=${page}&pageSize=${props.pageSize}`;
    console.log(url);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1c9b12e7598146dbb6362bd4475cd15b&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPage(page + 1);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: '40px 0px', marginTop: '90px' }}>
        NewsMonkey - Top Headlines From {props.category}
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={articles.length !== totalResults ? <Spinner /> : null}
      >
        <div className="container">
          <div className="row">
            {articles
              .filter((article, index, self) => index === self.findIndex((a) => a.url === article.url))
              .map((article) => (
                <div className="col-md-4" key={article.url}>
                  <NewsItem
                    title={article.title ? article.title : ''}
                    description={article.description ? article.description : ''}
                    imageUrl={article.urlToImage}
                    newsUrl={article.url}
                    author={article.author}
                    date={article.publishedAt}
                    source={article.source.name}
                  />
                </div>
              ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
  q: 'bitcoin',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
