import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";

function App() {
  const [isCreatedNewChat, setIsCreatedNewChat] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <div className="container-fluid d-flex p-0">
          <Sidebar
            isCreatedNewChat={isCreatedNewChat}
            setIsCreatedNewChat={setIsCreatedNewChat}
          />
          <Main
            isCreatedNewChat={isCreatedNewChat}
            setIsCreatedNewChat={setIsCreatedNewChat}
          />
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <Login onLoginSuccess={handleLoginSuccess} />
        </div>
      )}
    </Router>
  );
}

export default App;
