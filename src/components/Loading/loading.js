import React, { Component } from "react";
import "./loading.css";

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle
              className="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
          <p>The app is loading !</p>
        </div>
      </div>
    );
  }
}

export default Loading;
