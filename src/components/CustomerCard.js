import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import CustomerContext from "../context/CustomerContext";
import CustomerModal from "./CustomerModal";

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
          <Tooltip title="Delete customer" placement="right">
            <IconButton onClick={() => deleteCustomer(customer.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        }
        title={customer.name}
      />
      <CardContent>
        <Typography paragraph align="justify">
          {customer.details}
        </Typography>
        <CustomerModal customer={customer} />
      </CardContent>
    </Card>
  );
}
