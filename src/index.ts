import { MongoConnetction } from "./database/MongoConnection"
import express, { Request, Response } from "express"
import { UrlController } from "./controler/UrlController"

const api = express()
api.use(express.json())

const database = new MongoConnetction()
database.connect()

const urlController = new UrlController()
api.post("/shorten", urlController.shorten)
api.get("/:hash", urlController.redirect)

api.listen(5000, ()=> console.log("express listening"))

//mongodb+srv://kairemerson:<password>@cluster0.0e2fu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
