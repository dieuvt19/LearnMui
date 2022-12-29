import { Box } from "@mui/material";
import React from "react";

function Leftcontent() {
  return (
    <Box
      bgcolor="lightblue"
      flex={2}
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <h2>Leftcontent</h2>
      <p>This is the left content of the page</p>
    </Box>
  );
}

export default Leftcontent;
