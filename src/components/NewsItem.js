/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsUrl, author, date } = this.props;

    return (
      <div className="my-3">
        <div className="card">
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
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
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
