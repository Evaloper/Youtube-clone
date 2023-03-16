import React from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "./components/pages/HomePage";
// import "./style.css"

const App = () => {
  return (
      <main>
        <Routes>
          <Route 
          path="/"
          element={<HomePage />}
          />
        </Routes>
      </main>
  );
};

export default App;
