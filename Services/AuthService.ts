import Query from "../Utils/query";

class AuthService {
  constructor() {
    this.selectInfo = this.selectInfo.bind(this);
  }

  public selectInfo(params: any, callback: any) {
    const QueryClass = new Query(
      params.body.column,
      params.body.table,
      params.body.condition
    );
    let sql = QueryClass.Select();

    params.dbPool.query(sql, (err: any, results: any) => {
      console.log(sql);
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
