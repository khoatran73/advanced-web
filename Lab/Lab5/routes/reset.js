const express = require("express")
const router = express.Router()
const resetController = require("../controllers/ResetController")

router.get('/', resetController.reset)

module.exports = router
