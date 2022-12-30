import React from "react";
import Container from "@mui/material/Container";
import { Typography, TextField, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Create() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Create a new customer
      </Typography>
      <form action="" noValidate autoComplete="off">
        <Box pb={2}>
          <TextField
            variant="standard"
            fullWidth
            required
            label="Name"
            // value={}
            // onChange={}
          />
          <TextField
            variant="standard"
            fullWidth
            label="Details"
            multiline
            rows={3}
            // value={}
            // onChange={}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          startIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Create;
