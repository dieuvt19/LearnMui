import { Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Stack direction="row" spacing={5} pt={5} pl={5}>
        <Button variant="text">Click me</Button>
        <Button variant="contained">Submit</Button>
        <Button variant="outlined">Sign in</Button>
        <Button disabled>Disable</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="outlined" startIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </div>
  );
}

export default App;
