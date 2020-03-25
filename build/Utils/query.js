"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Query = /** @class */ (function () {
    function Query(column, table, condition) {
        this.column = column;
        this.table = table;
        this.condition = !!condition ? condition : {};
    }
    Query.prototype.Select = function () {
        var _this = this;
        var sql = "SELECT ";
        if (this.column) {
            this.column.map(function (item, index) {
                if (index !== _this.column.length - 1) {
                    sql = sql + (item + ", ");
                }
                else {
                    sql = sql + (item + " ");
                }
            });
            sql = sql + ("FROM " + this.table + " ");
            if (Object.entries(this.condition).length > 0) {
                Object.entries(this.condition).map(function (item, index) {
                    if (index === 0) {
                        item.map(function (item, index) {
                            if (index % 2 === 0) {
                                sql = sql + ("WHERE " + item + "=");
                            }
                            else {
                                sql = sql + ("\"" + item + "\"");
                            }
                        });
                    }
                    else {
                        item.map(function (item, index) {
                            if (index % 2 === 0) {
                                sql = sql + (" AND " + item + "=");
                            }
                            else {
                                sql = sql + ("\"" + item + "\"");
                            }
                        });
                    }
                });
            }
            return sql;
        }
        else {
            sql = sql + ("* FROM " + this.table + " ");
            if (Object.entries(this.condition).length > 0) {
                Object.entries(this.condition).map(function (item, index) {
                    item.map(function (item, index) {
                        if (index % 2 === 0) {
                            sql = sql + ("WHERE " + item + "=");
                        }
                        else {
                            sql = sql + ("\"" + item + "\"");
                        }
                    });
                });
            }
            return sql;
        }
    };
    return Query;
}());
var SubQuery = /** @class */ (function (_super) {
    __extends(SubQuery, _super);
    function SubQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SubQuery;
}(Query));
exports.default = Query;
//# sourceMappingURL=query.js.map