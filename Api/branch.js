import client from "./client";

const endpoint = "/Branch";

const version = "/v1";

const getBranches = (schema) =>
  client.get(`${version}${endpoint}/GetByCoulum?col=name`, schema);

export default {
  getBranches,
};
