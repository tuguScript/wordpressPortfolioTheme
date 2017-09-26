import React, { Component } from "react";

export default class blogCard extends Component {
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
        <h1>qwe</h1>
      </div>
    );
    <Modal
    showModal={this.state.showModal}
    closeRequest={() => this.closeRequest()}
    post={this.props.post}
  >
    <button onClick={() => this.handleCloseModal()}>Close Modal</button>
  </Modal>
  }
}

