import React from "react";
import { Typography } from "@material-ui/core";
import PhotoLibraryRoundedIcon from "@material-ui/icons/PhotoLibraryRounded";
import { Link } from "react-router-dom";
export default function GalleryAlbumList({ albums }) {
  return (
    <Link
      to={"/view/" + albums.id}
      key={albums.id}
      style={{ textDecoration: "none" }}
    >
      <div className="particular_album-div">
        <div className="album-box-border">
          <PhotoLibraryRoundedIcon className="ablumlist_icon" />
        </div>
        <Typography variant="h6">{albums.albumName}</Typography>
      </div>
    </Link>
  );
}
