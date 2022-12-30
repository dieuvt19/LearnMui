import { Chip } from "@mui/material";
import React, { useState } from "react";
import "./chip.css";

function ChipExample() {
  const [languages, setLanguages] = useState([
    { id: 1, label: "English" },
    { id: 2, label: "Spanish" },
    { id: 3, label: "French" },
    { id: 4, label: "Germany" },
    { id: 5, label: "Italian" },
  ]);
  console.log(languages);

  const handleDelete = (languageToDelete) => {
    setLanguages((languages) =>
      languages.filter((language) => language.id !== languageToDelete.id)
    );
  };

  return (
    <div>
      <h1>Chip Component</h1>
      <div className="chip-container">
        {languages.map((language) => (
          <Chip
            key={language.id}
            label={language.label}
            onDelete={() => {
              handleDelete(language);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ChipExample;
