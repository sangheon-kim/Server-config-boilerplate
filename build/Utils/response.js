"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Response = /** @class */ (function () {
    function Response() {
        this.makeHttpResponse = this.makeHttpResponse.bind(this);
        this.makeResponse = this.makeResponse.bind(this);
        this.makeSimpleSuccessResponse = this.makeSimpleSuccessResponse.bind(this);
        this.makeSuccessResponse = this.makeSuccessResponse.bind(this);
        this.makeErrorResponse = this.makeErrorResponse.bind(this);
        this.makeResponseByResult = this.makeResponseByResult.bind(this);
    }
    Response.prototype.makeHttpResponse = function (res, statusCode, result) {
        res.status(statusCode).json(result);
    };
    Response.prototype.makeResponse = function (res, statusCode, status, msg, info) {
        var result = {
            Status: status,
            Msg: msg
        };
        var isInfo = Boolean(info);
        if (isInfo)
            result["Info"] = info;
        return this.makeHttpResponse(res, statusCode, result);
    };
    Response.prototype.makeSuccessResponse = function (res, info) {
        return this.makeResponse(res, 200, "OK", "success", info);
    };
    Response.prototype.makeSimpleSuccessResponse = function (res) {
        return this.makeSuccessResponse(res, null);
    };
    Response.prototype.makeErrorResponse = function (res, statusCode, msg) {
        return this.makeResponse(res, statusCode, "ERROR", msg, null);
    };
    Response.prototype.makeResponseByResult = function (res, err, info) {
        if (err) {
            if (err === "err_unknown_error")
                return this.makeErrorResponse(res, 500, "err_unknown_error");
            return this.makeErrorResponse(res, 200, err);
        }
        return this.makeSuccessResponse(res, info);
    };
    return Response;
}());
exports.default = new Response();
//# sourceMappingURL=response.js.map