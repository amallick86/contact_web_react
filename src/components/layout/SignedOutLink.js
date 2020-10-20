import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import List from "@material-ui/core/List";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  grey: {
    color: grey[800],
  },
}));

const SignedOutLink = () => {
  const classes = useStyles();
  return (
    <List>
      <NavLink to="/login" className="link">
        <ListItem button>
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
          <ListItemText className={classes.grey}>Login</ListItemText>
        </ListItem>
      </NavLink>
    </List>
  );
};

export default SignedOutLink;
