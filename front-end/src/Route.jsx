import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import Accueil from "./pages/Aaccueil";
import SignIn from "./pages/Sign-In";
import User from "./pages/User";
import Root from "./pages/Root";
import Header from "./containers/Header";
import Footer from "./containers/Footer";

const Router = () => {
  const isAuthenticated = useSelector((state) => state.infoUser.connect);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="Sign-in" element={<SignIn />} />
        {isAuthenticated ? (
          <Route path="User" element={<User />} />
        ) : (
          <Route path="*" element={<Navigate to="/Sign-in" />} />
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
