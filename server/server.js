const express = require("express");
const cors = require("cors");
const path = require("path");
const ctrl = require("./controller");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// //For Heroku:
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

//Requests:
app.get("/", ctrl.getUsers);

//Server setup:
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
