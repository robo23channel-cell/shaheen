import client from "./client";


const endpoint = "/Ticket";


const version = "/v1";

 
// subject: "الاستعلام عن شحنة",
// description: ``,
// customerId: user.id,
// ticketType: 1,
// ticketState: 1,
// image:  [selectedImage] 

const createTicket = (schema) => {
    const data = new FormData();
    data.append("Subject", schema?.subject);
    data.append("Description", schema?.description);
    data.append("CustomerId", schema?.customerId);
    data.append("TicketType", schema?.ticketType);
    data.append("TicketState", schema?.ticketState);

    schema.images.forEach((image, index) => {
       if(!image) return;
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
  
    return client.post(`${version}${endpoint}/Customer/Create`, data, { headers });
  };


  export default {
    createTicket,

  };
  