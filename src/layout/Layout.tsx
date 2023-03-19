import { Grid, Box } from "@mui/material";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export const Layout = (): JSX.Element => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={2} sm={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} sm={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};