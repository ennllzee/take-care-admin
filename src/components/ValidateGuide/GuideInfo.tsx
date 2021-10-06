import {
  Button,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Modal,
  Paper,
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
import {
  AttachFile,
  Book,
  Cancel,
  CheckCircle,
  Close,
  Language,
  Work,
} from "@material-ui/icons";
import { useState } from "react";
import Submit from "../Submit/Submit";
import Guide from "../../models/Guide";
import Image from "material-ui-image";
import moment from "moment";
import convertToThaiDate from "../../hooks/convertToThaiDate";
import WorkRow from "./WorkRow";
import LangRow from "./LangRow";
import ImageIcon from '@material-ui/icons/Image';

interface AddAppointmentProps {
  open: boolean;
  setOpen: any;
  setAlert: any;
  setDenyAlert: any;
  guide: Guide;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      height: "85vh",
      width: "80vw",
      overflow: "auto",
    },
    line: {
      padding: "2%",
    },
    divide: {
      padding: "2%",
      paddingTop: 0,
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#8196D4",
    color: "white",
    textAlign: "center",
    padding: "1%",
  },
}))(TableCell);

function AddAppointment({
  open,
  setOpen,
  setAlert,
  setDenyAlert,
  guide,
}: AddAppointmentProps) {
  const classes = useStyles();

  const [confirm, setConfirm] = useState<boolean>(false);
  const [confirmDeny, setConfirmDeny] = useState<boolean>(false);
  const [openId, setOpenId] = useState<boolean>(true);

  const submit = () => {
    //wait for validate
    setAlert(true);
    setOpen(false);
  };

  const deny = () => {
    //wait for deny validate
    setDenyAlert(true);
    setOpen(false);
  };

  return (
    <Modal open={open} className={classes.modal}>
      <Paper className={classes.paper}>
        <Typography align="right">
          <IconButton onClick={() => setOpen(false)} style={{ padding: "0" }}>
            <Close />
          </IconButton>
        </Typography>
        <Grid xs={12} md={12} lg={12} className={classes.line}>
          <Typography variant="h1">ข้อมูลไกด์</Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={12} lg={7} className={classes.divide}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid xs={12} md={12} lg={12} className={classes.divide}>
                <Grid container alignItems="flex-start" justify="center">
                  <Grid item xs={12} md={5} lg={4} style={{ padding: "1%" }}>
                    <Image
                      src={`data:${guide.Avatar.mimetype};base64,${guide.Avatar.data}`}
                      cover={true}
                    />
                  </Grid>
                  <Grid item xs={12} md={7} lg={8}>
                    <Grid
                      container
                      direction="row"
                      alignItems="flex-start"
                      justify="space-between"
                      style={{ padding: "1%" }}
                    >
                      <Grid item xs={3}>
                        <Typography variant="h6" align="right">
                          ชื่อ:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="h6">
                          {guide.FirstName} {guide?.LastName}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" align="right">
                          เพศ:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="h6">
                          {guide.Gender === "male"
                            ? "ชาย"
                            : guide.Gender === "female"
                            ? "หญิง"
                            : "อื่น ๆ"}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" align="right">
                          วันเกิด:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="h6">
                          {convertToThaiDate(new Date(guide.DOB))} (
                          {moment().diff(guide.DOB, "years", false)} ปี)
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" align="right">
                          ID card:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="h6">
                          {guide.IdCard[0]}-{guide.IdCard[1]}
                          {guide.IdCard[2]}
                          {guide.IdCard[3]}
                          {guide.IdCard[4]}-{guide.IdCard[5]}
                          {guide.IdCard[6]}
                          {guide.IdCard[7]}
                          {guide.IdCard[8]}
                          {guide.IdCard[9]}-{guide.IdCard[10]}
                          {guide.IdCard[11]}-{guide.IdCard[12]}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" align="right">
                          ที่อยู่:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="h6">{guide.Address}</Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Typography align="right">
                        <Button onClick={() => setOpenId(true)}>
                        <Grid
                    container
                    direction="row"
                    spacing={1}
                    justify="center"
                    alignItems="center"
                  >
                    <ImageIcon />
                    <Typography variant="h6">ตรวจสอบรูปคู่บัตรประชาชน</Typography>
                  </Grid>
                    </Button>
                  </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={12} md={12} lg={12} className={classes.divide}>
                <Grid
                  container
                  direction="row"
                  alignItems="flex-start"
                  justify="space-between"
                  style={{ padding: "1%" }}
                >
                  <Grid item xs={12} md={12} lg={4}>
                    <Typography variant="h3" align="left">
                      <Book /> การศึกษา
                    </Typography>
                  </Grid>
                  <Grid item xs={3} md={3} lg={3}>
                    <Typography variant="h6" align="right">
                      ระดับการศึกษา:
                    </Typography>
                  </Grid>
                  <Grid item xs={8} md={8} lg={4}>
                    <Typography variant="h6">
                      {guide.Education.Degree}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={4}></Grid>
                  <Grid item xs={3} md={3} lg={3}>
                    <Typography variant="h6" align="right">
                      สถาบันการศึกษา:
                    </Typography>
                  </Grid>
                  <Grid item xs={8} md={8} lg={4}>
                    <Typography variant="h6">
                      {guide.Education.Acadamy}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={3}></Grid>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography align="right">
                    <Button onClick={() => setOpenId(false)}>
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        justify="center"
                        alignItems="center"
                      >
                        <AttachFile />
                        <Typography variant="h6">
                          ตรวจสอบหลักฐานการสำเร็๗การศึกษา
                        </Typography>
                      </Grid>
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
              <Grid xs={12} md={12} lg={12} className={classes.divide}>
                <Grid
                  container
                  direction="row"
                  alignItems="flex-start"
                  justify="space-between"
                  style={{ padding: "1%" }}
                >
                  <Grid item xs={12} md={12} lg={5}>
                    <Typography variant="h3" align="left">
                      <Work /> ประวัติการทำงาน
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={7}>
                    <Typography variant="h6" align="center">
                      {guide.WorkExp.length === 0 && "ไม่มีประวัติการทำงาน"}
                    </Typography>
                  </Grid>
                  <Grid xs={12} md={12} lg={12}>
                    {guide.WorkExp.length !== 0 && (
                      <>
                        <TableContainer className={classes.table_contianer}>
                          <Table>
                            <colgroup>
                              <col style={{ width: "50%" }} />
                              <col style={{ width: "50%" }} />
                            </colgroup>
                            <TableHead>
                              <TableRow className={classes.thead}>
                                <StyledTableCell>หน่วยงาน</StyledTableCell>
                                <StyledTableCell>ตำแหน่งงาน</StyledTableCell>
                              </TableRow>
                            </TableHead>

                            <TableBody className={classes.tbody}>
                              {guide.WorkExp.map((w, k) => {
                                return (
                                  <WorkRow
                                    key={k}
                                    title={w.JobTitle}
                                    place={w.WorkPlace}
                                  />
                                );
                              })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </>
                    )}
                  </Grid>
                </Grid>
              </Grid>
              {guide.LangSkill.length === 0 && (
                <Grid xs={12} md={12} lg={12} className={classes.divide}>
                  <Grid
                    container
                    direction="row"
                    alignItems="flex-start"
                    justify="space-between"
                    style={{ padding: "1%" }}
                  >
                    <Grid item xs={12} md={12} lg={12}>
                      <Typography variant="h3" align="left">
                        <Language /> ทักษะด้านภาษา
                      </Typography>
                    </Grid>
                    <Grid xs={12} md={12} lg={12}>
                      {guide.LangSkill.length !== 0 && (
                        <>
                          <TableContainer className={classes.table_contianer}>
                            <Table>
                              <colgroup>
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "50%" }} />
                              </colgroup>
                              <TableHead>
                                <TableRow className={classes.thead}>
                                  <StyledTableCell>ภาษา</StyledTableCell>
                                  <StyledTableCell>
                                    ระดับความชำนาญ
                                  </StyledTableCell>
                                </TableRow>
                              </TableHead>

                              <TableBody className={classes.tbody}>
                                {guide.LangSkill.map((w, k) => {
                                  return (
                                    <LangRow
                                      key={k}
                                      lang={w.Language}
                                      level={w.Level}
                                    />
                                  );
                                })}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={5} className={classes.divide}>
            <Grid container direction="row" justify="center">
              <Grid item xs={12} md={12} lg={10}>
                <Image
                  src={`data:${
                    openId
                      ? guide.FaceWithIdCard.mimetype
                      : guide.Education.Certificate.mimetype
                  };base64,${
                    openId
                      ? guide.FaceWithIdCard.data
                      : guide.Education.Certificate.data
                  }`}
                  aspectRatio={3 / 4}
                  cover={true}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Typography variant="h6" align="center">
                  รูป:{" "}
                  {openId ? "รูปคู่บัตรประชาชน" : "หลักฐานการสำเร็จการศึกษา"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} md={12} lg={12}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={4}>
                <Button
                  type="button"
                  fullWidth={true}
                  // variant="contained"
                  style={{ padding: "5%" }}
                  onClick={() => setConfirmDeny(true)}
                >
                  <Grid
                    container
                    direction="row"
                    spacing={1}
                    justify="center"
                    alignItems="center"
                  >
                    <Cancel />
                    <Typography variant="h6">ปฏิเสธ</Typography>
                  </Grid>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  type="button"
                  fullWidth={true}
                  style={{ padding: "5%" }}
                  onClick={() => setConfirm(true)}
                >
                  <Grid
                    container
                    direction="row"
                    spacing={1}
                    justify="center"
                    alignItems="center"
                  >
                    <CheckCircle />
                    <Typography variant="h6"> อนุมัติ</Typography>
                  </Grid>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Submit
            submit={confirm}
            title="อนุมัติ"
            text="ยืนยันการอนุมัติไกด์คนนี้ใช่หรือไม่?"
            denyText="ยกเลิก"
            submitText="ยืนยัน"
            denyAction={() => setConfirm(false)}
            submitAction={submit}
          />
          <Submit
            submit={confirmDeny}
            title="ปฏิเสธ"
            text="ยืนยันการปฏิเสธไกด์คนนี้ใช่หรือไม่?"
            denyText="ยกเลิก"
            submitText="ยืนยัน"
            denyAction={() => setConfirmDeny(false)}
            submitAction={deny}
          />
        </Grid>
      </Paper>
    </Modal>
  );
}

export default AddAppointment;
