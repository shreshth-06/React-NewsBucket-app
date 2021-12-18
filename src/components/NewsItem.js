/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsUrl, author, date, source } =
      this.props;

    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: 0,
            }}
          >
            <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
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
              <small className="text-dark">
                By {author ? author : "Unknown"} on {""}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target={"_blank"}
              className="btn btn-sm btn-warning"
            >
              <h6>Read More</h6>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
