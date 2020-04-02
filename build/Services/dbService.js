"use strict";
/**
 * DB Service
 *
 * @since   2019-10-01
 * @author  shkim, ywkim
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var DBService = /** @class */ (function () {
    function DBService() {
        this.connect = this.connect.bind(this);
        this.disconnect = this.disconnect.bind(this);
    }
    DBService.prototype.connect = function (params, callback) {
        console.log("connect");
        console.log(params.body);
        if (params.dbPool) {
            callback(null, params);
            return;
        }
        var config2 = {
            user: "root",
            password: "JxEbk7ir2mB4bKN9",
            database: "suple",
            host: process.env.DB_ADDRESS,
            port: 3306,
            connectionLimit: 200,
            multipleStatements: true
        };
        params["dbPool"] = mysql_1.default.createPool(config2);
        callback(null, params);
    };
    DBService.prototype.disconnect = function (params, callback) {
        console.log("disConnect");
        params.dbPool.end(function (err) {
            if (err) {
                callback(err, params);
                return;
            }
            callback(null, params);
        });
    };
    return DBService;
}());
exports.default = DBService;
//# sourceMappingURL=dbService.js.map