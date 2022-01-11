const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const server = app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);

app.use(
  process.env.DIRECTORY_ENDPOINT,
  express.static(process.env.DIRECTORY_PATH)
);

app.get("*", function (req, res) {
  res.status(404).send(404);
});
