// PrivateRoute.jsx
import { Route, Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.infoUser.connect);

  return isAuthenticated ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to="/Sign-in" replace />
  );
};

export default PrivateRoute;
