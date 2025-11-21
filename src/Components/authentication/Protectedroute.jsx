// src/components/auth/ProtectedRoute.jsx

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = localStorage.getItem("user");

  // Agar user nahi hai → login page pe bhej do (jo "/" pe hai)
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Agar user hai → protected content dikhao
  return <Outlet />;
};

export default ProtectedRoute;