const db = require('./db')
const Album = require('./album.model');
const Artist = require('./artist.model');
const Song = require('./song.model');
// const Album = require('./album.model');

// require each of your models here...

// ...and give them some nice associations here!

// hasOne gives the foreign key to the target(parameter, right) model.

// belongsTo give the foreign key to the source('this', left) model.

// album has many songs, one artist.
// hasMany is like hasOne gives the foreign key to the target.
// console.log(Album, Song)
Album.hasMany(Song);
//giving artistId to the album.
Album.belongsTo(Artist);


// song has one album, one artist.
Song.belongsTo(Artist);
Song.belongsTo(Album);

// artist has many album and many songs.
Artist.hasMany(Song);
Artist.hasMany(Album);


module.exports = {
  db,
  Artist,
  Album,
  Song
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
}
