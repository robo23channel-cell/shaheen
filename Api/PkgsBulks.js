import client from "./client";

const endpoint = "/PkgsBulks";
const version = "/V1";

const trackOrder = (orderId) =>
  client.get(`${version}${endpoint}/OrderPrograss?cargoType=1&OrderNumber=${orderId}&CountryCode=CN`, );

export default {
  trackOrder,
};
