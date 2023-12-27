const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from your express.js server!");
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
