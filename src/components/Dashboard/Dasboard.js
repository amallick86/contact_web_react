import React from "react";
import Contact from "../Contacts/Contact";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";

const Dashboard = (props) => {
  const { users, auth } = props;

  if (!auth.uid) return <Redirect to="/login" />;

  return (
    <div>
      <NavBar />
      <Contact users={users} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
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
)(Dashboard);
