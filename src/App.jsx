import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import AllRouting from "./components/AllRouting/AllRouting";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main_content">
        <AllRouting />
      </main>

      <div className="background"></div>
    </div>
  );
};

export default App;
