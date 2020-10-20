import React from "react";
import "./account.css";
import {
  Card,
  CardContent,
  Divider,
  Typography,
  TextField,
} from "@material-ui/core";
export default function FamilyCardView({ profile }) {
  return (
    <div className="card_div">
      <Card className="card">
        <CardContent>
          <span className="card_title"> Family Information</span>
          <Divider style={{ marginTop: "10px" }} />

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
                value={profile.dadname}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div className="input_div">
              <TextField
                id="daddob"
                variant="outlined"
                className="input_double"
                value={profile.daddob}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div className="input_div">
              <TextField
                id="dadno"
                variant="outlined"
                className="input_double"
                value={profile.dadno}
                type="number"
                InputProps={{
                  readOnly: true,
                }}
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
                value={profile.momname}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div className="input_div">
              <TextField
                id="momdob"
                variant="outlined"
                className="input_double"
                value={profile.momdob}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div className="input_div">
              <TextField
                id="momno"
                variant="outlined"
                className="input_double"
                value={profile.momno}
                type="number"
                InputProps={{
                  readOnly: true,
                }}
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
                value={profile.spousename}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div className="input_div">
              <TextField
                id="spousedob"
                variant="outlined"
                className="input_double"
                value={profile.spousedob}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div className="input_div">
              <TextField
                id="spouseno"
                variant="outlined"
                className="input_double"
                value={profile.spouseno}
                type="number"
                InputProps={{
                  readOnly: true,
                }}
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
                value={profile.childname}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div className="input_div">
              <TextField
                id="childdob"
                variant="outlined"
                className="input_double"
                value={profile.childdob}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div className="input_div">
              <TextField
                id="childno"
                variant="outlined"
                className="input_double"
                value={profile.childno}
                type="number"
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
