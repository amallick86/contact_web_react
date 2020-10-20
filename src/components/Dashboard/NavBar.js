import React from "react";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import "./navbar.css";
import { firestoreConnect } from "react-redux-firebase";

// material ui import
import {
  makeStyles,
  Badge,
  Typography,
  Toolbar,
  CssBaseline,
  AppBar,
  Drawer,
  Card,
} from "@material-ui/core";

// import icons
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import PhotoLibraryOutlinedIcon from "@material-ui/icons/PhotoLibraryOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },

  content: {},
}));

const NavBar = (props) => {
  const classes = useStyles();
  const { profile, auth } = props;
  let addImage;
  let AddEvent;
  let addContac;
  if (profile.accountType === "admin") {
    addImage = (
      <Link to="/addphoto" style={{ textDecoration: "none" }}>
        <div className="navbar-icon-subcontent">
          <div className="navbar-icon">
            <AddAPhotoOutlinedIcon />
          </div>
          <span className="navbar-sublist">AddImage</span>
        </div>
      </Link>
    );
    addContac = (
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <div className="navbar-icon-subcontent">
          <div className="navbar-icon">
            <GroupAddOutlinedIcon />
          </div>
          <span className="navbar-sublist">Add Contacts</span>
        </div>
      </Link>
    );
    AddEvent = (
      <Link to="/event" style={{ textDecoration: "none" }}>
        <div className="navbar-icon-subcontent">
          <div className="navbar-icon">
            <AccessTimeOutlinedIcon />
          </div>
          <span className="navbar-sublist">Events</span>
        </div>
      </Link>
    );
  } else {
    addImage = null;
    AddEvent = null;
    addContac = null;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar className="tool_bar">
          <Typography variant="h6" noWrap edge="end">
            Seva Development
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className="drawerContainer">
          <Card elevation={100} className="nav-bar">
            <div className="navbar-img-div">
              <img className="navbar-img" src={profile.photoURL} alt=""></img>
            </div>
            <div className="navbar-name">
              <span>{profile.fullName}</span>
            </div>
            <div className="navbar-content">
              <span className="navbar-contentlist">GENERAL</span>
              <div className="navbar-subcontect">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="navbar-icon-subcontent">
                    <div className="navbar-icon">
                      <GroupOutlinedIcon />
                    </div>
                    <span className="navbar-sublist">Contacts</span>
                  </div>
                </Link>
                {addImage}
                <Link to="/gallery" style={{ textDecoration: "none" }}>
                  <div className="navbar-icon-subcontent">
                    <div className="navbar-icon">
                      <PhotoLibraryOutlinedIcon />
                    </div>
                    <span className="navbar-sublist">Gallery</span>
                  </div>
                </Link>
                {addContac}
              </div>
            </div>
            <div className="navbar-content">
              <span className="navbar-contentlist">ACTIVITY</span>
              <div className="navbar-subcontect">
                <Link to="/notifications" style={{ textDecoration: "none" }}>
                  <div className="navbar-icon-subcontent">
                    <div className="navbar-icon">
                      <Badge color="secondary">
                        <NotificationsNoneOutlinedIcon />
                      </Badge>
                    </div>
                    <span className="navbar-sublist">Notifications</span>
                  </div>
                </Link>
                {AddEvent}
              </div>
            </div>
            <div className="navbar-content">
              <span className="navbar-contentlist">SETTINGS</span>
              <div className="navbar-subcontect">
                <Link to="/account" style={{ textDecoration: "none" }}>
                  <div className="navbar-icon-subcontent">
                    <div className="navbar-icon">
                      <PersonOutlineOutlinedIcon />
                    </div>
                    <span className="navbar-sublist">Account</span>
                  </div>
                </Link>
                <Link
                  to="/privacy"
                  style={{ textDecoration: "none" }}
                  key={auth.uid}
                >
                  <div className="navbar-icon-subcontent">
                    <div className="navbar-icon">
                      <LockOutlinedIcon />
                    </div>
                    <span className="navbar-sublist">Privacy</span>
                  </div>
                </Link>

                <div
                  className="navbar-icon-subcontent"
                  button
                  onClick={props.signOut}
                >
                  <div className="navbar-icon">
                    <ExitToAppOutlinedIcon />
                  </div>
                  <span className="navbar-sublist">Logout</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
      </main>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    users: state.firestore.ordered.users,
    program: state.firestore.ordered.program,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "program",
      orderBy: ["eventTitle", "asc"],
    },
    {
      collection: "users",
      orderBy: ["firstName", "asc"],
    },
  ])
)(NavBar);
