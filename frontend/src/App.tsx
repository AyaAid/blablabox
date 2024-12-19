import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Register from "./views/Register";
import React from "react";
import Friends from "./views/Friends";
import FriendRequest from "../src/components/request/FriendRequest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/friends" element={<Friends />} />
        {/* <Route
          path="/friend-request?id=1&username=nabou"
          element={<FriendRequest />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
