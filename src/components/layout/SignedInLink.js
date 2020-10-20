import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LockIcon from "@material-ui/icons/Lock";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import { grey } from "@material-ui/core/colors";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
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

const SignedInLink = (props) => {
  const classes = useStyles();
  const { profile, auth } = props;
  if (profile.accountType === "admin") {
    return (
      <List>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText className={classes.grey}>
            {profile.fullName}
          </ListItemText>
        </ListItem>

        <Divider />

        <NavLink to="/signup" className="link">
          <ListItem button>
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText className={classes.grey}>
              Create an Account
            </ListItemText>
          </ListItem>
        </NavLink>

        <Divider />

        <NavLink to="/" className="link">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className={classes.grey}>Home</ListItemText>
          </ListItem>
        </NavLink>

        <NavLink to="/inactiveuser" className="link">
          <ListItem button>
            <ListItemIcon>
              <PeopleAltRoundedIcon />
            </ListItemIcon>
            <ListItemText className={classes.grey}>InActive User</ListItemText>
          </ListItem>
        </NavLink>

        <NavLink to="/gallery" className="link">
          <ListItem button>
            <ListItemIcon>
              <PhotoLibraryIcon />
            </ListItemIcon>
            <ListItemText className={classes.grey}>Gallery</ListItemText>
          </ListItem>
        </NavLink>

        <NavLink to="/addevent" className="link">
          <ListItem button>
            <ListItemIcon>
              <EventAvailableOutlinedIcon />
            </ListItemIcon>
            <ListItemText className={classes.grey}>Add Event</ListItemText>
          </ListItem>
        </NavLink>

        <NavLink to="/uprofile" className="link">
          <ListItem button>
            <ListItemIcon>
              <Avatar alt="" src={profile.photoURL} className={classes.small} />
            </ListItemIcon>
            <ListItemText className={classes.grey}>Profile</ListItemText>
          </ListItem>
        </NavLink>

        <Divider />
        <NavLink to="/privacy" className="link" key={auth.uid}>
          <ListItem button>
            <ListItemIcon>
              <SettingsRoundedIcon />
            </ListItemIcon>
            <ListItemText className={classes.grey}>Setting</ListItemText>
          </ListItem>
        </NavLink>

        <ListItem button onClick={props.signOut}>
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <ListItemText className={classes.grey}>Logout</ListItemText>
        </ListItem>
      </List>
    );
  } else {
    return (
      <List>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText className={classes.grey}>
            {profile.fullName}
          </ListItemText>
        </ListItem>

        <Divider />

        <NavLink to="/" className="link">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className={classes.grey}>Home</ListItemText>
          </ListItem>
        </NavLink>

        <NavLink to="/inactiveuser" className="link">
          <ListItem button>
            <ListItemIcon>
              <PeopleAltRoundedIcon />
            </ListItemIcon>
            <ListItemText className={classes.grey}>InActive User</ListItemText>
          </ListItem>
        </NavLink>

        <NavLink to="/gallery" className="link">
          <ListItem button>
            <ListItemIcon>
              <PhotoLibraryIcon />
            </ListItemIcon>
            <ListItemText className={classes.grey}>Gallery</ListItemText>
          </ListItem>
        </NavLink>

        <NavLink to="/uprofile" className="link">
          <ListItem button>
            <ListItemIcon>
              <Avatar alt="" src={profile.photoURL} className={classes.small} />
            </ListItemIcon>
            <ListItemText className={classes.grey}>Profile</ListItemText>
          </ListItem>
        </NavLink>
        <Divider />
        <NavLink to="/privacy" className="link" key={auth.uid}>
          <ListItem button>
            <ListItemIcon>
              <SettingsRoundedIcon />
            </ListItemIcon>
            <ListItemText className={classes.grey}>Setting</ListItemText>
          </ListItem>
        </NavLink>

        <ListItem button onClick={props.signOut}>
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <ListItemText className={classes.grey}>Logout</ListItemText>
        </ListItem>
      </List>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLink);
