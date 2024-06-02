const express = require("express");
const app = express();
const cors = require("cors");
const data = require("./utils/data.json");

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));
app.get("/quickmatch", (req, res) => {
  res.json({ message: data });
});

app.listen(3000, () => {
  console.log("server connected");
});
