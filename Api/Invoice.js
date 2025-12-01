import { v4 as uuidv4 } from "uuid";
import client from "./client";

// const endpoint = "/AirCargoInvoice";

const version = "/v1/";

const create = (schema, endpoint, onUploadProgress) => {
  const data = new FormData();
  data.append("Note", "");
  data.append("supplierContact", `${schema?.supplierContact}`);
  data.append("ShipmentType", schema?.ShipmentType);
  data.append("CountryId", schema?.CountryId);
  data.append("BranchId", schema?.BranchId);

  schema.image.forEach((image, index) => {
    let type = image?.uri?.split(".").pop(); // Get the file extension
    type = type.toLowerCase(); // Convert to lowercase for consistency

    data.append("Image", {
      name: `image-${Date.now()}.${type}`, // Using a timestamp for unique names
      type: `image/${type}`, // Dynamically set the image type
      uri: image.uri,
    });
  });

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  return client.post(`${version}${endpoint}`, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
    headers,
  });
};

export default {
  create,
};
