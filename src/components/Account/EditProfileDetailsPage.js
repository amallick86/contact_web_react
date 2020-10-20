import React from "react";
import { connect } from "react-redux";
import "./account.css";
import { editprofiledetails } from "../../store/actions/editprofiledetailsActions";

import TextField from "@material-ui/core/TextField";
import { Card, CardContent, Divider, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

function EditProfileDetailsPage(props) {
  const { profile } = props;
  const [values, setValues] = React.useState({
    Permanentaddress: profile.Permanentaddress,
    Citizienshipno: profile.Citizienshipno,
    panno: profile.panno,
    passportno: profile.passportno,
  });
  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.valueAsNumber || event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.editprofiledetails(values);
    window.location.reload();
  };
  return (
    <div className="card_div">
      <Card className="card">
        <CardContent>
          <span className="card_title">Edit Personal Details</span>
          <Divider style={{ marginTop: "10px" }} />
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="input_row_div_title">
              <div className="input_div_title ">
                <Typography variant="h6">Permanent Address</Typography>
              </div>
              <div className="input_div_title ">
                <Typography variant="h6">Citizienship Number</Typography>
              </div>
            </div>
            <div className="input_row_div">
              <div className="input_div">
                <TextField
                  id="Permanentaddress"
                  variant="outlined"
                  className="input_double"
                  value={values.Permanentaddress}
                  onChange={handleChange("Permanentaddress")}
                />
              </div>
              <div className="input_div">
                <TextField
                  id="Citizienshipno"
                  type="number"
                  variant="outlined"
                  className="input_double"
                  value={values.Citizienshipno}
                  onChange={handleChange("Citizienshipno")}
                />
              </div>
            </div>
            <div className="input_row_div_title">
              <div className="input_div_title ">
                <Typography variant="h6">PAN No</Typography>
              </div>
              <div className="input_div_title ">
                <Typography variant="h6">Passport No</Typography>
              </div>
            </div>
            <div className="input_row_div">
              <div className="input_div">
                <TextField
                  id="PAN No"
                  variant="outlined"
                  type="number"
                  className="input_double"
                  value={values.panno}
                  onChange={handleChange("panno")}
                />
              </div>
              <div className="input_div">
                <TextField
                  id="Passport No"
                  type="number"
                  variant="outlined"
                  className="input_double"
                  value={values.passportno}
                  onChange={handleChange("passportno")}
                />
              </div>
            </div>
            <Divider style={{ marginTop: "10px" }} />
            <div className="button_div">
              <Button
                variant="contained"
                type="Submit"
                color="primary"
                startIcon={<SaveIcon />}
              >
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editprofiledetails: (details) => dispatch(editprofiledetails(details)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileDetailsPage);
