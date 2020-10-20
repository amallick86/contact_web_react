import React from "react";
import "./account.css";
import { Card, CardContent, Divider } from "@material-ui/core";
import EditFamilyForm from "./EditFamilyForm";

function FamilyDetailsPage() {
  return (
    <div className="card_div">
      <Card className="card">
        <CardContent>
          <span className="card_title">Edit Family Information</span>
          <Divider style={{ marginTop: "10px" }} />
          <EditFamilyForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default FamilyDetailsPage;
