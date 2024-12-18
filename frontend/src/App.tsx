import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Register from "./views/Register";
import React from "react";
import Friends from "./views/Friends";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
