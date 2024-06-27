const db = require("../db/db");

// 회원가입 처리
exports.signup = (req, res) => {
  const { userId, userPw, userName } = req.body;
  const sql =
    "INSERT INTO usertable (userId, userPw, userName) VALUES (?, ?, ?)";
  db.query(sql, [userId, userPw, userName], (err, result) => {
    if (err) {
      console.error("Error inserting user:", err);
      res.status(500).json({ message: "Error inserting user" });
      return;
    }
    console.log("User inserted successfully");
    res.status(201).json({ message: "User created successfully" });
  });
};

// 로그인 처리
exports.login = (req, res) => {
  const { userId, userPw } = req.body;
  const sql = "SELECT * FROM usertable WHERE userId = ? AND userPw = ?";
  db.query(sql, [userId, userPw], (err, result) => {
    if (err) {
      console.error("Error querying user:", err);
      res.status(500).json({ message: "Error querying user" });
      return;
    }

    if (result.length > 0) {
      // 로그인 성공
      res.status(200).json({ success: true });
    } else {
      // 로그인 실패
      res.status(200).json({ success: false });
    }
  });
};
