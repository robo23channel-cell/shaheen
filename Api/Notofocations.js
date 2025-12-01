import client from "./client";

const endpoint = "/Notification";

const version = "/V1";

const geterPage = (schema) =>
  client.get(
    `${version}${endpoint}?page=${schema?.page}&postPage=${schema?.postPerPage}`
  );
const readApi = (id) => client.get(`${version}${endpoint}/Read?id=${id}`);

export default {
  geterPage,
  readApi,
};
