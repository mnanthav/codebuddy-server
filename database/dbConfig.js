// dbConfig.js
//------------------------------------------------
const knex = require('knex');

// configs from knexfile.js
const config = require('../knexfile');

// declare database 
const db = knex(config.development);

// export configured database
module.exports = db;