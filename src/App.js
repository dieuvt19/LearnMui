import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
