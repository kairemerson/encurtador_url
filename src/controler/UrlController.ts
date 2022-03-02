import { URLModel } from "../database/model/url";
import { Request, response, Response } from "express";
import shortId from "shortid"
import {config} from "../config/constants"

export class UrlController{
   public async shorten (req: Request, resp: Response): Promise<void>{
       const {originUrl} = req.body
        const url = await URLModel.findOne({originUrl})
        if(url){
            resp.json(url)
            return
        }

       const hash = shortId.generate()
       const shortUrl = `${config.API_URL}/${hash}`
       const newUrl = await URLModel.create({hash, shortUrl, originUrl})

       resp.json(newUrl)
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