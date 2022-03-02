"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
const url_1 = require("../database/model/url");
const shortid_1 = __importDefault(require("shortid"));
const constants_1 = require("../config/constants");
class UrlController {
    shorten(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { originUrl } = req.body;
            const url = yield url_1.URLModel.findOne({ originUrl });
            if (url) {
                resp.json(url);
                return;
            }
            const hash = shortid_1.default.generate();
            const shortUrl = `${constants_1.config.API_URL}/${hash}`;
            const newUrl = yield url_1.URLModel.create({ hash, shortUrl, originUrl });
            resp.json(newUrl);
        });
    }
    redirect(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { hash } = req.params;
            const url = {
                originUrl: "https://stackoverflow.com/questions/41211566/tsconfig-json-buildno-inputs-were-found-in-config-file",
                hash: "8i65JxfiC",
                shortUrl: "http://localhost:5000/8i65JxfiC"
            };
            resp.redirect(url.originUrl);
        });
    }
}
exports.UrlController = UrlController;
//# sourceMappingURL=UrlController.js.map