import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
  Paper,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { history } from "../../helper/history";
import GoogleLogin from "react-google-login";
import Alert from "../Alert/Alert";
import { useGoogleLogout } from "react-google-login";

import { gql, useQuery } from "@apollo/client";
import useAdminApi from "../../hooks/adminhooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      backgroundColor: "#8FA5E6",
    },
    paper: {
      background: "white",
      width: "80vw",
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

function LoginPage() {
  const classes = useStyles();

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken !== null) {
      history.push(`/dashboard`);
    }
  }, [accessToken]);

  const [res, setRes] = useState<any>();
  const [token, setToken] = useState<string>();

  const responseGoogle = async (response: any) => {
    console.log(response);
    setRes(response);
    setToken(response.tokenId);
  };

  const { loginAdmin } = useAdminApi();

  const { loading, error, data } = useQuery(loginAdmin, {
    variables: { loginAdminToken: token },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    console.log(data);
    console.log(token);
    console.log(loading);
    console.log(error?.graphQLErrors[0].message);

    if (!loading && res !== undefined && token !== undefined) {
      if (data) {
        localStorage.setItem("_id", data.loginAdmin._id);
        localStorage.setItem("accessToken", res.accessToken);
        history.push(`/dashboard`);
      } else {
        setAlert(true);
      }
    }
  }, [loading]);

  const [alert, setAlert] = useState<boolean>(false);

  const loginFailed = () => {
    setAlert(false);
  };

  const { signOut } = useGoogleLogout({
    clientId:
      "907374215732-cj2ep14tclbc8aehn9svjkcnfn4ai8cl.apps.googleusercontent.com",
    onLogoutSuccess: loginFailed,
  });

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
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.login}
          >
            <Grid xs={12} md={12} lg={12}>
              <Typography variant="h4">ลงชื่อเข้าระบบ</Typography>
            </Grid>
            <Grid xs={12} md={12} lg={12} className={classes.form}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.google}
              >
                <GoogleLogin
                  clientId="907374215732-cj2ep14tclbc8aehn9svjkcnfn4ai8cl.apps.googleusercontent.com"
                  buttonText="Sign in with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item></Grid>
      <Alert
        closeAlert={signOut}
        alert={alert}
        title="ลงชื่อไม่สำเร็จ"
        text="ไม่พบบัญชีนี้ในระบบ Admin"
        buttonText="ปิด"
      />
    </Grid>
  );
}
export default LoginPage;
