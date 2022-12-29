import { Stack } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Stacks</h1>
      <Stack direction="row" justifyContent="space-between" p={5} mt={5}>
        <p>This is a tutorial about Stack in MUI 5</p>
        <p>Thank you for watching</p>
        <p>Please like and subscribe my channel</p>
      </Stack>
    </div>
  );
}

export default App;
