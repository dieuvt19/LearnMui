import { Button, Stack, Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Box mt={5}>
        <Typography variant="h1" gutterBottom>
          MUI-5 App
        </Typography>
        <Typography variant="h3" gutterBottom>
          This is a app using MUI-5
        </Typography>
        <Typography variant="subtitle1" align="justify" mt={5}>
          Fontsource can be configured to load specific subsets, weights and
          styles. MUI default typography configuration only relies on 300, 400,
          500, and 700 font weights.
        </Typography>
      </Box>
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
