import client from "./client";

const endpointAir = "/AirPrice/Calculate";
const endpointSea = "/LCLPrice/Calculate";
const endpointFCL = "/TransferPrice/Calculate";

const version = "/v1";

const calculate = (schema) =>
  schema?.shipmentType === 1
    ? client.put(`${version}${endpointAir}`, schema)
    : schema?.shipmentType === 2 ?
     client.put(`${version}${endpointSea}`, schema)
     :schema?.shipmentType === 3 ?
     client.put(`${version}${endpointFCL}`, schema)
      : console.log("");


  const getAirPricing = () => client.put(`/v1/CalculatorSetting/CurrentAirPricing`, { shippingType: 1, countryId: "67f1df67-7a44-457b-84f0-d7996d20c2cd" });
  const getSeaPricing = () => client.put(`/v1/CalculatorSetting/CurrentLclPricing`, { shippingType: 1, countryId: "67f1df67-7a44-457b-84f0-d7996d20c2cd" });
  const Iwanfetch = () => client.get('/v1/ShahenConfig/TransferPricePath'); 


export default {
  calculate,
  getAirPricing,
  getSeaPricing,
  Iwanfetch
};
