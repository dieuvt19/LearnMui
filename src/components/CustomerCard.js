import { CheckBox } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import CustomerContext from "../context/CustomerContext";
import CustomerModal from "./CustomerModal";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDown";

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
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "red" }} />}
        />
        <Checkbox
          icon={<ThumbDownOutlinedIcon />}
          checkedIcon={<ThumbDownIcon sx={{ color: "blue" }} />}
        />
      </CardContent>
    </Card>
  );
}
