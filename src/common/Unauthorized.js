import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = props => {
  return (
    <div>
      <p>You are unauthorized to see this page as an admin. Please login.</p>
      <Link to="/admin-login">Log in</Link>
    </div>
  );
};

export default Unauthorized;
