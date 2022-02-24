import express, { Request, Response } from "express"
import { UrlController } from "./controler/UrlController"

const api = express()
api.use(express.json())

const urlController = new UrlController()
api.post("/shorten", urlController.shorten)
api.get("/:hash", urlController.redirect)

api.listen(5000, ()=> console.log("express listening"))

