import { useLocation } from "react-router-dom";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import MenuRoundedIcon from "@mui/icons-material/Menu";
import { Box, Divider, List } from "@mui/material";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Box
      className="flex flex-col justify-between p-3 bg-cyan-700"
      sx={{
        height: 100 + "vh",
      }}
    >
      <Box className="flex justify-between items-center p-2">
        <Typography className="text-xl font-bold text-white" variant="h5">
          CRM Client
        </Typography>

        <AccordionSummary
          expandIcon={<MenuRoundedIcon color={"action"} height={2 + "em"} />}
          aria-controls="menu"
          id="menu"
        ></AccordionSummary>
      </Box>
      <Box className="text-center">
        <List component="nav" aria-label="mailbox folders">
          <Link
            to="/"
            className={`${
              pathname === "/" ? "text-gray-400" : "text-white"
            } my-3 hover:text-gray-300 transition-all`}
          >
            Dashboard
          </Link>
          <Divider />
          <Link
            to="/newclient"
            className={`${
              pathname === "/newclient" ? "text-gray-400" : "text-white"
            } my-3 hover:text-gray-300 transition-all`}
          >
            Cargar Cliente
          </Link>
          <Divider />
          <Link
            to="/editclient"
            className={`${
              pathname === "/editclient" ? "text-gray-400" : "text-white"
            } my-3 hover:text-gray-300 transition-all`}
          >
            Editar Cliente
          </Link>
          <Divider light />
          <Link
            to="/user"
            className={`${
              pathname === "/user" ? "text-gray-400" : "text-white"
            } my-3 hover:text-gray-300 transition-all`}
          >
            Mi Perfil
          </Link>
        </List>
      </Box>

      <Box>
        <footer className="p-3 my-3 text-center text-white">
          <Link to="https://github.com/leandroquiroga" target="_blank">
            By Leandro Quiroga
          </Link>
        </footer>
      </Box>
    </Box>
  );
};
