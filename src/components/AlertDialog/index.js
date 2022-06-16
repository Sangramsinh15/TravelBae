import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// By default the button labels are - cancel and ok
const AlertDialogComp = (props) => {
  const { open, handleClose, title, message, buttons } = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {buttons.map((buttonLabel) => (
            <Button onClick={handleClose}>{buttonLabel}</Button>
          ))}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialogComp;
