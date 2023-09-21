import express from 'express'
const router = express.Router()
// const message_controller = require("../controllers/messageController");

router.get("/", (req, res) => {
    res.send('hi')
});

router.get("/new", (req, res) => {
  res.send("form");
});


export default router