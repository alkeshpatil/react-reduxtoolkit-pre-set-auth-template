import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PageNotFound404 from "../../pages/PageNotFound404";

export default function ProtectedRoute(Component) {
  const auth = useSelector((state) => state.auth.isAuth);
  console.log(auth);
  if (auth == true) return <Component />;
  return <PageNotFound404 />;
}
