import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";

import { CardProps } from "../interfaces/index";
import { Button } from "@mui/material";

export const CardCentrales = ({ key, styles, localities }: CardProps): JSX.Element => {

  return (
    <Card sx={{ minWidth: 210 }} key={ key } className={styles} elevation={3}>
      <CardContent>
        <Typography sx={{ fontSize: 20, textAlign: 'center' }} color="text.secondary" gutterBottom> {localities.geocent}</Typography>
        <Typography variant="body1">{localities.locality}</Typography>
        <Typography variant="body2">{localities.province}</Typography>
        <Typography variant="h5" component="p"></Typography>
        <Typography color="text.secondary"> {localities.zone}</Typography>
      </CardContent>
      <CardActions className="flex justify-center items-center">
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
