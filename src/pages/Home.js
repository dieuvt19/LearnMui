import Container from "@mui/material/Container";
import {
  Box,
  createTheme,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import CustomerCard from "../components/CustomerCard";
import { useContext, useState } from "react";
import CustomerContext from "../context/CustomerContext";
import InboxIcon from "@mui/icons-material/Inbox";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/system";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { ThemeProvider } from "styled-components";

function Home() {
  const { customers } = useContext(CustomerContext);
  const [mode, setMode] = useState("light");
  console.log(mode);
  // const customTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   },
  // });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const MyDiv = styled("div")({
    backgroundColor: "aliceblue",
    padding: 10,
    borderRadius: 15,
  });

  const MyTypography = styled(Typography)({
    backgroundColor: "#52A388",
    color: "white",
    textAlign: "center",
    padding: 5,
    fontSize: "20px",
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="lg">
        <CssBaseline />
        <Typography variant="h3" gutterBottom align="center">
          App to manage customers
        </Typography>
        <MyTypography>This is an app using Material UI 5</MyTypography>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Drawer variant="permanent" anchor="left">
              <List>
                <ListItem component="a" href="/create">
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create new customer" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Brightness3Icon />
                  </ListItemIcon>
                  <Switch
                    onChange={(e) =>
                      setMode(mode === "light" ? "dark" : "light")
                    }
                  />
                  <ListItemText primary="Switch mode" />
                </ListItem>
              </List>
            </Drawer>
          </Box>
          <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
            <Grid container p={5} spacing={5}>
              {customers &&
                customers.map((customer) => (
                  <Grid item xs={4} key={customer.id}>
                    <MyDiv>
                      <CustomerCard customer={customer} />
                    </MyDiv>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
