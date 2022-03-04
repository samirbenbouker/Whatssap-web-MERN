import express from "express";

import { getMessage, postMessage } from "./message.controller.js";

const router = express()

router 
    .route("/")
    .get(getMessage)
    .post(postMessage)

export default router