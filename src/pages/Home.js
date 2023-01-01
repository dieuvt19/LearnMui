import Container from "@mui/material/Container";
import { Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Home() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/customers");
      const responseJSON = await response.json();

      setCustomers(responseJSON);
    };

    fetchData();
  }, []);
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom align="center">
        App to manage customers
      </Typography>
      <Grid container p={5} spacing={5}>
        {customers &&
          customers.map((customer) => (
            <Grid item xs={4} key={customer.id}>
              <Paper>
                <Typography
                  variant="h5"
                  color="initial"
                  align="center"
                  gutterBottom
                >
                  {customer.name}
                </Typography>
                <Typography variant="h6" color="initial" align="justify">
                  {customer.details}
                </Typography>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Home;
