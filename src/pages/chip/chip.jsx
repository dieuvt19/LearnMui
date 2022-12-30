import { Chip } from "@mui/material";
import React from "react";
import "./chip.css";

function ChipExample() {
  return (
    <div>
      <h1>Chip Component</h1>
      <div className="chip-container">
        <Chip label="My first Chip" />
        <Chip label="My second Chip" variant="outlined" />
        <Chip label="My third Chip" color="primary" />
        <Chip label="My four Chip" color="success" />
        <Chip label="My five Chip" color="info" />
        <Chip label="My sixth Chip" color="warning" />
      </div>
    </div>
  );
}

export default ChipExample;
