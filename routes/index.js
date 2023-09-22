import express from 'express'
import guitarController from '../controllers/guitarController.js'
const router = express.Router()


router.get("/", guitarController.index);

router.get('/catalog/guitar/:id', guitarController.guitar_detail)

router.get("/new", (req, res) => {
  res.send("form");
});


export default router