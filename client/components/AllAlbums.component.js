import React from "react";
import Album from "./Album.component";

const AllAlbums = props => {
  const albumSelected = props.albumSelected;
  const album = props.album;
  return (
    <div className="container">
      <div id="albums" className="row wrap">
        {/* Album component here */}
        {album.map(albumData => {
          return (
            <Album
              key={albumData.id}
              albumData={albumData}
              albumSelected={albumSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllAlbums;
