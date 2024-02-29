const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL);

app.get("/", (req, res) => {
  res.send("<h1> ติดละ  Server run now!!!</h1>");
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("SERVER is running on http://localhost:" + PORT);
});