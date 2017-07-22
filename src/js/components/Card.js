import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail rex-blog-section">
          <img
            src={
              this.props.post.better_featured_image
                ? this.props.post.better_featured_image.source_url
                : "http://placehold.it/312x184"
            }
            alt=""
            height='184'
          />
          <div className="rex-caption">
            <a href="single-blog.html">
              <h6>
                {this.props.post.title.rendered}
              </h6>
            </a>
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.post.excerpt.rendered
              }}
            />
            <a href="javascript:void(0)" className>
              Read more
            </a>
          </div>
          <div className="post-meta">
            <a href="javascript:void(0)">
              <i className="fa fa-share-alt" />
            </a>
            <a href="javascript:void(0)">
              <i className="fa fa-comment" />20
            </a>
            <a href="javascript:void(0)">
              <i className="fa fa-heart" />65
            </a>
          </div>
        </div>
      </div>
    );
  }
}
