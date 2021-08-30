import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, IconButton } from "@material-ui/core";
import { Dashboard, Event, Flag, Group, Help, History, Person, PersonAdd, Report } from "@material-ui/icons";
import { history } from "../../helper/history";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    pos: {
      top: "auto",
      bottom: 0,
    },
    bar: {
      height: "7vh",
    },
    here: {
      backgroundColor: "#C785EB",
    },
    posAdmin: {
      backgroundColor: "#4F6ABB",
      top: "auto",
      bottom: 0,
    },
  })
);

interface BottomBarProps {
  page: string;
}

function BottomBar({ page }: BottomBarProps) {
  const classes = useStyles();
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.posAdmin}>
        <Toolbar className={classes.bar}>
          <Grid container direction="row" justify="space-around">
            <IconButton
              color="inherit"
              onClick={() => history.push("/dashboard")}
            >
              <Dashboard />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => history.push("/customer&data")}
            >
              <Group />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => history.push("/guide&data")}
            >
              <Flag />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => history.push("/guide&validation")}
            >
              <PersonAdd />
            </IconButton>
            <IconButton color="inherit" onClick={() => history.push("/report")}>
              <Report />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default BottomBar;
