import React from "react";
import "./account.css";
import { connect } from "react-redux";
import { profileup } from "../../store/actions/editAction";
import TextField from "@material-ui/core/TextField";
import {
  Card,
  CardContent,
  Divider,
  Select,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import EditProfilePic from "./EditProfilePic";

function EditProfilePage(props) {
  const thisYear = new Date().getFullYear();
  const options = [];

  for (let i = 0; i <= 60; i++) {
    const year = thisYear - i;
    options.push(<option value={year}>{year}</option>);
  }

  const monthoptions = [];
  for (let i = 11; i >= 0; i--) {
    const month = 12 - i;
    monthoptions.push(<option value={month}>{month}</option>);
  }
  const dayoptions = [];
  for (let i = 30; i >= 0; i--) {
    const day = 31 - i;
    dayoptions.push(<option value={day}>{day}</option>);
  }
  const { profile } = props;
  const [values, setValues] = React.useState({
    WorkPhone: profile.WorkPhone,
    PersonalPhone: profile.PersonalPhone,
    personalemail: profile.personalemail,
    DOB_Y: profile.DOB_Y,
    DOB_M: profile.DOB_M,
    DOB_D: profile.DOB_D,
    address: profile.address,
    Post: profile.Post,
  });
  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.valueAsNumber || event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.profileup(values);
    window.location.reload();
  };
  return (
    <div className="card_div">
      <Card className="card_profile">
        <CardContent>
          <EditProfilePic />
        </CardContent>
      </Card>

      <Card className="card">
        <CardContent>
          <span className="card_title">Edit Profile</span>
          <Divider style={{ marginTop: "10px" }} />
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="input_row_div_title">
              <div className="input_div_title ">
                <Typography variant="h6">Name</Typography>
              </div>
              <div className="input_div_title ">
                <Typography variant="h6">Post</Typography>
              </div>
            </div>
            <div className="input_row_div">
              <div className="input_div">
                <TextField
                  id="name"
                  variant="outlined"
                  className="input_double"
                  value={profile.fullName}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
              <div className="input_div">
                <TextField
                  id="post"
                  variant="outlined"
                  className="input_double"
                  value={values.Post}
                  onChange={handleChange("Post")}
                />
              </div>
            </div>
            <div className="input_row_div_title">
              <div className="input_div_title ">
                <Typography variant="h6">Work Phone</Typography>
              </div>
              <div className="input_div_title ">
                <Typography variant="h6">Work Email</Typography>
              </div>
            </div>
            <div className="input_row_div">
              <div className="input_div">
                <TextField
                  id="WorkPhone"
                  variant="outlined"
                  type="number"
                  className="input_double"
                  value={values.WorkPhone}
                  onChange={handleChange("WorkPhone")}
                />
              </div>
              <div className="input_div">
                <TextField
                  id="WorkEmail"
                  variant="outlined"
                  className="input_double"
                  value={profile.email}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </div>
            <div className="input_row_div_title">
              <div className="input_div_title ">
                <Typography variant="h6">Personal Phone</Typography>
              </div>
              <div className="input_div_title ">
                <Typography variant="h6">Personal Email</Typography>
              </div>
            </div>
            <div className="input_row_div">
              <div className="input_div">
                <TextField
                  id="PersonalPhone"
                  type="number"
                  variant="outlined"
                  className="input_double"
                  value={values.PersonalPhone}
                  onChange={handleChange("PersonalPhone")}
                />
              </div>
              <div className="input_div">
                <TextField
                  id="PersonalEmail"
                  variant="outlined"
                  className="input_double"
                  value={values.personalemail}
                  onChange={handleChange("personalemail")}
                />
              </div>
            </div>
            <div className="input_row_div_title">
              <div className="input_div_title ">
                <Typography variant="h6">Temporary Address</Typography>
              </div>
              <div className="input_div_title ">
                <Typography variant="h6">Date Of Birth Year</Typography>
              </div>
            </div>
            <div className="input_row_div">
              <div className="input_div">
                <TextField
                  id="Address"
                  variant="outlined"
                  className="input_double"
                  onChange={handleChange("address")}
                  value={values.address}
                />
              </div>
              <div className="input_div">
                <Select
                  labelId="demo-simple-select-label"
                  variant="outlined"
                  type="number"
                  id="demo-simple-select"
                  className="input_double"
                  value={values.DOB_Y}
                  onChange={handleChange("DOB_Y")}
                >
                  {options}
                </Select>
              </div>
            </div>
            <div className="input_row_div_title">
              <div className="input_div_title ">
                <Typography variant="h6">Date Of Birth Month</Typography>
              </div>
              <div className="input_div_title ">
                <Typography variant="h6">Date Of Birth Day</Typography>
              </div>
            </div>
            <div className="input_row_div">
              <div className="input_div">
                <Select
                  labelId="demo-simple-select-label"
                  variant="outlined"
                  type="number"
                  className="input_double"
                  id="demo-simple-select"
                  value={values.DOB_M}
                  onChange={handleChange("DOB_M")}
                >
                  {monthoptions}
                </Select>
              </div>
              <div className="input_div">
                <Select
                  labelId="demo-simple-select-label"
                  type="number"
                  variant="outlined"
                  className="input_double"
                  id="demo-simple-select"
                  value={values.DOB_D}
                  onChange={handleChange("DOB_D")}
                >
                  {dayoptions}
                </Select>
              </div>
            </div>
            <Divider style={{ marginTop: "10px" }} />
            <div className="button_div">
              <Button
                type="Submit"
                variant="contained"
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
    profileup: (proup) => dispatch(profileup(proup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);
