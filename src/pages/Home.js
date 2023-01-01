import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import CustomerCard from "../components/CustomerCard";
import { useContext } from "react";
import CustomerContext from "../context/CustomerContext";

function Home() {
  const { customers } = useContext(CustomerContext);
  console.log(customers);
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom align="center">
        App to manage customers
      </Typography>
      <Grid container p={5} spacing={5}>
        {customers &&
          customers.map((customer) => (
            <Grid item xs={4} key={customer.id}>
              <CustomerCard customer={customer} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Home;
