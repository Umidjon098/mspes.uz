import HTTPMethods from "../HTTPMethods";
import axios from "axios";

export const mainUrl = "http://mspes.kz:81";

export default function mainCaller(
  path,
  method = HTTPMethods.GET,
  data,
  headers,
  params
) {
  const _headers = {
    Accept: "application/json; charset=utf-8",
    ...headers,
  };
  const options = {
    method,
    url: mainUrl + path,
  };
  options.params = params;

  if (data) {
    options.data = data;
    if (data instanceof FormData) {
      _headers["Content-type"] = "multipart/form-data";
    } else {
      _headers["Content-type"] = "application/json; charset=utf-8";
    }
  }

  options.headers = _headers;

  return axios(options).then((r) => r.data);
}