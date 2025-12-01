import client from "./client";

 


  const fetchAiwe = () => client.get('/v1/Warehouse/GetById?id=4a2d4a3a-4268-461d-835e-430a45eaa768'); 
  const fetchAiwetest = () => client.get('/v1/Warehouse/GetById?id=823d160a-20bb-49cb-b9f5-e956ecd1f0c2'); 
  const fetchGwanzu = () => client.get('/v1/Warehouse/GetById?id=b31e9692-1049-49c8-a2f1-132a819b0dfc'); 


export default {
    fetchAiwe,
    fetchGwanzu,
    fetchAiwetest
};
