import { makeStyles, Theme, createStyles, AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { history } from "../../helper/history";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    bar: {
      height: "7vh",
    },
    icon: {
      // marginRight: theme.spacing(2),
      color: "white",
    },
    title: {
      flexGrow: 1,
    },
    typography: {
      padding: theme.spacing(2),
    },
    admin: {
      backgroundColor: "#4F6ABB",
    },
  })
);

interface TopBarProps {
  page: string;
}

function TopBar({ page }: TopBarProps) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const id = localStorage.getItem("_id");

  const handleClick = () => (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  const accessToken = localStorage.getItem("accessToken");

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.admin}>
        <Toolbar className={classes.bar}>
          <Typography variant="h4" className={classes.title}>
            {page}
          </Typography>

          <GoogleLogout
            clientId="907374215732-b5mgla300uqrmlvkq4gstaq0de9osef7.apps.googleusercontent.com"
            buttonText="Logout"
            render={(renderProps) => (
              <Button
                type="button"
                onClick={renderProps.onClick}
                className={classes.icon}
              >
                logout
              </Button>
            )}
            onLogoutSuccess={logout}
            icon={false}
          ></GoogleLogout>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
