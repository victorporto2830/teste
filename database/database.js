const mysql = require("mysql2");

const database = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "senha",
    database: "Teste"
  }) 
  || 
  mysql.createPool(process.env.DATABASE_URL);
  
module.exports = database;