const express = require('express')
const activityController = require('../controllers/activityController')
const router = express.Router()

router.post('/configactivity', activityController.configActivity)
router.get('/activity/:id', activityController.getActivity)
router.get('/getActivities', activityController.getActivities)
module.exports = router