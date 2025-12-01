import client from "./client";

// const endpoint = '/Filter/Country';

// const version = '/V1';

// const gteShipments = (schema) => client.put(`${version}${endpoint}?Search=${schema?.search}&Country=${schema?.country}&Page=1&PostsPerPage=25`);

// const getShipmentsPerPage = (schema) => client.put(`${version}${endpoint}?Search=${schema?.search}&Country=${schema?.country}&Page=${schema?.page}&PostsPerPage=${schema?.postPerPage}`);

const endpoint = "/LCL";

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

const AdvancFilter = (orderNumber) => 
    client.get(`${version}${endpoint}/GetByCoulum?col=orderNumber&value=${orderNumber}&Page=1&PostsPerPage=25`); 
  
const changeDeleveryPlace = (orderId, place) => 
    client.put(`${version}${endpoint}/DeliveryPlace/${orderId}`, { deliveryPlace: place }); 

const GetFinancialData = (orderNumber) =>  client.get(`/v1/SPLCL/OrderFinchalData?OrderNumber=${orderNumber}`); 


export default {
  gteShipments,
  getShipmentsPerPage,
  getShipmentById,
  AdvancFilter,
  changeDeleveryPlace,
  GetFinancialData
};
