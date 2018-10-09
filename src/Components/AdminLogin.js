import React from "react";
import graphql from "babel-plugin-relay/macro";
import { fetchQuery } from "react-relay";
import environment from "../environment";
import { history } from "../App";

const query = graphql`
  query AdminLoginQuery($login: String!, $password: String!) {
    logInAdmin(login: $login, password: $password)
  }
`;

class AdminLogin extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.onLoginChange = this.onLoginChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onLoginChange(e) {
    this.setState({ login: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();
    const isSuccess = await fetchQuery(environment, query, {
      login: this.state.login,
      password: this.state.password
    });

    isSuccess.logInAdmin
      ? history.push("admin-dashboard")
      : this.setState({ loginError: true });
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.onLoginChange} />
          <input type="password" onChange={this.onPasswordChange} />
          <button type="submit" onClick={this.onSubmit}>
            Log In
          </button>
        </form>
        {this.state.loginError ? <p>Wrong email or password</p> : null}
      </div>
    );
  }
}

export default AdminLogin;
