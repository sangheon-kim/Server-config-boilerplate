import Query from "../Utils/query";

class AuthService {
  constructor() {
    this.selectInfo = this.selectInfo.bind(this);
  }

  public selectInfo(params: any, callback: any) {
    let column: any;
    let table = "";
    let condition: any;

    table = params.body.name;

    const QueryClass = new Query(column, table, condition);
    let sql = QueryClass.Select();

    params.dbPool.query(sql, (err: any, results: any) => {
      if (err) {
        callback(err, params);
        return;
      }

      if (!!results && results.length > 0) {
        params["UserList"] = results;
      }
      callback(null, params);
    });
  }
}

export default new AuthService();
