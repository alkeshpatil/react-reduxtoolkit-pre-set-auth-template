import React from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_ROUTES } from "../shared/constant/StaticRoutes";

export default function PageNotFound404({ isAuth }) {
  return (
    <div>
      PageNotFound404{" "}
      <Link
        to={isAuth ? NAVIGATION_ROUTES.HOME_PAGE : NAVIGATION_ROUTES.LOGIN_PAGE}
      >
        Go Back to main page
      </Link>
    </div>
  );
}
