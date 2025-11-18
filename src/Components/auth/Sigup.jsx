import React, { useState } from "react";
import './Signup.scss'
import { signup } from "../../services/AuthServices";
import { useNavigate } from "react-router-dom"; // ← import useNavigate

const Signup = ({ switchToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ← initialize

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const user = await signup(name, email, password);
      console.log("Signed up user:", user);
      alert("Signup successful!");
      navigate("/home"); // ← navigate after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Sign up to get started</p>
        </div>

        <div className="signup-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name"
              value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email"
              value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password"
              value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password"
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button onClick={handleSubmit} className="submit-btn">Sign Up</button>
        </div>

        <div className="divider"><span>OR</span></div>

        <div className="login-link">
          <p>
            Already have an account?{" "}
            <span onClick={switchToLogin} style={{ cursor: "pointer", color: "#667eea", fontWeight: "600" }}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
