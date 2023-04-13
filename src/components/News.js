import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8, 
    category: 'general',
    q: "bitcoin",
  }

static propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number, 
  category: PropTypes.string,
}

capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

    constructor(props){
        super(props);
        // console.log("Hello  I am a constructor")
        this.state={
          articles: [],
          loading: true,
          page: 1,
          totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
      }
   
      
      async updateNews() {
        const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c9b12e7598146dbb6362bd4475cd15b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        console.log(url)
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
          articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
      }

         componentDidMount= async()=>{
        this.updateNews();
      }
    
  
      fetchMoreData = async () => {  
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c9b12e7598146dbb6362bd4475cd15b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        // setTimeout(() => {
          this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
          });
        // },1000);
        this.setState({page: this.state.page + 1});
      };


  render() {
    return (
      <>
          <h1 className='text-center' style={{margin:'40px 0px',marginTop:'90px'}}>NewsMonkey - Top Headlines From {this.props.category}
      </h1>
        <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>} > 

                    <div className="container">
                  
           <div className="row">
                       {this.state.articles.filter((article, index, self) =>
                         index === self.findIndex((a) => a.url === article.url)
                     ).map((article) => (
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
    )
  }
}



export default News
