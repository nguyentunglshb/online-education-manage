import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import { RequiredAuth } from "@routes";
import { privateRoutes, publicRoutes } from "@routes/routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route) => {
            let Page = route.component;
            return (
              <Route key={route.name} element={<Page />} path={route.path} />
            );
          })}
          // private route
          <Route element={<RequiredAuth />}>
            {privateRoutes.map((route) => {
              let Page = route.component;
              return (
                <Route key={route.name} element={<Page />} path={route.path} />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
