import Error from "./_error";

import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { Component } from "react";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/Cnfc");
    const data = await res.json();

    const statusCode = res.status > 200 ? res.status : false;

    return { user: data, statusCode };
  }

  // componentDidMount() {
  //   fetch("https://api.github.com/users/Cnfc")
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         user: data.name
  //       });
  //     });
  // }
  render() {
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout>
        <p>{user.name}</p>
        <p>{user.bio}</p>
        <h1>About this project</h1>
        <img src={user.avatar_url} alt="Me" height="200px" />
      </Layout>
    );
  }
}
