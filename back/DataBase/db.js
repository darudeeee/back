const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "lms", // 데이터베이스 이름
});

db.connect((err) => {
  if (err) {
    console.error("DB connecting Error:", err);
    return;
  }
  console.log("DB connecting Success");
});

module.exports = db;
