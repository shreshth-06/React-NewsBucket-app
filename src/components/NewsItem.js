/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsUrl } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageURL
                ? "https://bitsofco.de/content/images/2018/12/broken-1.png"
                : imageURL
            }
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target={"_blank"}
              className="btn btn-sm btn-warning"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
