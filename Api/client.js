import { create } from "apisauce";
import authStorage from "../auth/storage";

const apiClient = create({
  // baseURL: "https://gis.gw.ly/api",
  // baseURL: "https://gw.shahen.gw.ly/api",
  baseURL: "https://shippingv2.shahen.ly/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
   request.headers["Authorization"] = "Bearer " + authToken;
});

export default apiClient;

// {
//   "build": {
//     "preview": {
//       "android": {
//         "buildType": "apk"
//       }
//     },
//     "preview2": {
//       "android": {
//         "gradleCommand": ":app:assembleRelease"
//       }
//     },
//     "preview3": {
//       "developmentClient": true
//     },
//     "production": {}
//   }
// }

// {
//   "build": {
//     "development": {
//       "developmentClient": true,
//       "distribution": "internal"
//     },
//     "preview": {
//       "distribution": "internal"
//     },
//     "production": {}
//   }
// }
// {
//   "build": {
//     "preview": {
//       "android": {
//         "buildType": "apk"
//       }
//     },
//     "preview2": {
//       "android": {
//         "gradleCommand": ":app:assembleRelease"
//       }
//     },
//     "preview3": {
//       "developmentClient": true
//     },
//     "production": {}
//   }
// }
