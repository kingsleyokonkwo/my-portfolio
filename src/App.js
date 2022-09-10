import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Routes basename="/my-portfolio">
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
