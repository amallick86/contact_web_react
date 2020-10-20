import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addevents } from "../../store/actions/addveventsAction";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextField from "@material-ui/core/TextField";
import { Card, CardContent, Divider } from "@material-ui/core";
import "./events.css";

const AddEvent = (props) => {
  const [values, setValues] = React.useState({
    eventTitle: "",
    eventDetails: "",
    eventDate: new Date(),
  });
  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addevents(values);
    window.location.reload();
  };
  const { auth } = props;
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <div className="card_div">
      <Card className="card">
        <CardContent>
          <span className="card_title">Add An Event</span>
          <Divider style={{ marginTop: "10px" }} />
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="event_add_form">
              <div className="event_add_textfield_div">
                <TextField
                  id="Event Title"
                  label="Event Title"
                  type="text"
                  variant="outlined"
                  color="primary"
                  className="event_add_textfield"
                  value={values.eventTitle}
                  onChange={handleChange("eventTitle")}
                  Validate
                  required
                />
              </div>
              <div className="event_add_textfield_div">
                <TextField
                  id="date"
                  label="Date"
                  type="datetime-local"
                  variant="outlined"
                  value={values.eventDate}
                  onChange={handleChange("eventDate")}
                  className="event_add_textfield"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="event_add_textfield_div">
                <TextField
                  id="Event Details"
                  label="Event Details"
                  type="text"
                  variant="outlined"
                  value={values.eventDetails}
                  onChange={handleChange("eventDetails")}
                  multiline
                  rows={4}
                  className="event_add_textfield"
                />
              </div>
            </div>
            <Divider style={{ marginTop: "10px" }} />
            <div className="profile-edit-details-button">
              <Button
                type="Submit"
                variant="contained"
                color="primary"
                startIcon={<AddCircleOutlineIcon />}
              >
                Add An Event
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addevents: (events) => dispatch(addevents(events)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
