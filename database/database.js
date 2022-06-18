require('dotenv').config()
const mysql = require("mysql2");
const pg = require('pg')

const pool = new pg.Pool({ connectionString: process.env.HEROKU_POSTGRESQL_JADE_URL });
const database = pool.connect();

//const databasee = mysql.createPool(process.env.DATABASE_URL);

module.exports = database;