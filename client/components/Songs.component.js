import React from "react";

const Songs = props => {
  const song = props.song;
  const album = props.album;
  return (
    <tr>
      <td>
        <i className="fa fa-play-circle" />
      </td>
      <td>{song.id}</td>
      <td>{song.name}</td>
      <td>{album.artist.name}</td>
      <td>{song.genre}</td>
    </tr>
  );
};

export default Songs;
