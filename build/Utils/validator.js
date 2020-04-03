"use strict";
/**
 * Common Class: Validator
 *
 * @since   2019-12-02
 * @author  sangheon Kim
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Validator = /** @class */ (function () {
    function Validator() {
        this.validReqBody = this.validReqBody.bind(this);
    }
    Validator.prototype.validReqBody = function (params, callback) {
        if (!params || !params.body) {
            callback("No request parameter.");
            return;
        }
        callback(null, params);
    };
    return Validator;
}());
exports.default = new Validator();
//# sourceMappingURL=validator.js.map