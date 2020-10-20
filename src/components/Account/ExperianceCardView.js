import React from "react";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
export default function ExperianceCardView({ experiances }) {
  return (
    <div>
      <div className="form-row">
        <div className="input_row_div_title">
          <div className="input_div_title ">
            <Typography variant="h6">Company</Typography>
          </div>
          <div className="input_div_title ">
            <Typography variant="h6"> Start Date</Typography>
          </div>
          <div className="input_div_title ">
            <Typography variant="h6">End Date</Typography>
          </div>
        </div>
        <div className="input_row_div">
          <div className="input_div">
            <TextField
              id="company"
              variant="outlined"
              className="input_double"
              name="company"
              value={experiances.company}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className="input_div">
            <TextField
              id="startyear"
              variant="outlined"
              className="input_double"
              name="startyear"
              value={experiances.startyear}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className="input_div">
            <TextField
              id="endyear"
              variant="outlined"
              className="input_double"
              name="endyear"
              value={experiances.endyear}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
        </div>
        <div className="input_row_div_title">
          <div className="input_div_title ">
            <Typography variant="h6">Post</Typography>
          </div>
          <div className="input_div_title ">
            <Typography variant="h6"> Role</Typography>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="input_row_div">
            <div className="input_div">
              <TextField
                id="Post"
                variant="outlined"
                className="input_double"
                name="post"
                value={experiances.post}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div className="input_div">
              <TextField
                id="Role"
                variant="outlined"
                className="input_double"
                name="role"
                value={experiances.role}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
