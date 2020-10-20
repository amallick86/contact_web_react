import React from "react";
import "./account.css";
import { Divider, Typography, Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { editfamilydetails } from "../../store/actions/editfamilydetails.Actions";

import SaveIcon from "@material-ui/icons/Save";
function EditFamilyForm(props) {
  const { profile } = props;
  const [values, setValues] = React.useState({
    dadname: profile.dadname,
    daddob: profile.daddob,
    dadno: profile.dadno,
    momname: profile.momname,
    momdob: profile.momdob,
    momno: profile.momno,
    spousename: profile.spousename,
    spousedob: profile.spousedob,
    spouseno: profile.spouseno,
    childname: profile.childname,
    childdob: profile.childdob,
    childno: profile.childno,
  });
  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.valueAsNumber || event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.editfamilydetails(values);
    window.location.reload();
  };
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="input_row_div_title">
          <div className="input_div_title ">
            <Typography variant="h6">Dad Name</Typography>
          </div>
          <div className="input_div_title ">
            <Typography variant="h6"> DOB</Typography>
          </div>
          <div className="input_div_title ">
            <Typography variant="h6">Phone Number</Typography>
          </div>
        </div>
        <div className="input_row_div">
          <div className="input_div">
            <TextField
              id="dadname"
              variant="outlined"
              className="input_double"
              type="text"
              value={values.dadname}
              onChange={handleChange("dadname")}
            />
          </div>
          <div className="input_div">
            <TextField
              id="daddob"
              variant="outlined"
              className="input_double"
              type="text"
              label="YYYY/MM/DD"
              value={values.daddob}
              onChange={handleChange("daddob")}
            />
          </div>
          <div className="input_div">
            <TextField
              id="dadno"
              variant="outlined"
              className="input_double"
              value={values.dadno}
              onChange={handleChange("dadno")}
              type="number"
            />
          </div>
        </div>
        <Divider style={{ marginTop: "10px" }} />
        <div className="input_row_div_title">
          <div className="input_div_title ">
            <Typography variant="h6">Mom Name</Typography>
          </div>
          <div className="input_div_title ">
            <Typography variant="h6">DOB</Typography>
          </div>
          <div className="input_div_title ">
            <Typography variant="h6">Phone Number</Typography>
          </div>
        </div>
        <div className="input_row_div">
          <div className="input_div">
            <TextField
              id="momname"
              variant="outlined"
              className="input_double"
              type="text"
              value={values.momname}
              onChange={handleChange("momname")}
            />
          </div>
          <div className="input_div">
            <TextField
              id="momdob"
              variant="outlined"
              className="input_double"
              type="text"
              label="YYYY/MM/DD"
              value={values.momdob}
              onChange={handleChange("momdob")}
            />
          </div>
          <div className="input_div">
            <TextField
              id="momno"
              variant="outlined"
              className="input_double"
              value={values.momno}
              onChange={handleChange("momno")}
              type="number"
            />
          </div>
        </div>
        <Divider style={{ marginTop: "10px" }} />
        <div className="input_row_div_title">
          <div className="input_div_title ">
            <Typography variant="h6">Spouse Name</Typography>
          </div>
          <div className="input_div_title ">
            <Typography variant="h6">DOB</Typography>
          </div>
          <div className="input_div_title ">
            <Typography variant="h6">Phone Number</Typography>
          </div>
        </div>
        <div className="input_row_div">
          <div className="input_div">
            <TextField
              id="spousename"
              variant="outlined"
              className="input_double"
              type="text"
              value={values.spousename}
              onChange={handleChange("spousename")}
            />
          </div>
          <div className="input_div">
            <TextField
              id="spousedob"
              variant="outlined"
              className="input_double"
              type="text"
              label="YYYY/MM/DD"
              value={values.spousedob}
              onChange={handleChange("spousedob")}
            />
          </div>
          <div className="input_div">
            <TextField
              id="spouseno"
              variant="outlined"
              className="input_double"
              value={values.spouseno}
              onChange={handleChange("spouseno")}
              type="number"
            />
          </div>
        </div>
        <Divider style={{ marginTop: "10px" }} />
        <div className="input_row_div_title">
          <div className="input_div_title ">
            <Typography variant="h6">Child Name</Typography>
          </div>
          <div className="input_div_title ">
            <Typography variant="h6">DOB</Typography>
          </div>
          <div className="input_div_title ">
            <Typography variant="h6">Phone Number</Typography>
          </div>
        </div>
        <div className="input_row_div">
          <div className="input_div">
            <TextField
              id="childname"
              variant="outlined"
              className="input_double"
              type="text"
              value={values.childname}
              onChange={handleChange("childname")}
            />
          </div>
          <div className="input_div">
            <TextField
              id="childdob"
              variant="outlined"
              className="input_double"
              type="text"
              label="YYYY/MM/DD"
              value={values.childdob}
              onChange={handleChange("childdob")}
            />
          </div>
          <div className="input_div">
            <TextField
              id="childno"
              variant="outlined"
              className="input_double"
              value={values.childno}
              onChange={handleChange("childno")}
              type="number"
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
    editfamilydetails: (details) => dispatch(editfamilydetails(details)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditFamilyForm);
