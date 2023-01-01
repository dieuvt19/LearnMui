import DeleteIcon from "@mui/icons-material/Delete";
import {
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
  return (
    <Card>
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
