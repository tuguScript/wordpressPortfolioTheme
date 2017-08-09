import React, { Component } from "react";
import Lightbox from "react-images";

export default class Photography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: true,
      currentImage: 1,
      images: this.props.images
    };
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  componentDidMount() {
    console.log(this.state);
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
  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }
  render() {
    return (
      <div>
        <button onClick={e => this.openLightbox(0, e).bind(this)}>
          openGallery
        </button>
        <Lightbox
          currentImage={this.state.currentImage}
          images={[
            { src: "http://lorempixel.com/400/200/" },
            { src: "http://lorempixel.com/400/300/" }
          ]}
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
  }
}
