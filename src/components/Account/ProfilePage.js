import React from "react";

import "./account.css";

import TextField from "@material-ui/core/TextField";
import { Card, CardContent, Divider, Typography } from "@material-ui/core";
import FamilyCardView from "./FamilyCardView";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import EducationCardView from "./EducationCardView";
import ExperianceCardView from "./ExperianceCardView";

function ProfilePage(props) {
  const { auth, profile, experiance, education } = props;

  let dob = (
    <div style={{ marginLeft: "10px" }}>
      {profile.DOB_D} / {profile.DOB_M} / {profile.DOB_Y}
    </div>
  );
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <div className="main-card-div">
      <div className="card_div">
        <Card className="card_profile">
          <CardContent>
            <div className="card_image_div">
              <img className="card_image" src={profile.photoURL} alt="" />
              <span className="card_name">{profile.fullName}</span>
              <span className="card_post">{profile.Post}</span>
            </div>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <span className="card_title">Profile</span>
            <Divider style={{ marginTop: "10px" }} />
            <form autoComplete="off">
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
                    value={profile.Post}
                    InputProps={{
                      readOnly: true,
                    }}
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
                    className="input_double"
                    value={profile.WorkPhone}
                    InputProps={{
                      readOnly: true,
                    }}
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
                    variant="outlined"
                    className="input_double"
                    value={profile.PersonalPhone}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className="input_div">
                  <TextField
                    id="PersonalEmail"
                    variant="outlined"
                    className="input_double"
                    value={profile.personalemail}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </div>
              <div className="input_row_div_title">
                <div className="input_div_title ">
                  <Typography variant="h6">Permanent Address</Typography>
                </div>
                <div className="input_div_title ">
                  <Typography variant="h6">Temporary Address</Typography>
                </div>
              </div>
              <div className="input_row_div">
                <div className="input_div">
                  <TextField
                    id="Permanent Address"
                    variant="outlined"
                    className="input_double"
                    value={profile.Permanentaddress}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className="input_div">
                  <TextField
                    id="Temporary Address"
                    variant="outlined"
                    className="input_double"
                    value={profile.address}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </div>
              <div className="input_row_div_title">
                <div className="input_div_title ">
                  <Typography variant="h6">Citizenship Number</Typography>
                </div>
                <div className="input_div_title ">
                  <Typography variant="h6">PAN No</Typography>
                </div>
              </div>
              <div className="input_row_div">
                <div className="input_div">
                  <TextField
                    id="Citizenship Number"
                    variant="outlined"
                    className="input_double"
                    value={profile.Citizienshipno}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className="input_div">
                  <TextField
                    id="PAN No"
                    variant="outlined"
                    className="input_double"
                    value={profile.panno}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </div>
              <div className="input_row_div_title">
                <div className="input_div_title ">
                  <Typography variant="h6">Date Of Birth</Typography>
                </div>
                <div className="input_div_title ">
                  <Typography variant="h6">Passport Number</Typography>
                </div>
              </div>
              <div className="input_row_div">
                <div className="input_div">
                  <div className="birthday_div">{dob}</div>
                </div>
                <div className="input_div">
                  <TextField
                    id="Passport No"
                    variant="outlined"
                    className="input_double"
                    value={profile.passportno}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div style={{ marginTop: "30px" }}>
        <FamilyCardView profile={profile} />
      </div>
      <div style={{ marginTop: "30px" }}>
        <div className="card_div">
          <Card className="card">
            <CardContent>
              <span className="card_title">Add Education Information</span>
              <Divider style={{ marginTop: "10px" }} />
              {education &&
                education.map((educations) => {
                  if (educations.userid === auth.uid) {
                    return (
                      <EducationCardView
                        educations={educations}
                        key={educations.id}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
            </CardContent>
          </Card>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <div className="card_div">
          <Card className="card">
            <CardContent>
              <span className="card_title">Add Education Information</span>
              <Divider style={{ marginTop: "10px" }} />
              {experiance &&
                experiance.map((experiances) => {
                  if (experiances.userid === auth.uid) {
                    return (
                      <ExperianceCardView
                        experiances={experiances}
                        key={experiances.id}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    education: state.firestore.ordered.education,
    experiance: state.firestore.ordered.experiance,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "education",
    },
    {
      collection: "experiance",
    },
  ])
)(ProfilePage);
