import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import { Home, Login } from "@pages";
import { HOME, LOGIN } from "@routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
