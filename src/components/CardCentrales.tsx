import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";

import { CardProps } from "../interfaces/index";
import { Button } from "@mui/material";

export const CardCentrales = ({ index, styles }: CardProps): JSX.Element => {
  return (
    <Card sx={{ minWidth: 210 }} key={index} className={styles} elevation={3}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="p"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>
          <DeleteTwoTone color="error" className="cursor-pointer" />
        </Button>
        <Button>
          <EditTwoTone color="primary" className="cursor-pointer" />
        </Button>
      </CardActions>
    </Card>
  );
};
