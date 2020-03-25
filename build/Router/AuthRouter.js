"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("../routes"));
var Auth_1 = __importDefault(require("../Controllers/Auth"));
var AuthRouter = express_1.default.Router();
AuthRouter.post(routes_1.default.socialJoin, Auth_1.default.socialJoin);
exports.default = AuthRouter;
//# sourceMappingURL=AuthRouter.js.map