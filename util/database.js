const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "35.221.157.63",
  user: "root",
  database: "mydb",
  password: "Yasser29",
});

module.exports = pool.promise();
