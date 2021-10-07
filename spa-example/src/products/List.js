import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";

// FLUX ARCHITECTURE

const List = (props) => {
  // useEffect
  // componentDidUpdate
  useEffect(() => {
    console.log("I will do something here.");
  });

  // componentDidMount: first only when component mounted
  useEffect(() => {}, []);

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        {props.posts.map((post, i) => {
          return (
            <div key={i} className="col-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                  <Link to={`/posts/${post.id}`} className="btn btn-primary">
                    Read more...
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStatesToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStatesToProps)(List);
