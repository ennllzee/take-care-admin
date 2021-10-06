import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
  Paper,
} from "@material-ui/core";
import { useEffect } from "react";
import { history } from "../../helper/history";
import GoogleLogin from "react-google-login";
import Alert from "../Alert/Alert";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // minHeight: "100vh",
      // backgroundColor: "#8FA5E6",
    },
    paper: {
      background: "white",
      width: "80vw",
      marginTop: theme.spacing(8),
    },
    login: {
      padding: "5%",
    },
    form: {
      paddingTop: "2%",
      paddingBottom: "2%",
    },
    margin: {
      margin: theme.spacing(1),
    },
    google: {
      padding: "2%",
    },
  })
);

function DashboardPage() {
  const classes = useStyles();
  const id = localStorage.gettItem("_id");
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken !== null && id !== null) {
      history.push(`/dashboard`);
    }
  }, [accessToken]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="space-between"
      className={classes.root}
    >
      <Grid item></Grid>

      <Grid item>
        <Paper className={classes.paper}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid xs={12} md={12} lg={12}>
              Dashboard
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}
export default DashboardPage;
