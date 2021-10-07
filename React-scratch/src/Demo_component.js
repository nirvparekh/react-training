import React from "react";
class Demo_component extends React.Component {
  /**
   * Now, our Demo_component is inheritted from React.Component
   */
  constructor() {}

  render() {
    return (
      <div className="container">
        <div className="content-area">
          <nav className="header"></nav>
          <div className="main-content">
            <div className="row">
              <div className="col-12">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo_component