const express = require('express')

const router = express.Router()

router.get("/login",loginUser)
router.post("/signup",signup)