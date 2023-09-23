import express from 'express'
import guitarController from '../controllers/guitarController.js'
const router = express.Router()


router.get("/", guitarController.index);

router.get('/guitar/:id', guitarController.guitar_detail)

router.get("/newguitar", guitarController.new_guitar);

router.post('/newguitar', guitarController.new_guitar_post)

router.get('/newcategory', guitarController.new_category)
router.post('/newcategory', guitarController.new_category_post)

router.post('/updateguitar/:id', guitarController.update_guitar)

export default router