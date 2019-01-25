import React, { Component } from "react";

export default class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1094857847148-tv6kvabn42mf6slsloteq511lqqmhk9e.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({
            isSignedIn: this.auth.isSignedIn.get()
          });
        });
    });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know</div>;
    } else if (this.state.isSignedIn) {
      return <div>Sign out</div>;
    } else {
      return <div>Sign in</div>;
    }
  }

  onSignIn = () => {};

  render() {
    return <div className=" item">{this.renderAuthButton()}</div>;
  }
}
