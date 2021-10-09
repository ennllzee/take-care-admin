import { useQuery } from "@apollo/client";
import {
  Container,
  createStyles,
  Grid,
  LinearProgress,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import { useEffect, useState } from "react";
import { history } from "../../helper/history";
import useAdminApi from "../../hooks/adminhooks";
import Guide from "../../models/Guide";
import Alert from "../Alert/Alert";
import GuideRow from "./GuideRow";

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
    table_contianer: {
      width: "100%",
      paddingBottom: "1%",
    },
    thead: {
      background: "#25272E",
    },
    tbody: {
      background: "white",
    },
  })
);

const StyledTableCell = withStyles((theme: Theme) => ({
  head: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
  },
}))(TableCell);

function ValidateGuidePage() {
  const classes = useStyles();
  const id = localStorage.getItem("_id");
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken === null && id === null) {
      history.push(`/`);
    }
  }, [accessToken, id]);

  const { GET_NONVALIDATED } = useAdminApi();

  const { loading, error, data } = useQuery(GET_NONVALIDATED, {
    pollInterval: 60000,
  });

  const [guides, setGuides] = useState<Guide[]>(
    data !== undefined ? data.getNonVerifyGuide : []
  );

  const [alert, setAlert] = useState<boolean>(false);
  const [denyAlert, setDenyAlert] = useState<boolean>(false);

  useEffect(() => {
    if (!loading && data) {
      setGuides(data.getNonVerifyGuide);
    }
    if (error) console.log(error.graphQLErrors);
  }, [loading, data, error]);

  return (
    <div className={classes.root}>
      <Grid className={classes.title}>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Edit fontSize="large" />
          </Grid>
          <Grid item xs zeroMinWidth style={{ margin: "auto" }}>
            <Typography variant="h3" noWrap>
              รายชื่อไกด์รอการอนุมัติ
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <TableContainer className={classes.table_contianer}>
            <Table>
              <colgroup>
                <col style={{ width: "40%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "30%" }} />
                <col style={{ width: "20%" }} />
              </colgroup>
              <TableHead>
                <TableRow className={classes.thead}>
                  <StyledTableCell>ชื่อ-นามสกุล</StyledTableCell>
                  <StyledTableCell>เพศ</StyledTableCell>
                  <StyledTableCell>วันที่ลงทะเบียน</StyledTableCell>
                  <StyledTableCell>ข้อมูล</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody className={classes.tbody}>
                {guides
                  .slice()
                  .sort((a, b) => {
                    return (
                      new Date(a.CreatedAt).getTime() -
                      new Date(b.CreatedAt).getTime()
                    );
                  })
                  .map((g, k) => {
                    return (
                      <GuideRow
                        key={k}
                        guide={g}
                        setAlert={setAlert}
                        setDenyAlert={setDenyAlert}
                      />
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          {loading && (
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Grid item xs={12}>
                <LinearProgress />
              </Grid>
            </Grid>
          )}
          <Alert
            closeAlert={() => setAlert(false)}
            alert={alert}
            title="สำเร็จ"
            text="อนุมัติไกด์สำเร็จ"
            buttonText="ปิด"
          />
          <Alert
            closeAlert={() => setDenyAlert(false)}
            alert={denyAlert}
            title="สำเร็จ"
            text="ปฏิเสธไกด์สำเร็จ"
            buttonText="ปิด"
          />
        </Grid>
      </Container>
    </div>
  );
}
export default ValidateGuidePage;
