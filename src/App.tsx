import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import FriendList from "../src/components/list/friends-list/FriendList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<FriendList search={""} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
