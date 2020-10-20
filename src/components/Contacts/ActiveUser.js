import React from "react";
import "./contact.css";

import ActiveUserList from "./ActiveUserList";
import MiniNotification from "../Notifications/MiniNotification";

const ActiveUser = ({ users }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "70%" }}>
        {users &&
          users.map((user) => {
            if (user.status === "active") {
              return <ActiveUserList user={user} key={user.id} />;
            } else {
              return null;
            }
          })}
      </div>

      <div className="mininotification-main-div">
        <MiniNotification />
      </div>
    </div>
  );
};

export default ActiveUser;
