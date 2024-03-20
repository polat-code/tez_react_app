import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

function App() {
  const [isCreatedNewChat, setIsCreatedNewChat] = useState(false);

  return (
    <div className="App">
      <Sidebar
        isCreatedNewChat={isCreatedNewChat}
        setIsCreatedNewChat={setIsCreatedNewChat}
      />
      <Main
        isCreatedNewChat={isCreatedNewChat}
        setIsCreatedNewChat={setIsCreatedNewChat}
      />
    </div>
  );
}

export default App;
