import React, { Component } from "react";

export default class UserBoxes extends Component {
  constructor() {
    super();
    console.log(1, "Constructor");
  }

  componentDidMount() {
    // ONLY EXECUTED ONCE. for the 1st time of mounting.
    console.log(2, "Component did mount");
  }
  
  componentDidUpdate() {
    console.log(4, "Component did update");
  }

  componentWillUnmount() {
    console.log(5, 'Component will unmount now.')
  }

  render() {
    console.log(3,'compnent is mounting')
    return (
      <div className="mt-4">
        <h3>User Boxes</h3>
        <div className="row">
          {this.props.contactList.map((contact, index) => (
            <div className="col-3" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{contact.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {contact.email}
                  </h6>
                  <p className="card-text">{contact.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
