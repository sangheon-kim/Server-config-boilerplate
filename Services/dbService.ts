/**
 * DB Service
 *
 * @since   2019-10-01
 * @author  shkim, ywkim
 */

import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

class DBService {
  constructor() {
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
  }

  public connect(params: any, callback: any) {
    console.log("connect");
    if (params.dbPool) {
      callback(null, params);
      return;
    }



    const config2: any = {
      user: "root",
      password: "JxEbk7ir2mB4bKN9",
      database: "suple",
      host: process.env.DB_ADDRESS,
      port: 3306,
      connectionLimit: 200,
      multipleStatements: true
    };

    params["dbPool"] = mysql.createPool(config2);

    callback(null, params);
  }

  public disconnect(params: any, callback: any) {
    console.log("disConnect");
    params.dbPool.end((err: any) => {
      if (err) {
        callback(err, params);
        return;
      }
      callback(null, params);
    });
  }
}

export default DBService;
