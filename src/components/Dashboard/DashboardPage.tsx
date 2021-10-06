import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import { history } from "../../helper/history";
import Dashboard from "@material-ui/icons/Dashboard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
    },
    title: {
      marginTop: "3%",
      marginLeft: "2%",
      marginBottom: "2%",
    },
  })
);

function DashboardPage() {
  const classes = useStyles();
  const id = localStorage.getItem("_id");
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken === null || id === null) {
      history.push(`/`);
    }
  }, [accessToken]);

  return (
    <div className={classes.root}>
      <Grid className={classes.title}>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Dashboard fontSize="large" />
          </Grid>
          <Grid item xs zeroMinWidth style={{ margin: "auto" }}>
            <Typography variant="h3" noWrap>
              Dashboard
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Container maxWidth="lg">
        <Grid container spacing={3}></Grid>
      </Container>
    </div>
  );
}
export default DashboardPage;
