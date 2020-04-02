"use strict";
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
exports.default = Query;
//# sourceMappingURL=query.js.map