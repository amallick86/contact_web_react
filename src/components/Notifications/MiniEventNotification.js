import React from "react";
import moment from "moment";
import { Card, Typography } from "@material-ui/core";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import { Link } from "react-router-dom";
export default function MiniEventNotification({ programs }) {
 let comtoday = moment(new Date()).format();  
  let comevent = moment(programs.eventDate.toDate()).format();  
  
  if (comevent >= comtoday) {
    return (
      
      <Card
        className="mini-birthday-notification-card"
      >
        <Link to="/notifications" >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            marginTop: "10px",
            marginBottom: "10px",
            color: "red",
          }}
        >
          <div className="mini-notification-icon-div">
            <EventAvailableIcon
              style={{
                display: "flex",
                marginLeft: "20px",
                marginRight: "20px",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </div>
          <Typography variant="h7">{programs.eventTitle}</Typography>
          </div>
          </Link>
        </Card>
        
    );
  } else {
    return null;
  }
}
