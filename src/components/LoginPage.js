import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Slide from "@material-ui/core/Slide";
import "./LoginPage.scss";

const useStyles = makeStyles((theme) => ({
  // container: {
  //   background: "rgba(254, 254, 254, 1)",
  //   webkitBoxShadow: "0px 2px 7px 1px rgba(0,0,0,0.4)",
  //   mozBoxShadow: "0px 2px 7px 1px rgba(0,0,0,0.4)",
  //   boxShadow: "0px 2px 7px 1px rgba(0,0,0,0.4)",
  //   webkitBborderRadius: "3px",
  //   mozBorderRadius: "3px",
  //   borderRadius: "3px",
  // },
  // paper: {
  //   marginTop: theme.spacing(8),
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   padding: "40px 0px 30px 0px",
  // },
  // form: {
  //   width: "100%", // Fix IE 11 issue.
  //   marginTop: theme.spacing(1),
  // },
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },
}));

function LoginPage() {
  // const classes = useStyles();
  return (
    <Slide direction="up" in="true" mountOnEnter unmountOnExit>
      <Container maxWidth="xs" className="login">
        <Box className="paper">
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className="form">
            <TextField
              fullWidth
              margin="normal"
              id="username"
              label="Username"
              name="username"
              className="form-control"
            />
            <TextField
              fullWidth
              margin="normal"
              id="password"
              label="Password"
              name="password"
              className="form-control"
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Slide>
  );
}

export default LoginPage;
