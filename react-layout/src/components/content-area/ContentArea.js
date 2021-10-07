import React from "react";
import PropTypes from "prop-types";
import { UserForm } from "./UserForm";
import { Header } from "./Header";

export class ContentArea extends React.Component {
  constructor(props) {
    super();
    console.log("props in contentArea", props);
  }
  render() {
    return (
      <div className="content-area">
        <Header user={this.props.user} />
        <UserForm />
      </div>
    );
  }
}

ContentArea.propTypes = {
  user: PropTypes.object.isRequired,
  city: PropTypes.string,
  pincode: PropTypes.number,
};
