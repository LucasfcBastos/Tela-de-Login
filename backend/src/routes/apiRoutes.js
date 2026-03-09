const express = require("express")
const router = express.Router()

const authController = require("../app/Http/controllers/authController")

router.post("/register", authController.register)
router.post("/login", authController.login)

module.exports = router