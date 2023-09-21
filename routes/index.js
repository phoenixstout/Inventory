import express from 'express'
import guitarController from '../controllers/guitarController.js'
const router = express.Router()


router.get("/", guitarController);

router.get("/new", (req, res) => {
  res.send("form");
});


export default router