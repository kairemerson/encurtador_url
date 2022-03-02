"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MongoConnection_1 = require("./database/MongoConnection");
const express_1 = __importDefault(require("express"));
const UrlController_1 = require("./controler/UrlController");
const api = (0, express_1.default)();
api.use(express_1.default.json());
const database = new MongoConnection_1.MongoConnetction();
database.connect();
const urlController = new UrlController_1.UrlController();
api.post("/shorten", urlController.shorten);
api.get("/:hash", urlController.redirect);
api.listen(5000, () => console.log("express listening"));
//# sourceMappingURL=index.js.map