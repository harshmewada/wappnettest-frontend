import React from "react";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Component = (props) => {
  const classes = useStyles();
  const currentExam = useSelector((state) => state.common.currentExam);
  return (
    <div className={classes.root}>
      <Stack direction="column">
        <Box>
          {currentExam?.name} Time -{currentExam?.time} (minutes)
        </Box>
      </Stack>
    </div>
  );
};

export default Component;
