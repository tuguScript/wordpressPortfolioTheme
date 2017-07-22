import React, { Component } from "react";
import Card from "./Card";

const url = "http://tugi.io/wp-json/wp/v2/posts?per_page=3&author=1";

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
                data: data
              }
            });
            console.log('data loaded', this.state)
          } else {
            return Promise.reject({
              status: response.status,
              data
            });
          }
        });
      })
      .catch(error => console.log("error:", error));
  }
  render() {
    console.log(this.state)
    let posts = this.state.posts.data.map((post, i) => {
      return <Card key={i} post={post}/>
    })
    return (
      <div>
        {posts}
      </div>
    );
  }
}
