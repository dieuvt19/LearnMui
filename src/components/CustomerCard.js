import DeleteIcon from "@mui/icons-material/Delete";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";

export default function CustomerCard({ customer }) {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton>
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
