import React from "react";

const Album = props => {
  const albumSelected = props.albumSelected;
  const albumData = props.albumData;
  return (
    <div className="album">
      <a onClick={() => albumSelected(albumData.id)}>
        <img src={albumData.artworkUrl} />
        <p>{albumData.name}</p>
        <small>{albumData.artist.name}</small>
      </a>
    </div>
  );
};

export default Album;
