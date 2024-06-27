const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const db = require("./DataBase/db");

const app = express();

// Body Parser 설정
app.use(express.json({ limit: "50mb" })); // JSON 파싱 제한 설정
app.use(express.urlencoded({ extended: true, limit: "50mb" })); // URL 인코딩 파싱 제한 설정
app.use(express.raw({ limit: "50mb", type: "application/json" }));

// 요청 헤더의 최대 크기 설정 추가
app.use(express.raw({ limit: "50mb", type: "application/json" }));

// Middleware 설정
app.use(cors()); // CORS 설정
app.use(bodyParser.json()); // JSON 파싱 설정

// Routes 설정
app.use("/", authRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("서버 오류 발생!");
});

// 클라이언트 에러 처리
app.on("clientError", (err, socket) => {
  socket.end("HTTP/1.1 431 Request Header Fields Too Large\r\n\r\n");
});

// 서버 시작
const PORT = process.env.PORT || 3001;
app
  .listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 포트에서 실행 중입니다.`);
  })
  .on("clientError", (err, socket) => {
    socket.end("HTTP/1.1 431 Request Header Fields Too Large\r\n\r\n");
  });
