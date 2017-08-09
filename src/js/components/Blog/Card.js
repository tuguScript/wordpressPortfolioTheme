import React, { Component } from "react";
import Modal from "./Modal";

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    document.body.style.overflow = "auto";
  }
  handleKeyDown() {
    if (event.keyCode === 27) {
      event.preventDefault();
      // this.requestClose(event);
      this.setState({ showModal: false });
      document.body.style.overflow = "auto";
    }
  }
  handleOpenModal() {
    this.setState({ showModal: true });
    document.body.style.overflow = "hidden";
  }
  handleCloseModal() {
    this.setState({ showModal: false });
    document.body.style.overflow = "auto";
  }
  closeRequest() {
    this.setState({ showModal: false });
    document.body.style.overflow = "auto";
  }

  render() {
    return (
      <div>
        <Modal
          showModal={this.state.showModal}
          closeRequest={() => this.closeRequest()}
          post={this.props.post}
        >
          <button onClick={() => this.handleCloseModal()}>Close Modal</button>
        </Modal>
        <div className="col-sm-6 col-md-4" style={{cursor: 'pointer'}}>
          <div
            className="thumbnail rex-blog-section"
            onClick={() => this.handleOpenModal()}
          >
            <img
              src={
                this.props.post.better_featured_image
                  ? this.props.post.better_featured_image.source_url
                  : "http://placehold.it/312x184"
              }
              alt=""
              height="184"
            />
            <div className="rex-caption">
                <h6>
                  {this.props.post.title.rendered}
                </h6>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.props.post.excerpt.rendered
                }}
              />
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
      </div>
    );
  }
}
