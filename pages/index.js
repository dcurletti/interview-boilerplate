import React from "react";
import Router from "next/router";

export default class Index extends React.Component {
  static REDIRECT_URL = "localhost:3000/1";

  static async getInitialProps({ ctx: { res } }) {
    if (res) {
      res.writeHead(302, {
        Location: Index.REDIRECT_URL
      });
      res.end();
    } else {
      Router.push(Index.REDIRECT_URL);
    }
    return {};
  }

  render() {
    return (
      <div>Redirecting...</div>
    );
  }
}
