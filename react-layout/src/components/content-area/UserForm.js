import React, { Component } from "react";
import UserBoxes from "./UserBoxes";

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: "",
      contactList: [],
    };
  }

  addItem() {
    const temp = [...this.state.listOfEmails];
    temp.push(this.state.emailInput);
    this.setState({ listOfEmails: temp });
  }

  submitForm() {
    if (this.state.name !== "") {
      // prevent the default behaviour of the element.
      // e.preventDefault();
      const info = {
        name: this.state.name,
        email: this.state.email,
        contact: this.state.contact,
      };
      const temp = [...this.state.contactList];
      temp.push(info);
      this.setState({ contactList: temp, name: "", email: "", contact: "" });
    } else {
      alert("Please fill all the data");
    }
  }

  render() {
    return (
      <div>
        <div className="p-4 bg-light border">
          <div className="mb-3">
            <input
              name="username"
              type="text"
              placeholder="Name"
              className="form-control"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="E-mail"
              className="form-control"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              placeholder="Contact Number"
              className="form-control"
              value={this.state.contact}
              onChange={(e) => this.setState({ contact: e.target.value })}
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.submitForm()}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-danger ms-3"
            onClick={() => this.setState({ contactList: [] })}
          >
            Clear
          </button>
        </div>

        {/* Only get UserBoxes component if there is at least 1 element in contactList */}
        {this.state.contactList.length === 0 && "No User contact list found."}
        {this.state.contactList.length > 0 && (
          <div>
            {this.state.contactList.length} Contacts found.
            <UserBoxes contactList={this.state.contactList} />
          </div>
        )}
      </div>
    );
  }
}

// Two way binding
// a = b
// a = 3
// b = 3
