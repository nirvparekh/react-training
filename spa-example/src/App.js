import React from "react";
import Header from "./header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AboutUs from "./about-us/AboutUs";
import Contact from "./contact/Contact";
import Homepage from "./homepage/Homepage";
import Testimonials from "./testimonials/Testimonials";
import List from "./products/List";
import SingleProduct from "./products/SingleProduct";

// Functional component:: React v16.8+
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* Route for /aFbout-us */}
          <Route path="/about-us">
            <AboutUs />
          </Route>

          {/* Route for /testimonials */}
          <Route path="/testimonials">
            <Testimonials />
          </Route>

          <Route path="/posts/:post_id">
            <SingleProduct />
          </Route>

          {/* Route for /products */}
          <Route path="/posts">
            <List />
          </Route>

          {/* Route for /contact */}
          <Route path="/contact">
            <Contact />
          </Route>

          {/* For home: */}
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;

// Class component::
// export default class App extends Component {
//   render() {
//     return (
// <div>
//  <BrowserRouter>
//    <Header />
//    <Switch>
//      {/* Route for /aFbout-us */}
//      <Route path="/about-us">
//        <AboutUs />
//      </Route>
//
//      {/* Route for /testimonials */}
//      <Route path="/testimonials">
//        <Testimonials />
//      </Route>
//
//      <Route path="/posts/:post_id">
//        <SingleProduct />
//      </Route>
//
//      {/* Route for /products */}
//      <Route path="/posts">
//        <List />
//      </Route>
//
//      {/* Route for /contact */}
//      <Route path="/contact">
//        <Contact />
//      </Route>
//
//      {/* For home: */}
//      <Route path="/">
//        <Homepage />
//      </Route>
//    </Switch>
//  </BrowserRouter>
//</div>
//     );
//   }
// }
