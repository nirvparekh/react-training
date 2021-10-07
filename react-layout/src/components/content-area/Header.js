import React from "react";
import PropTypes from "prop-types";

export class Header extends React.Component {
  constructor(props) {
    super();
    console.log("Props in Header", props);
  }
  render() {
    return (
      <div>
        <h5>Hello, {this.props.user.username} </h5>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
};
