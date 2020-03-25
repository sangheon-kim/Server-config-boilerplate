/**
 * Common Class: Validator
 *
 * @since   2019-12-02
 * @author  sangheon Kim
 */

class Validator {
  constructor() {
    this.validReqBody = this.validReqBody.bind(this);
  }

  public validReqBody(params: any, callback: any) {
    if (!params || !params.body) {
      callback("No request parameter.");
      return;
    }

    callback(null, params);
  }
}

export default new Validator();
