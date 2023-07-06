import React from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./shared/components/ProtectedRoute";
import { isAuthLogin } from "./features/authSlice";
import PageNotFound404 from "./pages/PageNotFound404";

function AppRoutes() {
  const dispatch = useDispatch();
  const isToken = localStorage.getItem("USER_TOKEN");
  if (isToken) dispatch(isAuthLogin());
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/login"
          element={isToken ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route path="/" element={ProtectedRoute(HomePage)} />
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
    </React.Fragment>
  );
}

export default AppRoutes;
