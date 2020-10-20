import React from "react";
import "./contact.css";
import MiniNotification from "../Notifications/MiniNotification";
import InactiveUserList from "./InactiveUserList";

const InactiveUser = ({ users }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "70%" }}>
        {users &&
          users.map((user) => {
            if (user.status === "inactive") {
              return <InactiveUserList user={user} key={user.id} />;
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

export default InactiveUser;
