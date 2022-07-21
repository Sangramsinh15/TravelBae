/**
 * Author: Trushita Maurya
 * Task: Alert box used in multiple pages.
 */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

/**
 * 
 * @param {*} props 
 * @returns alert box used in pages like destinations for a confirmation of a task.
 */
const AlertDialogComp = (props) => {
  const { open, handleClose, title, message, buttons, handleOk } = props;
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
          <Button onClick={handleClose}>{buttons[0]}</Button>
          <Button onClick={handleOk}>{buttons[1]}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialogComp;
