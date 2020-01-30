import React from "react";
import Sidebar from "./components/Sidebar.component";
import AllAlbums from "./components/AllAlbums.component";
import Player from "./components/Player.component";
import SingleAlbum from "./components/SingleAlbum.component";
import axios from "axios";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [
        {
          id: 1,
          name: "No Dummy",
          artworkUrl: "default-album.jpg",
          artistId: 1,
          artist: {
            id: 1,
            name: "The Crash Test Dummies"
          }
        }
      ],
      selectedAlbum: {}
    };

    this.albumSelected = this.albumSelected.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get("/api/albums");
    const albums = response.data;
    this.setState({ albums: albums });
  }

  async albumSelected(albumId) {
    const response = await axios.get(`/api/albums/${albumId}`);
    const album = response.data;
    this.setState({ selectedAlbum: album });
  }
  render() {
    return (
      <div id="main" className="row container">
        {/* The music starts here! */}
        <Sidebar />
        {this.state.selectedAlbum.id ? (
          <SingleAlbum selectedAlbum={this.state.selectedAlbum} />
        ) : (
          <AllAlbums
            album={this.state.albums}
            albumSelected={this.albumSelected}
          />
        )}
        <Player />
      </div>
    );
  }
}
