const mysql = require("mysql2");

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "lms",
});

// MySQL 연결
db.connect((err) => {
  if (err) {
    console.error("MySQL 연결 실패:", err);
    return;
  }
  console.log("MySQL 연결 성공");
});

module.exports = db;
