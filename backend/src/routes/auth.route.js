import express from 'express'
import {signupController, loginController, logoutController, getUserController} from './../controllers/auth.controller.js'

const router = express.Router()

router.post("/signup",signupController)
router.post("/login",loginController)
router.post("/logout",logoutController)
router.get("/user",getUserController)

export default router
/*
    note:
    1. login is a post request to prevent browser caching authenticated details for get responses
    2. login is also a post request because post requests allow data to be sent in req bodies and get requests use url parameters which are stored in plaintext hence easily accessible
    3. logout is a post request because get requests are normally idempotent by convention and are prefetched by crawlers which may accidentally trigger logouts when 'fetching' response
 */