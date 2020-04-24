const router = require("express").Router();
const jwt = require('jsonwebtoken');
const Users = require("./users-model.js");

router.get("/", (req, res) => {
  const user = jwt.decode(req.headers.authorization);
  Users.findByDepartment(user.department)
  .then(users => {
    res.json(users);
  })
  .catch(err => res.send(err));

});
module.exports = router;
