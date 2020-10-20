import React from "react";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
export default function EducationCardView({ educations }) {
  return (
    <div>
      <div className="form-row">
        <div className="input_row_div_title">
          <div className="input_div_title ">
            <Typography variant="h6">Degree</Typography>
          </div>
          <div className="input_div_title ">
            <Typography variant="h6"> instute</Typography>
          </div>
          <div className="input_div_title ">
            <Typography variant="h6">Year</Typography>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="input_row_div">
            <div className="input_div">
              <TextField
                id="Degree"
                variant="outlined"
                className="input_double"
                name="Degree"
                value={educations.Degree}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div className="input_div">
              <TextField
                id="instute"
                variant="outlined"
                className="input_double"
                name="instute"
                value={educations.instute}
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <div className="input_div">
              <TextField
                id="year"
                variant="outlined"
                className="input_double"
                name="year"
                value={educations.year}
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
