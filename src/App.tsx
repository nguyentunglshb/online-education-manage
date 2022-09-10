import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import { RequiredAuth } from "@routes";
import { privateRoutes, publicRoutes } from "@routes/routers";
import { DefaultLayout } from "@layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route) => {
            const Page = route.component;
            let Layout: any = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = <></>;
            }
            return (
              <Route
                key={route.name}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
                path={route.path}
              />
            );
          })}

          {/* private route */}
          <Route element={<RequiredAuth />}>
            {privateRoutes.map((route) => {
              const Page = route.component;
              let Layout: any = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = <></>;
              }
              return (
                <Route
                  key={route.name}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                  path={route.path}
                />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
