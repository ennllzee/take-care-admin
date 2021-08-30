import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import ReportPage from "../Report/ReportPage";
import HospitalInformationPage from "../HospitalInformation/HospitalInformationPage";
import CustomerDataPage from "../CustomerData/CustomerDataPage";
import GuideDataPage from "../GuideData/GuideDataPage";
import GuideVerifyPage from "../GuideVerify/GuideVerify";
import DashboardPage from "../Dashboard/DashboardPage";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      minHeight: "100vh"
    }
  })
)

function Home() {

  const classes = useStyles()

  return (
    <div className={classes.root}>
        <Switch>
          <Route exact path={`/dashboard`} component={DashboardPage} />
          <Route path={`/guide&verify`} component={GuideVerifyPage} />
          <Route path={`/guide&data`} component={GuideDataPage} />
          <Route path={`/customer&data`} component={CustomerDataPage} />
          <Route path={`/hospital&information`} component={HospitalInformationPage} />
          <Route path={`/report`} component={ReportPage} />
        </Switch>
    </div>
  );
}

export default Home;
