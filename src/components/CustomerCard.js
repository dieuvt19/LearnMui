import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import CustomerContext from "../context/CustomerContext";

export default function CustomerCard({ customer }) {
  const { deleteCustomer } = useContext(CustomerContext);
  const { name } = customer;
  const stringAvatar = (name) => {
    return {
      children: `${name.split(" ")[0][0]}`,
    };
  };

  return (
    <Card key={customer.id}>
      <Avatar {...stringAvatar(name)} sx={{ bgcolor: "green" }} />
      <CardHeader
        action={
          <IconButton onClick={() => deleteCustomer(customer.id)}>
            <DeleteIcon />
          </IconButton>
        }
        title={customer.name}
      />
      <CardContent>
        <Typography paragraph align="justify">
          {customer.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
