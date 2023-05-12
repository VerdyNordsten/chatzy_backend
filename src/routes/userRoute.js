const express = require("express")
const validation = require("../validations/userValidation")
const runValidation = require("../middlewares/runValidation")
const jwtAuth = require("../middlewares/jwtAuth")
const upload = require("../middlewares/upload")
const photoLimit = require("../middlewares/photoLimit")
const { list, detail, updatePhoto, updateProfile } = require("../controllers/userController")

const router = express.Router()

router.get("/user", jwtAuth, list)
router.get("/user/:id", jwtAuth, detail)
router.put("/user/:id", jwtAuth, validation.updateProfile, runValidation, updateProfile)
router.put("/user/:id/photo", jwtAuth, upload.single("photo"), photoLimit, updatePhoto)

module.exports = router
