const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connected successfully.");
});

const userRoutes = require("./routes/userRoutes");
const mountainRoutes = require("./routes/mountainRoutes");

app.use("/api/users", userRoutes);
app.use("/api/mountains", mountainRoutes);

app.get("/", (req, res) => {
  res.send({ message: "Hello from the server!" });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
