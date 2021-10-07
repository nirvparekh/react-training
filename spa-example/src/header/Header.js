import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./headerstyles.css";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log("Header", this.props);
  }
  render() {
    return (
      <div className="header main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/about-us" className="nav-link">
              About us
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/posts" className="nav-link">
              Posts ({this.props.posts.length})
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/testimonials" className="nav-link">
              Testimonials
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStatsToProps = (stats) => ({
  posts: stats.posts,
});

export default connect(mapStatsToProps, null)(Header);
