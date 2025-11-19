// src/components/auth/ProtectedRoute.jsx

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = localStorage.getItem("user");
  // Ya agar token use kar rahe ho toh:
  // const token = localStorage.getItem("token");

  // Agar user nahi hai → login pe bhej do
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Agar user hai → andar ka page dikhao
  return <Outlet />;
};

export default ProtectedRoute;