import mainCaller from "./mainCaller";
import HTTPMethods from "../HTTPMethods";

export class JournalApi {
  static endpoint = "/api/v1/journals/";

  static get(params) {
    return mainCaller(this.endpoint, HTTPMethods.GET, null, null, params);
  }
  static getOne(id) {
    return mainCaller(
      `${this.endpoint + id}/articles`,
      HTTPMethods.GET,
      null,
      null
    );
  }
}
