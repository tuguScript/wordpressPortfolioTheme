import Modal from "./Modal";
import axios from "axios";
import React, { Component } from "react";

export default class Home extends Component {
  sendMail() {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    axios({
      method: "post",
      url: "https://formspree.io/tuguscript@gmail.com",
      data: {
        email,
        message
      }
    })
      .then(res => {
        //   __MaterialUI notify hiine
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
        <header className="header-two">
          <div className="hero">
            <div className="hero-inner">
              <a href className="hero-logo">
                <img
                  src="/images/profile.png"
                  alt="Logo Image"
                  width={152}
                  height={152}
                />
              </a>
              <div className="hero-copy">
                <h1>
                  <span>Hey, I’m</span> Tugi
                </h1>
                <h6>
                  Photographer, Web Developer, Mobile app developer, Web
                  Designer, Speaker, Writer
                </h6>
                <div className="media-link">
                  <a href="https://github.com/tuguScript">
                    <i className="fa fa-github-square" />
                  </a>
                  <a href="https://twitter.com/tuguldur_01">
                    <i className="fa fa-twitter-square" />
                  </a>
                  <a href="https://www.linkedin.com/in/tuguldurtech/">
                    <i className="fa fa-linkedin-square" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="main">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="about">
                  <div id="about">
                    <div className="active-section">
                      <br />
                      <br />
                      <div className="about-section">
                        <div className="row">
                          <div className="col-md-6">
                            <h4>Who?</h4>
                            <div className="about-content">
                              <span className="active-color">
                                Hello, I am Tuguldur, Photographer, Web
                                Developer, Mobile app developer, Web Designer,
                                Speaker, Writer
                              </span>
                              <p>
                                Hey what's up? Full name's Tuguldur but everyone
                                calls me Tugi. I'm a front-end developer,
                                currently living in Alameda, California. Fluent
                                in HTML5 CSS3 JS Sass Less and ReactJS. I know
                                my way around NodeJS and I've recently started
                                experimenting with REST APIs using ExpressJS.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-5 col-md-offset-1">
                            <h4>Basic Information</h4>
                            <ul className="list-group">
                              <li className="list-group-item">
                                <div className="row">
                                  <div className="col-md-4">
                                    <h6>Address:</h6>
                                  </div>
                                  <div className="col-md-8">
                                    <p>lorem address</p>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item">
                                <div className="row">
                                  <div className="col-md-4">
                                    <h6>Date of Birth:</h6>
                                  </div>
                                  <div className="col-md-8">
                                    <p>6 December, 9999</p>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item">
                                <div className="row">
                                  <div className="col-md-4">
                                    <h6>Place of Birth:</h6>
                                  </div>
                                  <div className="col-md-8">
                                    <p>Ulaanbaatar, Mongolia</p>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item">
                                <div className="row">
                                  <div className="col-md-4">
                                    <h6>Language</h6>
                                  </div>
                                  <div className="col-md-8">
                                    <p>English</p>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item">
                                <div className="row">
                                  <div className="col-md-4">
                                    <h6>Gender</h6>
                                  </div>
                                  <div className="col-md-8">
                                    <p>Male</p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                {/* Work-section */}
                <Work />
                <br />
                <br />
                <div className="active-section" id="blog">
                  <section className="section-block">
                    <h4 className="title">Blog Post</h4>
                    <div className="row">
                      <div className="col-md-12">
                        <div id="rex-blog-slider">
                          <App />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <br />
                <br />
                <div className="active-section" id="contact">
                  <section className="section-block">
                    <div className="tcontainer">
                      <div className="emailForm">
                        <h4 className="title">Feel Free To Contact Me</h4>
                        <form className="contact-forms" id="contact-forms">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  name="email"
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <textarea
                                id="message"
                                name="text"
                                className="form-control"
                                rows={6}
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </form>
                        <div className="contact-btn">
                          <a
                            className="btn btn-default rex-primary-btn-effect-No dark-color"
                            href="javascript:void(0)"
                            role="button"
                          >
                            <span>Cancel</span>
                          </a>
                          <a
                            className="btn btn-default rex-primary-btn-effect"
                            onClick={() => this.sendMail()}
                            role="button"
                          >
                            Send
                          </a>
                        </div>
                      </div>
                      <div className="divBlock-2">
                        <h4 className="title">Contact Information</h4>
                        <div className>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <h6>Phone</h6>
                              <a href="tel:+5103840214">+(510) 384 0212 </a>
                            </li>
                            <li className="list-group-item">
                              <h6>Email</h6>
                              <a href="mailto:tuguscript@gmail.com">
                                tuguscript@gmail.com
                              </a>
                            </li>
                            <li className="list-group-item">
                              <h6>Find me on</h6>
                              <p>github, twitter</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <footer>
                  <div className="row">
                    <div className="col-md-12">
                      <p>© Copyright 2017 Tuguldur</p>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </section>

        <Modal post={null} showModal={true} />
      </div>
    );
  }
}

import Lightbox from "react-images";
import { Router, Route, Link, hashHistory } from "react-router";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class ContentWeb extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: [],
      status: null
    };
  }
  componentDidMount() {
    let url = "https://tugi.000webhostapp.com/wp-json/wp/v2/posts?categories=2";
    let init = {
      credentials: "include",
      mode: "cors",
      headers: {
        Accept: "application/json"
      }
    };
    fetch(url, init)
      .then(response => {
        response.json().then(data => {
          if (response.ok) {
            console.log(data);
            this.setState({
              loading: false,
              data: data,
              status: response.status
            });
          } else {
            this.setState({
              loading: false,
              data: data,
              status: response.status
            });
          }
        });
      })
      .catch(error => console.log("error:", error));
  }
  render() {
    const styles = {
      root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
      },
      item: {
        flex: 1,
        maxWidth: "400px",
        padding: "10px"
      }
    };
    let item = this.state.data.map((data, i) => {
      return (
        <div style={styles.item} keu={i}>
          <Card>
            <CardMedia>
              <img
                src={data.better_featured_image.source_url}
                style={{
                  maxHeight: "300px",
                  backgroundSize: "100% 100%",
                  backgroundSize: "cover"
                }}
              />
            </CardMedia>
            <CardText>{data.title.rendered}</CardText>
          </Card>
        </div>
      );
    });
    return (
      <div style={styles.root}>
        {this.state.loading ? (
          <Loader color="#4dbfd9" size="20px" margin="4px" />
        ) : (
          item
        )}
      </div>
    );
  }
}

class Work extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: "Photography",
      data: [1, 5, 10, 15],
      lightboxIsOpen: false,
      currentImage: 1,
      images: {
        data: []
      },
      imageUrls: [],
      galleryLoading: true
    };
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  changeTab(tabName) {
    this.setState({ currentTab: tabName });
  }
  closeLightbox() {
    this.setState({ lightboxIsOpen: false });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  openLightbox(i, event) {
    event.preventDefault();
    this.setState({
      currentImage: i,
      lightboxIsOpen: true
    });
  }
  componentDidMount() {
    const url = "https://tugi.000webhostapp.com/wp-json/wp/v2/media?author=2";
    let init = {
      credentials: "include",
      mode: "cors",
      headers: {
        Accept: "application/json"
      }
    };
    fetch(url, init)
      .then(response => {
        response.json().then(data => {
          if (response.ok) {
            this.setState(
              {
                images: {
                  data: data
                },
                galleryLoading: false
              },
              () => {
                for (var i = 0; i < data.length; i++) {
                  this.state.imageUrls.push({ src: data[i].source_url });
                }
              }
            );
          } else {
            this.setState({
              images: data
            });
          }
        });
      })
      .catch(error => console.log("error:", error));
  }

  render() {
    let images = this.state.images.data.map((image, i) => {
      return (
        <div key={i}>
          <img
            src={image.media_details.sizes.medium.source_url}
            onClick={e => this.openLightbox(i, e)}
            key={i}
          />
        </div>
      );
    });
    let loading = (
      <div style={{ position: "absolute", left: "40%" }}>
        <Loader color="#4dbfd9" size="20px" margin="4px" />
      </div>
    );
    let contentPhotography = (
      <div>
        <div className="gallery">
          {this.state.galleryLoading ? loading : images}
        </div>
        <Lightbox
          preloadNextImage={true}
          currentImage={this.state.currentImage}
          images={this.state.imageUrls}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox.bind(this)}
          showThumbnails={this.props.showThumbnails}
          theme={this.props.theme}
        />
      </div>
    );

    let contentMobile = <div>mobile</div>;

    let contentWeb = <ContentWeb />;

    return (
      <div className="active-section" id="work">
        <div className="portfolio-section box-border rex-works-showcase">
          <div className="row rex-portfolio-showcase">
            <h4 className="title">Work</h4>
            <div className="row">
              <div className="portfolio-menu">
                <div className="col-md-12 portfolio-filter rex-filter-btns">
                  <div
                    className="btn btn-default filter"
                    onClick={() => this.changeTab("Photography")}
                  >
                    Photography
                  </div>
                  <div
                    className="btn btn-default filter"
                    onClick={() => this.changeTab("Web")}
                  >
                    Web App
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row rex-portfolios"
              role="tabpanel"
              id="rex-portfolios"
            >
              {this.state.currentTab === "Photography" ? (
                contentPhotography
              ) : null}
              {this.state.currentTab === "Mobile" ? contentMobile : null}
              {this.state.currentTab === "Web" ? contentWeb : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import Loader from "halogen/PulseLoader";

const url =
  "https://tugi.000webhostapp.com/wp-json/wp/v2/posts?per_page=3&author=1";
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: {
        loading: true,
        data: []
      },
      showModal: false
    };
  }
  componentDidMount() {
    this.handleKeyDown = this.handleKeyDown.bind(this);
    window.addEventListener("keydown", this.handleKeyDown);
    document.body.style.overflow = "auto";
    let init = {
      credentials: "include",
      mode: "cors",
      headers: {
        Accept: "application/json"
      }
    };
    fetch(url, init)
      .then(response => {
        response.json().then(data => {
          if (response.ok) {
            this.setState({
              posts: {
                loading: false,
                data: data,
                status: response.status
              }
            });
          } else {
            this.setState({
              posts: {
                loading: false,
                data: data,
                status: response.status
              }
            });
          }
        });
      })
      .catch(error => console.log("error:", error));
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
    // this.setState({ showModal: true });
    // document.body.style.overflow = "hidden";
    hashHistory.push("post/endTooBn");
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
    let posts = this.state.posts.data.map((post, i) => {
      return (
        <div key={i}>
          <div className="col-sm-6 col-md-4" style={{ cursor: "pointer" }}>
            <div
              className="thumbnail rex-blog-section"
              onClick={() => this.handleOpenModal()}
            >
              <img
                src={
                  post.better_featured_image ? (
                    post.better_featured_image.source_url
                  ) : (
                    "http://placehold.it/312x184"
                  )
                }
                alt=""
                height="184"
              />
              <div className="rex-caption">
                <h6>{post.title.rendered}</h6>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered
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
    });
    if (this.state.posts.loading) {
      return (
        <div style={{ position: "absolute", left: "40%" }}>
          <Loader color="#4dbfd9" size="20px" margin="4px" />
        </div>
      );
    }
    if (this.state.posts.status !== 200 && !this.state.posts.loading) {
      return (
        <div>
          {this.state.posts.status} - <a href="/">Try again</a>
        </div>
      );
    }
    return <div>{posts}</div>;
  }
}
