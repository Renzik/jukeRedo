import React from "react";
import Songs from "./Songs.component";

const SingleAlbum = props => {
  const selectedAlbum = props.selectedAlbum;
  const songs = selectedAlbum.songs;
  return (
    <div className="container">
      <div id="single-album" className="column">
        <div className="album">
          <a>
            <img src={selectedAlbum.artworkUrl} />
            <p>{selectedAlbum.name}</p>
            <small>{selectedAlbum.artist.name}</small>
          </a>
        </div>
        <table id="songs">
          <tbody>
            <tr className="gray">
              <td />
              <td>#</td>
              <td>Name</td>
              <td>Artist</td>
              <td>Genre</td>
            </tr>
            {/* Song component here */}
            {songs.map(song => {
              return <Songs key={song.id} song={song} album={selectedAlbum} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleAlbum;
