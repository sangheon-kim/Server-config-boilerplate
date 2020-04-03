"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var query_1 = __importDefault(require("../Utils/query"));
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.selectInfo = this.selectInfo.bind(this);
    }
    AuthService.prototype.selectInfo = function (params, callback) {
        var column;
        var table = "";
        var condition;
        table = params.body.name;
        var QueryClass = new query_1.default(column, table, condition);
        var sql = QueryClass.Select();
        params.dbPool.query(sql, function (err, results) {
            if (err) {
                callback(err, params);
                return;
            }
            if (!!results && results.length > 0) {
                params["UserList"] = results;
            }
            callback(null, params);
        });
    };
    return AuthService;
}());
exports.default = new AuthService();
//# sourceMappingURL=AuthService.js.map