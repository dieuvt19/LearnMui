import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import { CustomerProvider } from "./context/CustomerContext";
import Summary from "./pages/Summary";

function App() {
  return (
    <CustomerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </CustomerProvider>
  );
}

export default App;
