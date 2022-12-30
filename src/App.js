import "./App.css";
import Home from "./components/Home";
import Translate from "./components/Translate";
import ChipExample from "./pages/chip/chip";
import Create from "./components/Create";
import Summary from "./components/Summary";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <CustomerProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/chip-example" element={<ChipExample />} />
      </Routes>
    </BrowserRouter>
    // </CustomerProvider>
  );
}

export default App;
