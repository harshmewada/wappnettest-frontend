import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/action/userActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function ButtonAppBar() {
  const { name, isLogged, type } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const adminRoutes = [
    {
      title: "Results",
      path: "/",
    },
  ];
  const userRoutes = [
    {
      title: "Exams",
      path: "/",
    },
    {
      title: "Results",
      path: `/results`,
    },
  ];
  const displayRoutes = type === "admin" ? adminRoutes : userRoutes;

  const handleNavigate = (path) => {
    history.push(path);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
            {name}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {displayRoutes.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigate(page.path)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <Button
            color="inherit"
            onClick={() => {
              dispatch(logOutUser());
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
