import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Card,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setExam } from "../redux/action/commonActions";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
  },
}));

const ExamsList = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const exams = useSelector((state) => state.common.exams);
  const handleNavigate = (data) => {
    history.push(`/exam/${data.id}`);
    dispatch(setExam(data));
  };
  console.log("exams", exams);
  return (
    <div className={classes.root}>
      <Stack direaction="column">
        <Card>
          <List sx={{ width: "100%" }}>
            {exams.map((ex) => {
              return (
                <ListItem
                  button
                  onClick={() => {
                    handleNavigate(ex);
                  }}
                  alignItems="flex-start"
                >
                  <ListItemText
                    primary={ex.name}
                    secondary={
                      <React.Fragment>
                        time - {ex.time} (minutes)
                      </React.Fragment>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Card>
      </Stack>
    </div>
  );
};

export default ExamsList;
