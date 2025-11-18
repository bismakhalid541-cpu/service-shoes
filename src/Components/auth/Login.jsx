import React, { useState } from "react";
import './Login.scss'
import { login } from "../../services/AuthServices";
import { useNavigate } from "react-router-dom"; // ← import useNavigate

const Login = ({ switchToSignup }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ← initialize

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const user = await login(formData.email, formData.password);
      console.log("Logged in user:", user);
      alert("Login successful!");
      navigate("/home"); // ← navigate after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to your account</p>
        </div>

        <div className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email"
              value={formData.email} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password"
              value={formData.password} onChange={handleInputChange} required />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button onClick={handleSubmit} className="submit-btn">Login</button>
        </div>

        <div className="divider"><span>OR</span></div>

        <div className="signup-link">
          <p>
            Don't have an account?{" "}
            <span onClick={switchToSignup} style={{ cursor: "pointer" }}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
