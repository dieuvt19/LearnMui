import React, { useState } from "react";
import Container from "@mui/material/Container";
import {
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  Radio,
  Rating,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Create() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [nameError, setNameError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [gender, setGender] = useState("female");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && details) {
      console.log(name, details, gender, rating);
    }

    if (name === "") {
      setNameError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Create a new customer
      </Typography>
      <form action="" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box pb={2}>
          <TextField
            variant="standard"
            fullWidth
            required
            label="Name"
            // value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
          />
          <TextField
            variant="standard"
            fullWidth
            label="Details"
            multiline
            rows={3}
            // value={}
            onChange={(e) => setDetails(e.target.value)}
            error={detailsError}
          />
          <RadioGroup
            row
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="others"
              control={<Radio />}
              label="Others"
            />
          </RadioGroup>
          <Rating
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
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
