import React from "react";
import { makeStyles } from "@mui/styles";
import Navbar from "../components/Navbar";
import { Box } from "@mui/system";
import ExamsList from "../components/ExamsList";
import { CssBaseline } from "@mui/material";
import { Route } from "react-router-dom";
import Exam from "../components/Exam";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.white,
    padding: theme.spacing(3),
    height: "100%",
    width: "100%",
  },
}));

const MainRoutes = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box style={{ width: "100%", height: "100%" }}>
        <Navbar />
        <CssBaseline />
        <div className={classes.container}>
          <Route exact path="/" component={ExamsList} />
          <Route exact path="/exam/:id" component={Exam} />
        </div>
      </Box>
    </div>
  );
};

export default MainRoutes;
