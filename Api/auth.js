import { v4 as uuidv4 } from "uuid";

import client from "./client";

const endpoint = "/v1/User";

const signIn = (schema) => client.post(`${endpoint}/Login`, schema);

const signUp = (schema) => {
  const data = new FormData();
  data.append("FullName", schema?.fullName);
  data.append("UserName", schema?.userName);
  data.append("Email", schema?.email);
  data.append("BranchId", schema?.BranchId);
  data.append("Password", schema?.password);
  data.append("ConfirmPassword", schema?.confirmPassword);
  data.append("CompanyName", schema?.companyName);
  data.append("WhatsappPhone", schema?.whatsappPhone);
  data.append("UserType", schema?.userType);
  data.append("Culture", 1);
  data.append("DocType", "1");
  schema.images.forEach((image, index) => {
     let type = image?.uri?.split(".");
    type = type[type.length - 1];

    data.append("Image", {
      name: `image-${Math.random() * 100}.${type}`,
      type: "image/jpeg",
      uri: image.uri,
    });
  });

  const headers = {
    "Content-Type": "multipart/form-data", // Ensure this header is set
  };

  return client.post(`${endpoint}/registerApp`, data, { headers });
};

const expoToken = (schema) => client.put(`${endpoint}/Expo`, schema);

const updateProfile = (schema) =>
  client.put(`${endpoint}/RestPassword/${schema}`);

export default {
  signIn,
  signUp,
  expoToken,
  updateProfile,
};
