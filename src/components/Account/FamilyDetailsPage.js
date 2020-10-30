import React from "react";
import "./account.css";
import { connect } from "react-redux";
import { Card, CardContent, Divider, Grid } from "@material-ui/core";
import EditFamilyForm from "./EditFamilyForm";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../Dashboard/NavBar";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
function FamilyDetailsPage(props) {
  const { auth } = props;
  const classes = useStyles();

  if (!auth.uid) return <Redirect to="/login" />;
  return (
    <div className={classes.root}>
      <NavBar />
      <div className="overlay" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <div className="card_div">
              <Card className="card">
                <CardContent>
                  <span className="card_title">Edit Family Information</span>
                  <Divider style={{ marginTop: "10px" }} />
                  <EditFamilyForm />
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(FamilyDetailsPage);
