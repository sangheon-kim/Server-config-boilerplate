"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var AuthRouter_1 = __importDefault(require("./Router/AuthRouter"));
var App = /** @class */ (function () {
    function App() {
        this.application = express_1.default();
    }
    return App;
}());
var app = new App().application;
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(cookie_parser_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(morgan_1.default("dev"));
app.use(routes_1.default.api, AuthRouter_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map