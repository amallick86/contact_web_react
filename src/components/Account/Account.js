import React from "react";
import "./account.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ProfilePage from "./ProfilePage";
import EditProfilePage from "./EditProfilePage";
import EditProfileDetailsPage from "./EditProfileDetailsPage";
import FamilyDetailsPage from "./FamilyDetailsPage";
import EducationDetailsPage from "./EducationDetailsPage";
import ExperianceDetailsPage from "./ExperianceDetailsPage";
import SubNavbar from "../Dashboard/SubNavbar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function AccountPage(props) {
  const { auth, profile } = props;
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  if (!auth.uid) return <Redirect to="/login" />;
  return (
    <div className="content">
      <SubNavbar title={"SETTINGS"} content={"ACCOUNT"} />
      <div className="page_tab_div">
        <Tabs value={value} onChange={handleChange} className="page_tabs" left>
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Edit Basic Information" {...a11yProps(1)} />
          <Tab label="Edit Details" {...a11yProps(2)} />
          <Tab label="Edit Family Details" {...a11yProps(3)} />
          <Tab label="Add Education Details" {...a11yProps(4)} />
          <Tab label="Add Experiance Details" {...a11yProps(5)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <ProfilePage profile={profile} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <EditProfilePage />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <EditProfileDetailsPage />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <FamilyDetailsPage />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <EducationDetailsPage />
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            <ExperianceDetailsPage />
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(AccountPage);
