import React from "react";
import "./privacy.css";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import DeleteAccount from "./DeleteAccount";
import ChangePassword from "./ChangePassword";
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

const Privacy = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="content">
      <SubNavbar title={"SETTINGS"} content={"PRIVACY"} />
      <div className="page_tab_div">
        <Tabs value={value} onChange={handleChange} className="page_tabs" left>
          <Tab label="Change Password" {...a11yProps(0)} />
          <Tab label="Delete An Account" {...a11yProps(1)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <ChangePassword />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <DeleteAccount />
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
};

export default Privacy;
