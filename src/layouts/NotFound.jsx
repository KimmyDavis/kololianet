import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>error</h2>
      <p>
        It seems like this ain't us .... go to <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
