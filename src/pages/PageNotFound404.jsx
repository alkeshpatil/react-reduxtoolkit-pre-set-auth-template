import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound404({isAuth}) {
  return (
    <div>
      PageNotFound404{" "}
      <Link to={isAuth ? "/" : "/login"}>Go Back to main page</Link>
    </div>
  );
}
