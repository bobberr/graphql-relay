import React from "react";
import { Route, Redirect } from "react-router-dom";
import graphql from "babel-plugin-relay/macro";
import { fetchQuery } from "react-relay";
import environment from "../environment";

const query = graphql`
  query ProtectedRouteQuery {
    checkAuth
  }
`;

class ProtectedRoute extends React.Component {
  state = {};
  isOpened = true;
  async componentDidMount() {
    const promiseResult = await fetchQuery(environment, query, null);
    console.log(promiseResult);
    if (this.isOpened) {
      this.setState({ isAuth: promiseResult.checkAuth });
    }
  }
  componentWillUnmount() {
    this.isOpened = false;
  }
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          this.state.isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect to="/unauthorized" />
          )
        }
      />
    );
  }
}

export default ProtectedRoute;
