import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./headerstyles.css";
/*
casdkjasfas df
asdfkadfasdf
asdfasdfdsf
*/
export default class Header extends Component {
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
              Posts
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
