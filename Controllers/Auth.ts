import { SimpleParams } from "./../Types/index.d";
import express from "express";
import async from "async";
import response from "../Utils/response";
import validator from "../Utils/validator";
import DBService from "../Services/dbService";
import AuthService from "../Services/AuthService";

class Auth extends DBService {
  constructor() {
    super();
  }

  public socialJoin = async (req: express.Request, res: express.Response) => {
    let makeResponse = (err: any, params: any) => {
      if (err) {
        response.makeResponseByResult(res, err, null);
        return;
      }

      let info = {
        test: params.UserList
      };
      response.makeResponseByResult(res, err, info);
    };

    let params: SimpleParams = {
      body: req.body
    };

    async.waterfall(
      [
        async.constant(params),
        validator.validReqBody,
        this.connect,
        AuthService.selectInfo,
        this.disconnect
      ],
      makeResponse
    );
  };
}

export default new Auth();
