import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AnnouncementIcon from "@material-ui/icons/Announcement";
// import DescriptionIcon from "@material-ui/icons/Description";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EditIcon from "@material-ui/icons/Edit";
import PersonIcon from '@material-ui/icons/Person';
import { useTheme } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { useState } from "react";

interface IOpen {
  open: boolean;
  setOpen: any;
  classes: any;
  handleDrawerClose: any;
}

function SideBar({ open, classes, handleDrawerClose }: IOpen) {
  const theme = useTheme();
  const history = useHistory();

  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);
  

  const logout= async () => {
    await localStorage.removeItem('token');
    history.push("/");
    handleDrawerClose();
    setOpenConfirmDialog(false);
  };

  const displayConfirmDialog = () => {
    setOpenConfirmDialog(true);
  };

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Avatar src="./logo_png.png" className={classes.big} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>

              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link
            to="/announce"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <AnnouncementIcon />
              </ListItemIcon>
              <ListItemText primary="Announce" />
            </ListItem>
          </Link>

          <Link to="/manage" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="Manage" />
            </ListItem>
          </Link>

          <Link to="/manageEmp" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Employees" />
            </ListItem>
          </Link>

          <ListItem button onClick={displayConfirmDialog}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
          
        </List>

        <Divider />
      </Drawer>
    </>
  );
}

export default SideBar;