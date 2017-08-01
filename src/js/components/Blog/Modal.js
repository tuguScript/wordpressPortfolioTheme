import React, { Component } from "react";

export default class Modal extends Component {
  constructor() {
    super();
    this.state = {
      postContent: ""
    };
  }
  closeRequest() {
    this.props.closeRequest();
  }
  componentDidMount() {
    this.setState({ postContent: this.props.post }, () => {
      console.log(this.state);
    });
  }
  render() {
    const post = this.props.post;
    const styles = {
      modalCover: {
        backgroundImage:
          "url(" + this.props.post.better_featured_image.source_url + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "50vw"
      }
    };
    if (this.props.showModal) {
      return (
        <div className="modal-container">
          <div
            className="modal-close"
            style={{ cursor: "pointer", left:'20px' }}
            onClick={() => {
              this.closeRequest();
            }}
          >
            <a style={{ display: "block" }}>esc</a>
            <i className="fa fa-times" style={{ fontSize: "30px" }} />
          </div>
          <div style={{ height: "100%", overflow: "auto" }}>
            <div className="modal-cover" style={styles.modalCover} />
            <div className="model-content">
              <div className="row">
                <div className="col col-sm-1 col-md-2 col-lg-2 col-xl-3">
                  <br />
                </div>
                <div className="col col-sm-10 col-md-8 col-lg-8 col-xl-6">
                  <div style={{ height: "100%" }}>
                    <h4
                      className="text-left"
                      style={{ fontWeight: "400", fontSize: "3.28rem" }}
                    >
                      {this.props.post.title.rendered}
                    </h4>
                    <h4 className="text-left">
                      {post.date.substring(0, 10)}
                    </h4>
                    <hr />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.postContent.content.rendered
                      }}
                      style={{
                        textAlign: "left",
                        fontSize: "2.38rem",
                        maxwidth: "960px",
                        fontWeight: "300",
                        lineHeight: "36.28px"
                      }}
                    />
                    <hr/>
                    <h1 className="text-center">share</h1>
                  </div>
                </div>
                <div className="col col-sm-1 col-md-2 col-lg-2 col-xl-3">
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
    return null;
  }
}
