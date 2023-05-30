const Sequelize = require('sequelize');
const sequelize = require('../config/database')

const Note = sequelize.define('Note', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

module.exports = Note ;