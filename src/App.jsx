import React, { useState}  from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<NewsBoard />} />
        <Route path="/:category" element={<NewsBoard />} />
      </Routes>
    </div>
  );
};

export default App;
