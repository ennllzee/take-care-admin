import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

interface AlertProps {
  closeAlert: any;
  alert: boolean;
  title: string;
  text: string;
  buttonText: string
}

function Alert({ closeAlert, alert, title, text, buttonText }: AlertProps) {
  return (
    <Dialog
    //   onClose={closeAlert}
      aria-describedby="alert-dialog-description"
      aria-labelledby="alert-dialog-title"
      open={alert}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={closeAlert} color="primary">
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Alert;