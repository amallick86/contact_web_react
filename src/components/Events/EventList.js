import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./events.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginLeft: 10,
  },
}));

function EventList({ programs }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="event-list-nonexpand"
        >
          <Typography className={classes.heading}>
            {programs.eventTitle}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {moment(programs.eventDate.toDate()).format("LL")}
          </Typography>
          <Typography className={classes.secondaryHeading}>12:00 AM</Typography>
        </AccordionSummary>
        <AccordionDetails className="event-list-expand">
          <Typography>{programs.eventDetails}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default EventList;
