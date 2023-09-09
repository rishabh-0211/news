import React, { Component } from 'react'

export class Newsele extends Component {
  render() {
    let { title, description, imageurl, newsurl, date,mude } = this.props;
    return (
      <div
        className={`card bg-${mude !== "light" ? "dark" : mude} text-${
          mude !== "light" ? "white" : "dark"
        }`}>
        <img
          src={
            imageurl
              ? imageurl
              : "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-library.com%2Ficon%2Fno-picture-available-icon-1.html&psig=AOvVaw3anO6Yb808QE3x9LhqhfqJ&ust=1694320319356000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMCgx5jZnIEDFQAAAAAdAAAAABAE"
          }
          className="card-img-top"
          alt="yha to imag hua krti thi "
        />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <h5 className="card-title">{new Date(date).toGMTString()}</h5>
          <p className="card-text">{description}</p>
          <a href={newsurl} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default Newsele