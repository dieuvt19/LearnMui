import {
  Button,
  Stack,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import "./App.css";
import HomeIcon from "@mui/icons-material/Home";
import CssIcon from "@mui/icons-material/Css";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <HomeIcon fontSize="large" />
          <Typography variant="h5" sx={{ flexGrow: 1, pl: 2 }} align="left">
            MUI-5
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
      <Box mt={5}>
        <Typography variant="h1" gutterBottom>
          MUI-5 App
        </Typography>
        <Typography variant="h3" gutterBottom>
          This is a app using MUI-5
        </Typography>
        <Typography variant="subtitle1" align="justify" mt={5} p={5}>
          Fontsource can be configured to load specific subsets, weights and
          styles. MUI default typography configuration only relies on 300, 400,
          500, and 700 font weights.
        </Typography>
      </Box>
      <Grid container p={5} spacing={5}>
        <Grid item xs={4}>
          <Typography paragraph={true} align="justify">
            Fontsource can be configured to load specific subsets, weights and
            styles. MUI default typography configuration only relies on 300,
            400, 500, and 700 font weights.
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Bootstrap 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is
                <CssIcon fontSize="large" /> framework to build website quickly.
                Bootstrap is very easy to learn.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>MUI 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is CSS framework to build website quickly. This library
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion disabled>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>New framework for CSS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is CSS framework to build website quickly. This library
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={8}>
          <Typography paragraph={true} align="justify">
            Fontsource can be configured to load specific subsets, weights and
            styles. MUI default typography configuration only relies on 300,
            400, 500, and 700 font weights. Fontsource can be configured to load
            specific subsets, weights and styles. MUI default typography
            configuration only relies on 300, 400, 500, and 700 font weights.
          </Typography>
        </Grid>
      </Grid>
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
