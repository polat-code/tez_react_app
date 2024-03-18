import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {};

  return (
    <div className="register-container">
      <div className="input-group">
        <input
          type="email"
          className="input-field"
          placeholder="Mail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          className="input-field"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          className="input-field"
          placeholder="Surname"
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="submit-group">
        <button
          type="submit"
          className="submit-button"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
