const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // 允许跨域，重要！

// 测试用 API
app.get("/ping", (req, res) => {
  res.send("1234567");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
