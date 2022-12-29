import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { margin } from "@mui/system";
import "./App.css";

function App() {
  const MyButton = styled(Button)({
    backgroundColor: "#009900",
    margin: 5,
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#339966",
    },
  });
  return (
    <div className="App">
      <h1>Custom Components</h1>
      <MyButton>Submit</MyButton>
      <MyButton>Register</MyButton>
      <MyButton>Log in</MyButton>
    </div>
  );
}

export default App;
