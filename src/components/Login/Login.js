import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/api";
import wiseLogo from "../../assets/logo_resized.jpg";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitLoginForm = async () => {
    if (email !== "" && password !== "") {
      console.log(email);
      const response = await login(email, password);
      if (response.success) {
        console.log("Login successful");
        // If login is successful, you can store the token and navigate to another page
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
        onLoginSuccess();
        navigate("/dashboard"); // Adjust the path as needed
      } else {
        console.log("Login failed: " + response.message);
      }
    } else {
      console.log("Email and password cannot be empty");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <img
          src={wiseLogo}
          alt=""
          className="rounded-circle img-fluid login-logo-size "
        />
      </div>
      <div className="login-container">
        <h2 className="fw-bold d-flex justify-content-center fs-1">
          <span className="login-header-text-size">Welcome To Wise AI</span>
        </h2>

        <div className="input-group">
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="submit-group">
          <button
            type="button"
            onClick={submitLoginForm}
            className="submit-button"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
