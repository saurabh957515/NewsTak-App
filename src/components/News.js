import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  // const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);


  const url = `http://localhost:8000/${props.category}`;
  const updateNews = async () => {
  // console.log(url);
  setloading(true);
  let data = await fetch(url);
  let parsedData = await data.json();
  // console.log("Running");
  // console.log(parsedData);
  setarticles(parsedData.articles); // Update articles state with parsedData[0].articles
  settotalResults(parsedData.totalResults);
  setloading(false);
  // console.log(articles);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsFeed`;
    updateNews()
  },[]);
  const fetchMoreData = async () => {
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    // setpage(page + 1);
    // console.log(page)
  };
  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "40px 0px", marginTop: "90px" }}
      >
        NewsMonkey - Top Headlines From {props.category}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        // loader={
        //   articles.length !== totalResults?
        //   <Spinner />
        //   :null
        // }
      >
        <div className="container">
          <div className="row">
            {articles
              .filter(
                (article, index, self) =>
                  index === self.findIndex((a) => a.url === article.url)
              )
              .map((article) => (
                <div className="col-md-4" key={article.url}>
                  <NewsItem
                    title={article.title ? article.title : ""}
                    description={article.description ? article.description : ""}
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
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  q: "bitcoin",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;


  
