import React from "react";
import "./contact.css";
import { Divider, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import UserDetails from "./UserDetails";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InactiveUserList({ user }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
        }}
        onClick={handleClickOpen}
      >
        <div
          style={{
            display: "flex",
            marginLeft: "20px",
          }}
        >
          <img src={user.photoURL} alt="" className="user-list-image" />
          <div
            style={{
              marginLeft: "50px",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            <Typography className="user-list-name" variant="h5">
              {user.fullName}
            </Typography>
            <Typography className="user-list-email" variant="h6">
              {user.email}
            </Typography>
          </div>
        </div>

        <Divider
          style={{
            backgroundColor: "black",
            height: "2px",
          }}
        />
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          id="alert-dialog-slide-title"
          style={{ alignitems: "center" }}
        >
          {user.fullName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            style={{ display: "flex" }}
          >
            <UserDetails user={user} key={user.id} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
