import client from "./client";

const endpoint = "/AirCargo";

const version = "/v1";

const gteShipments = (country) =>
  client.get(
    `${version}${endpoint}/GetByCoulum?col=name&value=${country}&Page=1&PostsPerPage=25`
  );

const getShipmentsPerPage = (schema) =>
  client.get(
    `${version}${endpoint}/GetByCoulum?col=name&value=${schema?.country}&Page=${schema?.page}&PostsPerPage=${schema?.postPerPage}`
  );

const getShipmentById = (orderId) =>
  client.get(`${version}${endpoint}/GetById?id=${orderId}`);

const changeDeleveryPlace = (orderId, place) => 
  client.put(`${version}${endpoint}/DeliveryPlace/${orderId}`, { deliveryPlace: place }); 

const AdvancFilter = (orderNumber) => 
  client.get(`${version}${endpoint}/GetByCoulum?col=orderNumber&value=${orderNumber}&Page=1&PostsPerPage=25`); 

const GetFinancialData = (orderNumber) =>  client.get(`/v1/spair/OrderFinchalData?OrderNumber=${orderNumber}`); 


//https://shippingv2.shahen.ly/api/v1/spair/getbycoulumPayair?col=orderNumber&value=2429491&Page=1&PostsPerPage=5

export default {
  gteShipments,
  getShipmentsPerPage,
  getShipmentById,
  changeDeleveryPlace,
  AdvancFilter,
  GetFinancialData
};
