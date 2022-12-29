import { Stack } from "@mui/material";
import "./App.css";
import Leftcontent from "./components/Leftcontent";
import Maincontent from "./components/Maincontent";
import Rightcontent from "./components/Rightcontent";

function App() {
  return (
    <div className="App">
      <h1>Flexbox</h1>
      <Stack direction="row" justifyContent="space-between">
        <Leftcontent />
        <Maincontent />
        <Rightcontent />
      </Stack>
    </div>
  );
}

export default App;
