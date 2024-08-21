const { users } = require("../controllers/users.controller");
const router = require("express").Router();

router.get("/", users);

module.exports = router;
