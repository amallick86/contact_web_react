import React from "react";
import moment from "moment";
import { Card } from "@material-ui/core";
import "./notifications.css";
function EventNotification({ programs }) {
  let comtoday = moment(new Date()).format();  
  let comevent = moment(programs.eventDate.toDate()).format();  
  
  if (comevent >= comtoday) {
    return (
      <Card className="notification-card-div-birthday-list">
        <div className="notification-card-event-list-div">
          <span className="notification-card-event-title">
            {programs.eventTitle}
          </span>
          <span className="notification-card-event-title-details">
            {moment(programs.eventDate.toDate()).format("LL")}
          </span>
          <span className="notification-card-event-details">
            {programs.eventDetails}
          </span>
        </div>
      </Card>
    );
  } else {
    return null;
  }
}

export default EventNotification;
