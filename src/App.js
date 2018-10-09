import React, { Component } from "react";
import "./App.css";
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import AdminLogin from "./Components/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard";
import ProtectedRoute from "./common/ProtectedRoute";
import Unauthorized from "./common/Unauthorized";

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/admin-login" component={AdminLogin} />
          <ProtectedRoute path="/admin-dashboard" component={AdminDashboard} />
          <Route path="/unauthorized" component={Unauthorized} />
        </div>
      </Router>
    );
  }
}

export default App;
