const express = require("express")
const { isVerified } = require("../middlewares/authorization")
const validation = require("../validations/authValidation")
const runValidation = require("../middlewares/runValidation")
const { register, activation, login } = require("../controllers/authController")

const router = express.Router()

router.post("/auth/register", validation.register, runValidation, register)
router.get("/auth/activation/:token", activation)
router.post("/auth/login", isVerified, validation.login, runValidation, login)

module.exports = router
