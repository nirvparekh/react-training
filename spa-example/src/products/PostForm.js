import React, { useState } from "react";
import { connect } from "react-redux";

const PostForm = (props) => {
  const [title, set_title] = useState("");
  const [body, set_body] = useState("");
  return (
    <div>
      <form
        className="mt-4 ps-4"
        onSubmit={(e) => {
          e.preventDefault();
          const data = { title, body };
          props.setPosts(data);
        }}
      >
        {/* Title */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={title}
            placeholder="Write Title"
            onChange={(e) => set_title(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            type="text"
            className="form-control"
            value={body}
            placeholder="Content"
            onChange={(e) => set_body(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-success">
            Insert
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setPosts: (data) => dispatch({ type: "SET_POST", data }),
});

export default connect(null, mapDispatchToProps)(PostForm);
