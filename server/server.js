const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 8081;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
  });

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
