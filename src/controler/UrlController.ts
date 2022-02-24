import { Request, response, Response } from "express";
import shortId from "shortid"
import {config} from "../config/constants"

export class UrlController{
   public async shorten (req: Request, resp: Response): Promise<void>{
       const {originUrl} = req.body
       const hash = shortId.generate()
       const shortUrl = `${config.API_URL}/${hash}`

       resp.json({originUrl, hash, shortUrl})
   }
   public async redirect (req: Request, resp: Response): Promise<void>{
       const {hash} = req.params
       const url = {
           originUrl: "https://stackoverflow.com/questions/41211566/tsconfig-json-buildno-inputs-were-found-in-config-file",
           hash: "8i65JxfiC",
           shortUrl: "http://localhost:5000/8i65JxfiC"       
       }
       resp.redirect(url.originUrl)
    }

}