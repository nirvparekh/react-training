import React, { Component } from "react";
import { withRouter } from "react-router";

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postdetail: {},
    };
  }
  async componentDidMount() {
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.post_id}`
      );
      const data = await result.json();
      this.setState({ postdetail: data });
    } catch (error) {}
  }

  render() {
    return (
      <div className="container m-4">
        <small> id: #{this.state.postdetail.id} </small>
        <h1>{this.state.postdetail.title}</h1>
        <p> {this.state.postdetail.body} </p>
      </div>
    );
  }
}

export default withRouter(SingleProduct);
