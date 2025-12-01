import client from "./client";

const endpointAir = "/Account";

const version = "/v1";

const balance = (id) =>
  client.get(
    `${version}${endpointAir}/CustomerBalancesSumReport?customerId=${id}`
  );

const getAllData = (code) =>
  client.get(
    `/v1/Customer/CustomerData?code=${code}`
  );

  const getMovements = (schema) => 
    client.get(
      `/v1/Customer/CustomerAccountMovement?code=${schema.code}&Page=${schema.page}&PostsPerPage=${schema.postPerPage}`
    );

  // page: page,
  // postPerPage: 10,
  // code: user.code,

export default {
  balance,
  getAllData,
  getMovements
};
