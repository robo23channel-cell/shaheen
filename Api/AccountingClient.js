import { create } from "apisauce";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "https://gw.accounting.shipping.gw.ly/api",
  //baseURL: "https://accounting.shipping.shahen.ly/api",
});


apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();
    if (!authToken) return;
    request.headers["Authorization"] = "Bearer " + authToken;
  });
  
  

export default apiClient;
