import Container from "@mui/material/Container";
import {
  Box,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CustomerCard from "../components/CustomerCard";
import { useContext } from "react";
import CustomerContext from "../context/CustomerContext";
import InboxIcon from "@mui/icons-material/Inbox";

function Home() {
  const { customers } = useContext(CustomerContext);
  console.log(customers);
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom align="center">
        App to manage customers
      </Typography>
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
            </List>
          </Drawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
          <Grid container p={5} spacing={5}>
            {customers &&
              customers.map((customer) => (
                <Grid item xs={4} key={customer.id}>
                  <CustomerCard customer={customer} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
