import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8, 
    category: 'general',
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
        console.log("Hello  I am a constructor")
        this.state={
            articles :[],
            loading:false, 
            page:1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
      }
   
      
      async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0d783cc9ac94784992bc99fd9397ecd&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });

        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
          articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });}

        async componentDidMount() {
          this.updateNews();
      }
  
      handlePrevClick = async () => {
          this.setState({ page: this.state.page - 1 });
          this.updateNews();
      }
      handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews()
    }



      

  //   async componentDidMount(){ 
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0d783cc9ac94784992bc99fd9397ecd&page=1&pageSize=${this.props.pageSize}`;
  //     console.log(parsedData); 
  //     this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false})
  // }

  //  handlePrevClick = async ()=>{
  //     console.log("Previous");
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0d783cc9ac94784992bc99fd9397ecd&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //     this.setState({loading:true});
  //     let data = await fetch(url);
  //     let parsedData = await data.json()
  //     console.log(parsedData);  
  //     this.setState({
  //         page: this.state.page - 1,
  //         articles: parsedData.articles,
  //         loading:false
  //     })

  // }

  //  handleNextClick = async ()=>{
  //     console.log("Next"); 
  //     if ((this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

  //     }
  //     else{
  //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0d783cc9ac94784992bc99fd9397ecd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //         this.setState({loading:true});
  //         let data = await fetch(url);
  //         let parsedData = await data.json()
  //         console.log(parsedData);  
  //         this.setState({
  //             page: this.state.page + 1,
  //             articles: parsedData.articles,
  //             loading:false
  //         })
  // }
  // }


  render() {

    return (
      <div   className='container my-3'>
          <h1 className='text-center' style={{margin:'40px 0px;'}}>NewsMonkey - Top Headlines</h1>
          {this.state.loading &&<Spinner/>}
         
              <div className="row">
          {!this.state.loading &&this.state.articles.map((element)=>{ 
            return   <div className="col-md-4"  key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                {/* <NewsItem title={element.title}  description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
                </div>
              
            })} 
            </div>
            <div className="container">
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
      </div>
    )
  }
}



export default News
