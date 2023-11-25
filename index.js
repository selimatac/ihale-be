const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
let port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(morgan("common"));

const firmaRoutes = require("./routes/firma.js");

dotenv.config();
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongoDB");
  } catch (err) {
    console.log(err);
  }
};
app.get("/", (req, res) => {
  res.json({
    "status": "İhale projesi web servisi çalışıyor!",
  });
});

app.use(express.json());
app.use(cors());
app.use(morgan("common"));

app.use("/firma", firmaRoutes);

app.listen(port, () => {
  connect();
  console.log("Server is running on port ", port);
});
