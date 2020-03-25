import express from "express";

interface Result {
  Status: string;
  Msg: string;
  Info?: any;
}

class Response {
  constructor() {
    this.makeHttpResponse = this.makeHttpResponse.bind(this);
    this.makeResponse = this.makeResponse.bind(this);
    this.makeSimpleSuccessResponse = this.makeSimpleSuccessResponse.bind(this);
    this.makeSuccessResponse = this.makeSuccessResponse.bind(this);
    this.makeErrorResponse = this.makeErrorResponse.bind(this);
    this.makeResponseByResult = this.makeResponseByResult.bind(this);
  }

  public makeHttpResponse(
    res: express.Response,
    statusCode: number,
    result: any
  ) {
    res.status(statusCode).json(result);
  }

  public makeResponse(
    res: express.Response,
    statusCode: number,
    status: string,
    msg: string,
    info: any
  ) {
    let result: Result = {
      Status: status,
      Msg: msg
    };

    let isInfo = Boolean(info);
    if (isInfo) result["Info"] = info;

    return this.makeHttpResponse(res, statusCode, result);
  }

  public makeSuccessResponse(res: express.Response, info: any) {
    return this.makeResponse(res, 200, "OK", "success", info);
  }

  public makeSimpleSuccessResponse(res: express.Response) {
    return this.makeSuccessResponse(res, null);
  }

  public makeErrorResponse(
    res: express.Response,
    statusCode: number,
    msg: string
  ) {
    return this.makeResponse(res, statusCode, "ERROR", msg, null);
  }

  public makeResponseByResult(res: express.Response, err: any, info: any) {
    if (err) {
      if (err === "err_unknown_error")
        return this.makeErrorResponse(res, 500, "err_unknown_error");

      return this.makeErrorResponse(res, 200, err);
    }
    return this.makeSuccessResponse(res, info);
  }
}

export default new Response();
