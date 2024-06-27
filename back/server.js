const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/", authRoutes);

// 서버 시작
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
