import React, { useState } from "react";
import Login from "../Components/auth/Login";
import Signup from "../Components/auth/Sigup";

const Loginsignup = () => {
  const [isLogin, setIsLogin] = useState(true); // TRUE = Show Login

  return (
    <div>
      {isLogin ? (
        <Login switchToSignup={() => setIsLogin(false)} />
      ) : (
        <Signup switchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default Loginsignup;
