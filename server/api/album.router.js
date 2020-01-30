const router = require('express').Router();
const Album = require('../db/album.model');
const Artist = require('../db/artist.model');
const Song = require('../db/song.model');

router.get('/', async (req, res) => {
  const findAlbums = await Album.findAll({
    include: Artist
  })
  res.send(findAlbums);
})

router.get('/:albumId', async (req, res) => {
  const findById = await Album.findById(req.params.albumId, {
    include: [Song, Artist]
  });
  res.send(findById);
})




module.exports = router;
