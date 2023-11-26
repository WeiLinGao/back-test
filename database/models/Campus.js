/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },
  

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true, 
    defaultValue: 'https://static01.nyt.com/images/2020/03/14/upshot/14up-colleges-remote/14up-colleges-remote-videoSixteenByNineJumbo1600.jpg'
  },
});

// Export the campus model
module.exports = Campus;