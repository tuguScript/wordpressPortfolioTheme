import React, { Component } from "react";
import Card from "./Card";
import Loader from "halogen/PulseLoader";

const url =
  "https://tugi.000webhostapp.com/wp-json/wp/v2/posts?per_page=3&author=1";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: {
        loading: true,
        data: []
      }
    };
  }
  componentDidMount() {
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
  render() {
    let posts = this.state.posts.data.map((post, i) => {
      return <Card key={i} post={post} />;
    });
    if (this.state.posts.loading) {
      return (
        <div style={{position: 'absolute', left: '40%'}}>
          <Loader color="#4dbfd9" size="20px" margin="4px"/>
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
    return (
      <div>
        {posts}
      </div>
    );
  }
}
