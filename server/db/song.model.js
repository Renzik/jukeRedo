const {Sequelize, Op} = require('sequelize');
const db = require('./db');

const Song = db.define('song', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  audioUrl: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  }
})

module.exports = Song;
