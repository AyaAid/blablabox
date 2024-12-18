import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Register from "./views/Register";
import React from "react";
import FriendList from "./components/list/friends-list/FriendList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/friends" element={<FriendList search={""} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
