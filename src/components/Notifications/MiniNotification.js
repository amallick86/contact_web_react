import { Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import MiniBirthdayNotification from "./MiniBirthdayNotification";
import MiniEventNotification from "./MiniEventNotification";
import "./notifications.css";

function MiniNotification(props) {
  const { users, program } = props;
  return (
    <div className="mininotification-div">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" className="mini-notification-heading">
          NOTIFICATIONS
        </Typography>
        {users &&
          users.map((user) => {
            return <MiniBirthdayNotification user={user} key={user.id} />;
          })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {program &&
          program.map((programs) => {
            return <MiniEventNotification programs={programs} />;
          })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  //console.log(state);
  return {
    users: state.firestore.ordered.users,
    program: state.firestore.ordered.program,
  };
};
export default compose(
  connect(mapStateToProps),
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
)(MiniNotification);
