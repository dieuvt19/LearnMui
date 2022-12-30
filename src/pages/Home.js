import React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom align="center">
        App to manage customers
      </Typography>
    </Container>
  );
}

export default Home;
