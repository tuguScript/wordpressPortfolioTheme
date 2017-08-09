import React, { Component } from "react";
import Lightbox from "react-images";
import Loader from "halogen/PulseLoader";

export default class Work extends Component {
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
        <div>
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

    let contentWeb = <div>Web</div>;

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
                    onClick={() => this.changeTab("Mobile")}
                  >
                    Mobile Developemnt
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
              {this.state.currentTab === "Photography"
                ? contentPhotography
                : null}
              {this.state.currentTab === "Mobile" ? contentMobile : null}
              {this.state.currentTab === "Web" ? contentWeb : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
