import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box, CssBaseline } from "@mui/material";
import Login from "../components/Login";
import DashBoard from "../components/Dashboard";

import usersData from "../data/users.json";
import examsData from "../data/exams.json";
import questionData from "../data/questions.json";
import answersData from "../data/answers.json";
import { setInitialData } from "../redux/action/commonActions";
import Snack from "../components/SnackComponent";
import MainRoutes from "./MainRoutes";

const Routes = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.user.isLogged);

  React.useEffect(() => {
    dispatch(
      setInitialData({
        users: usersData,
        questions: questionData,
        answers: answersData,
        exams: examsData,
      })
    );
  }, []);

  return (
    <div className={classes.root}>
      <Snack />
      <BrowserRouter>
        <Switch>
          <Box>
            <CssBaseline />
            {!isLogged ? <Login /> : <MainRoutes />}
          </Box>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Routes;
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.white,
    [theme.breakpoints.down("lg")]: {
      backgroundColor: "white",
    },
  },
  container: {
    backgroundColor: theme.palette.white,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(14),
    height: "100%",
    width: "100%",
  },
  box: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "100%",
    padding: 20,
    margin: 20,
  },
}));
