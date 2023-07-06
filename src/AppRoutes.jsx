import React from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./shared/components/ProtectedRoute";
import { isAuthLogin } from "./features/authSlice";
import PageNotFound404 from "./pages/PageNotFound404";
import { NAVIGATION_ROUTES } from "./shared/constant/StaticRoutes";

function AppRoutes() {
  const { LOGIN_PAGE, HOME_PAGE, PAGE_NOT_FOUND } = NAVIGATION_ROUTES;
  const dispatch = useDispatch();
  const isToken = localStorage.getItem("USER_TOKEN");
  if (isToken) dispatch(isAuthLogin());
  return (
    <React.Fragment>
      <Routes>
        <Route
          path={LOGIN_PAGE}
          element={isToken ? <Navigate to={HOME_PAGE} /> : <LoginPage />}
        />
        <Route path={HOME_PAGE} element={ProtectedRoute(HomePage)} />
        <Route path={PAGE_NOT_FOUND} element={<PageNotFound404 />} />
      </Routes>
    </React.Fragment>
  );
}

export default AppRoutes;
