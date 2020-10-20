import React from "react";
import "./contact.css";
import ActiveUser from "./ActiveUser";
import InactiveUser from "./InactiveUser";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SubNavbar from "../Dashboard/SubNavbar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    display: "flex",
    height: "100%",
  },
  tabs: {
    borderRight: `2px solid ${theme.palette.divider}`,
    borderRightColor: "white",
    position: "fixed",
  },
}));

const Contact = (props) => {
  const { users } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="content">
      <SubNavbar title={"GENERAL"} content={"CONTACTS"} />
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab className="page_tabs" label="Active" {...a11yProps(0)} />
          <Tab className="page_tabs" label="Inactive" {...a11yProps(1)} />
        </Tabs>
        <TabPanel elevation={20} value={value} index={0} className="user_panel">
          <ActiveUser users={users} />
        </TabPanel>
        <TabPanel elevation={20} value={value} index={1} className="user_panel">
          <InactiveUser users={users} />
        </TabPanel>
      </div>
    </div>
  );
};

export default Contact;
