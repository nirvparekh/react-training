// root component / main component / the parent component.
import React from "react";
import { Sidebar as SidebarCompo } from "./components/sidebar/Sidebar";
import { ContentArea } from "./components/content-area/ContentArea";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: {
        username: "JohnsonPatrick",
        email: "johnson.patrick@example.com",
        id: 2035,
      },
    };
  }
  render() {
    return (
      <div className="app">
        <SidebarCompo />
        <ContentArea user={this.state.loggedInUser} designation='CEO' />
      </div>
    );
  }
}

export default App;
