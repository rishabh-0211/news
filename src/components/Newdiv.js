import React, { Component } from "react";
import Newsele from "./Newsele";
import Spin from "./Spin";
import PropTypes from 'prop-types'
export class Newdiv extends Component {
  static defaultProps = {
    pageSize: 3,
    category: "sports",
    country: "in",
  }
  
  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    country: PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: true,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apikey}&category=${this.props.category}&pagesize=${this.props.pageSize}&page=1`;
      this.setState({loading:true});
    let data = await fetch(url);
    
    let parsedData = await data.json();

    this.setState({ 
        totalResults: parsedData.totalResults,
        articles: parsedData.articles,
      loading: false});
  }
  
  handleNext = async () => {
    if(this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize)){
       
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
      this.props.apikey
    }&category=${this.props.category}&pagesize=${this.props.pageSize}&page=${
      this.state.page + 1
    }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
   
}
  };
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
      this.props.apikey
    }&category=${this.props.category}&page=${this.state.page - 1}&pagesize=${
      this.props.pageSize
    }`;
   this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <>
        <div className="container ">
          <h2
            className={`my-3 text-center text-${
              this.props.Mode === "light" ? "dark" : "light"
            }`}>
            News dekhlo vro
          </h2>
          {this.state.loading ? (
            <Spin />
          ) : (
            <div className="row my-3">
              {this.state.articles &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4 my-3" key={element.url}>
                      <Newsele
                        mude={this.props.Mode}
                        title={element.title}
                        description={element.description}
                        imageurl={element.urlToImage}
                        newsurl={element.url}
                        date={element.publishedAt}
                      />
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        <div className="container d-flex justify-content-between my-4 ">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-light "
            onClick={this.handlePrev}>
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize) - 1
            }
            type="button"
            className="btn btn-light"
            onClick={this.handleNext}>
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default Newdiv;
