import React from "react";
import { Card, Typography } from "@material-ui/core";
import CakeRoundedIcon from "@material-ui/icons/CakeRounded";
import { Link } from "react-router-dom";

export default function MiniBirthdayNotification({ user }) {
  var today = new Date();
  //var yearc = today.getFullYear();
  var monthc = today.getMonth() + 1;
  var dayc = today.getDate();
  var monthd = user.DOB_M;
  var dayd = user.DOB_D;
  if (monthd === monthc && dayd === dayc) {
    return (
      
      <Card
        className="mini-birthday-notification-card"
      >
        <Link to="/notifications">
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
            <CakeRoundedIcon
              style={{
                display: "flex",
                marginLeft: "20px",
                marginRight: "20px",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </div>
          <img
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              marginRight: "20px",
            }}
            src={user.photoURL}
            alt=""
          />
          <Typography variant="h7">{user.fullName}</Typography>
        </div>
        </Link>
        </Card>
        
    );
  } else {
    return null;
  }
}
