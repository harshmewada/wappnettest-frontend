import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { emailRegex } from "../utils/regex";
import waitTimeout from "../helpers/waitFor";
import { useDispatch, useSelector } from "react-redux";
import { showSnackBar } from "../redux/action/snackActions";
import { loginUser } from "../redux/action/userActions";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.white,
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      backgroundColor: "white",
    },
  },
  imageContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    height: "70vh",
  },

  title: {
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: theme.palette.fontSizes.xl,
    marginBottom: 10,
  },
  subTitle: {
    color: theme.palette.gray[1200],
    fontSize: theme.palette.fontSizes.semibase,
  },
  card: {
    width: "100%",
  },
  btn: {
    fontSize: theme.palette.fontSizes.semibase,
    padding: "10px 22px",
  },

  textField: {
    borderRadius: theme.palette.radius.base,
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = React.useState(false);
  const users = useSelector((state) => state.common.users);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "harsh@gmail.com",
      password: "123456789",
    },
  });
  const onSubmit = (data) => {
    setLoading(!isLoading);
    waitTimeout(1000, () => {
      const findUsers = users.find((a) => a.email === data.email);
      if (!findUsers) {
        dispatch(
          showSnackBar(
            {
              message: "User not found",
            },
            "error"
          )
        );
      } else {
        dispatch(loginUser(findUsers));
      }
      setLoading(false);
    });
  };
  return (
    <div className={classes.root}>
      <Container>
        <Grid container alignItems="center" justifyContent="space-evenly">
          <Grid item lg={6} className={classes.imageContainer}>
            <Card elevation={0} className={classes.card}>
              <CardContent>
                <Typography variant="h5" className={classes.title}>
                  Sign in to Admin Panel
                </Typography>
                <Typography variant="h6" className={classes.subTitle}>
                  Enter your details below.
                </Typography>
              </CardContent>

              <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent>
                  <Controller
                    name="email"
                    fullWidth
                    label="Email"
                    control={control}
                    rules={{
                      required: { value: true, message: "Email is required" },
                      pattern: {
                        value: emailRegex,
                        message: "Invalid Email address",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        variant="outlined"
                        placeholder="Enter Email Address"
                        className={classes.textField}
                        InputProps={{
                          classes: {
                            notchedOutline: classes.textField,
                          },
                        }}
                        required={true}
                        helperText={errors?.email?.message}
                        error={errors?.email}
                      />
                    )}
                  />
                </CardContent>
                <CardContent>
                  <Controller
                    name="password"
                    fullWidth
                    label="Password"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Password"
                        placeholder="Enter Password"
                        required={true}
                        variant="outlined"
                        type="password"
                        className={classes.textField}
                        InputProps={{
                          classes: {
                            notchedOutline: classes.textField,
                          },
                        }}
                        helperText={errors?.password?.message}
                        error={errors?.password}
                      />
                    )}
                  />
                </CardContent>
                <CardContent>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item sm={12} md={12} lg={12} xs={12}>
                      <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        fullWidth
                        disabled={isLoading}
                        className={classes.btn}
                      >
                        {isLoading && (
                          <CircularProgress color="inherit" size={30} />
                        )}
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Login;
