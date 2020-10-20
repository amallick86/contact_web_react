import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import React from "react";
import SubNavbar from "../../Dashboard/SubNavbar";
import "../AddPhotos/AddPhotos.css";
import GalleryAlbumView from "./GalleryAlbumView";

function Gallery(props) {
  const { auth } = props;
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <div>
      <div className="content">
        <SubNavbar title={"GENERAL"} content={"GALLERY"} />
        <GalleryAlbumView />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Gallery);
