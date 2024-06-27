const db = require("../DataBase/db");

// 회원가입 처리
exports.signup = (req, res) => {
  const { userId, userPw, userName } = req.body;
  const sql =
    "INSERT INTO usertable (userId, userPw, userName) VALUES (?, ?, ?)";
  db.query(sql, [userId, userPw, userName], (err, result) => {
    if (err) {
      console.error("회원가입 오류:", err);
      res.status(500).json({ success: false, message: "회원가입 실패" });
      return;
    }
    console.log("회원가입 성공");
    res.status(201).json({ success: true, message: "회원가입 성공" });
  });
};

// 로그인 처리
exports.login = (req, res) => {
  const { userId, userPw } = req.body;
  const sql = "SELECT * FROM usertable WHERE userId = ? AND userPw = ?";
  db.query(sql, [userId, userPw], (err, results) => {
    if (err) {
      console.error("로그인 오류:", err);
      res.status(500).json({ success: false, message: "로그인 실패" });
      return;
    }

    if (results.length > 0) {
      // 로그인 성공
      res.status(200).json({ success: true, message: "로그인 성공" });
    } else {
      // 로그인 실패
      res.status(401).json({
        success: false,
        message: "아이디 또는 비밀번호가 올바르지 않습니다.",
      });
    }
  });
};
