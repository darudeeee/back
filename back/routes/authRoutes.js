const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// 회원가입 라우트
router.post("/signup", authController.signup);

// 로그인 라우트
router.post("/login", authController.login);

module.exports = router;
