import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { CircularProgress, Divider } from "@material-ui/core";
import SubNavbar from "../../Dashboard/SubNavbar";
import NavBar from "../../Dashboard/NavBar";

import ImageView from "./ImageView";
import UploadForm from "../UploadForm";
const AlbumPage = (props) => {
  const { albums, auth } = props;

  if (!auth.uid) return <Redirect to="/login" />;
  if (albums) {
    return (
      <div>
        <NavBar />
        <div className="content">
          <div className="sub_navbar_div">
            <div className="sub_navbar_list">
              <Link to="/addphoto" style={{ textDecoration: "none" }}>
                <span className="sub_navbar_list_title ">ALBUM</span>
              </Link>
              <span className="sub_navbar_list_title_arrow"> {">"}</span>
              <span className="sub_navbar_list_subtitle">
                {albums.albumName}
              </span>
            </div>
          </div>
          <Divider className="sub_navbar_divider" />
          <div className="albumpage-main-div">
            <UploadForm albums={albums} />
            <ImageView albums={albums} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <div className="content">
          <SubNavbar title={"ALBUM"} content={"No Result"} />
          <CircularProgress />
        </div>
      </div>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const album = state.firestore.data.album;
  const albums = album ? album[id] : null;
  return {
    albums: albums,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "album",
    },
  ])
)(AlbumPage);
