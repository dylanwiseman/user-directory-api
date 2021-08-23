const data = require("./db.json");

module.exports = {
  getUsers: (req, res) => {
    res.status(200).send(data);
  },
};
