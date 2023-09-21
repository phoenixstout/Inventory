const express = require("express");
const router = express.Router();
// const message_controller = require("../controllers/messageController");

router.get("/", (req, res) => {
    res.send('hi')
});

router.get("/new", (req, res) => {
  res.send("form");
});


module.exports = router;