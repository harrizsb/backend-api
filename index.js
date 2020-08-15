const express = require("express");
const cors = require("cors");
const app = express();
const port = 8081;
const router = require("./router");

require("./helpers/databaseConnection");

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
